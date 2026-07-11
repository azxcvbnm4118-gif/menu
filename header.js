(() => {
  const drawer = document.querySelector("#drawerMenu");
  const openButton = document.querySelector(".hamburger-button");
  const backdrop = document.querySelector(".drawer-backdrop");
  const closeButtons = document.querySelectorAll("[data-drawer-close]");
  const headerCartButtons = document.querySelectorAll("#headerCartBtn, [data-header-cart]");
  const headerSearchInputs = document.querySelectorAll("[data-header-search]");
  const cartStorageKey = "somtam_cart_v1";

  function setDrawer(open) {
    if (!drawer || !openButton || !backdrop) return;
    drawer.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-open", open);
    backdrop.hidden = !open;
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    openButton.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("drawer-open", open);
  }

  openButton?.addEventListener("click", () => {
    setDrawer(!drawer?.classList.contains("is-open"));
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => setDrawer(false));
  });

  drawer?.addEventListener("click", (event) => {
    if (event.target.closest("a")) setDrawer(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setDrawer(false);
  });

  headerCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const cartModal = document.querySelector("#cartModal");
      if (cartModal && typeof window.openCartModal === "function") {
        window.openCartModal();
        return;
      }
      window.location.href = "index.html#menu";
    });
  });

  headerSearchInputs.forEach((input) => {
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const query = input.value.trim();
      const target = query ? `index.html?search=${encodeURIComponent(query)}#menu` : "index.html#menu";
      window.location.href = target;
    });
  });

  function setActiveDrawerLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".drawer-nav a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const linkPage = href.split("#")[0] || "index.html";
      const isMenuLink = href.includes("#menu") && currentPage === "index.html" && window.location.hash === "#menu";
      const isCurrentPage = linkPage === currentPage && !href.includes("#menu");
      if (isMenuLink || isCurrentPage) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function updateHeaderCartCount() {
    try {
      const raw = localStorage.getItem(cartStorageKey);
      const entries = raw ? JSON.parse(raw) : [];
      const count = Array.isArray(entries)
        ? entries.reduce((sum, entry) => sum + Number(entry?.[1]?.quantity || 0), 0)
        : 0;
      document.querySelectorAll(".header-cart-button span").forEach((badge) => {
        badge.textContent = String(count);
      });
      document.querySelectorAll(".header-cart-button").forEach((button) => {
        button.classList.toggle("has-items", count > 0);
      });
    } catch (error) {
      document.querySelectorAll(".header-cart-button span").forEach((badge) => {
        badge.textContent = "0";
      });
    }
  }

  setActiveDrawerLink();
  updateHeaderCartCount();
  window.addEventListener("storage", updateHeaderCartCount);
})();
