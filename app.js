const ORDER_ENDPOINT = "https://somtam-line-order.azxcvbnm4118.workers.dev/";

const spiceLevels = ["ไม่เผ็ด", "เผ็ดน้อย", "เผ็ดกลาง", "เผ็ดมาก", "เผ็ดสะใจ"];
const placeholderImage =
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80";

const menuImages = {
  "somtam-plara": "images/ส้มตำปลาร้า = IMG_0001.jpg",
  "tam-pa": "images/ตำป่า = IMG_0002.jpg",
  "tam-taeng": "images/ตำแตง = IMG_0003.jpg",
  "tam-sua": "images/ตำซั่ว = IMG_0004.jpg",
  "tam-senlek": "images/ตำเส้นเล็ก = IMG_0005.jpg",
  "tam-lao": "images/ตำเหลา = IMG_0006.jpg",
  "tam-kanomjeen": "images/ตำขนมจีน = IMG_0007.jpg",
  "bamboo-soup": "images/ซุปหน่อไม้ = IMG_0008.jpg",
  "bamboo-curry": "images/แกงหน่อไม้ = IMG_0009.jpg",
  "tam-pa-seafood": "images/ตำป่าทะเลรวม = IMG_0010.jpg",
  "tam-plara-squid-neck": "images/ตำปลาร้าคอหมึก = IMG_0011.jpg",
  "tam-thai": "images/ตำไทย = IMG_0012.jpg",
  "tam-corn": "images/ตำข้าวโพด = IMG_0013.jpg",
  "tam-thai-taeng": "images/ตำไทยแตง = IMG_0014.jpg",
  "tam-thai-corn": "images/ตำไทย+ข้าวโพด = IMG_0015.jpg",
  "tam-thai-pa": "images/ตำไทยป่า = IMG_0016.jpg",
  "tam-thai-kanomjeen": "images/ตำไทยขนมจีน = IMG_0017.jpg",
  "tam-thai-lao": "images/ตำไทยเหลา = IMG_0018.jpg",
  "tam-thai-sua": "images/ตำไทยซั่ว = IMG_0019.jpg",
  "tam-thai-senlek": "images/ตำไทยเส้นเล็ก = IMG_0020.jpg",
  "yum-woonsen": "images/ยำวุ้นเส้น = IMG_0021.jpg",
  "yum-lao": "images/ยำเหลา = IMG_0022.jpg",
  "yum-glass": "images/ยำเส้นแก้ว = IMG_0023.jpg",
  "yum-mama": "images/ยำมาม่า = IMG_0024.jpg",
  "larb-snail": "images/ลาบหอย = IMG_0025.jpg",
  "larb-minced-pork": "images/ลาบหมูสับ = IMG_0026.jpg",
  "namtok-pork": "images/น้ำตกหมูย่าง = IMG_0027.jpg",
  "yum-pickled-crab": "images/ยำปูเปรี้ยว = IMG_0028.jpg",
  "larb-pickled-crab": "images/ลาบปูเปรี้ยว = IMG_0029.jpg",
  "grilled-chicken": "images/ไก่ย่าง = IMG_0030.jpg",
  "sticky-rice": "images/ข้าวเหนียว = IMG_0031.jpg",
  "grilled-pork": "images/หมูย่าง = IMG_0032.jpg",
  "kanomjeen": "images/ขนมจีน = IMG_0033.jpg",
  "pork-crackling": "images/แคปหมู = IMG_0034.jpg",
  "thai-tea": "images/ชาเย็น = IMG_0035.jpg",
  "green-tea": "images/ชาเขียว = IMG_0036.jpg",
  "lemon-tea": "images/ชามะนาว = IMG_0037.jpg",
  "milk-tea": "images/ชานม = IMG_0038.jpg",
  "ovaltine": "images/โอวัลติน = IMG_0039.jpg",
  "taro": "images/เผือก = IMG_0040.jpg",
  "coffee": "images/กาแฟ = IMG_0041.jpg",
  "cocoa": "images/โกโก้ = IMG_0042.jpg",
  "red-soda": "images/น้ำแดงโซดา = IMG_0043.jpg",
  "red-lime-soda": "images/น้ำแดงโซดามะนาว = IMG_0044.jpg",
  "lychee-soda": "images/ลิ้นจี่โซดา = IMG_0045.jpg",
  "apple-soda": "images/แอปเปิ้ลโซดา = IMG_0046.jpg",
  "grape-soda": "images/องุ่นโซดา = IMG_0047.jpg",
  "blue-hawaii": "images/บลูฮาวายโซดา = IMG_0048.jpg",
  "strawberry-soda": "images/สตอเบอรี่โซดา = IMG_0049.jpg",
  "orange-soda": "images/ส้มโซดา = IMG_0050.jpg",
  "honey-lime": "images/น้ำผึ้งมะนาว = IMG_0051.jpg",
  "honey-lime-soda": "images/น้ำผึ้งมะนาวโซดา = IMG_0052.jpg",
  "grass-jelly-milk": "images/เฉาก๊วยนมสด = IMG_0053.jpg",
  "grass-jelly-classic": "images/เฉาก๊วยโบราณ = IMG_0054.jpg",
  "coconut-smoothie": "images/มะพร้าวปั่นนมสด = IMG_0055.jpg",
};

const FEATURED_ITEM_IDS = [
  "somtam-plara",
  "yum-mama",
  "larb-minced-pork",
  "tam-lao",
  "tam-senlek",
  "tam-kanomjeen",
  "bamboo-soup",
];

const FEATURED_DISPLAY_COPY = {
  "somtam-plara": "รสจัดจ้าน ปลาร้านัวถึงใจ",
  "yum-mama": "ยำซี๊ด ๆ เส้นเหนียวนุ่ม",
  "larb-minced-pork": "หมูสับแน่น ๆ แซ่บอีสานแท้",
  "tam-lao": "เครื่องแน่นเต็มจาน",
  "tam-senlek": "เส้นเหนียวนุ่ม คลุกปลาร้านัว",
  "tam-kanomjeen": "ขนมจีนคลุกน้ำตำรสเด็ด",
  "bamboo-soup": "หอมข้าวคั่ว นัวปลาร้า",
};

const categoryMeta = {
  plara: { label: "เมนูปลาร้า", heading: "ปลาร้านัว ๆ" },
  thai: { label: "เมนูไม่ปลาร้า", heading: "แซ่บกลมกล่อม" },
  yum: { label: "เมนูยำแซ่บ", heading: "ถึงเส้นถึงเครื่อง" },
  pairing: { label: "กินคู่กัน", heading: "ของกินคู่ส้มตำ" },
  drink: { label: "เมนูเครื่องดื่ม", heading: "สดชื่น แก้เผ็ด" },
};

const menuGroups = [
  // ─── กลุ่ม 2: เมนูปลาร้าทั้งหมด ───
  {
    id: "plara-all",
    category: "plara",
    title: "เมนูปลาร้าทั้งหมด",
    subtitle: "ครบทุกสไตล์ส้มตำปลาร้า",
    items: [
      variantItem("somtam-plara", "ส้มตำปลาร้า", "รสจัดจ้าน ปูเน้นๆ ปลาร้าต้มสุก นัวถึงใจ", [
        ["base", "ธรรมดา", 40],
        ["pickled-crab", "ปูเปรี้ยว", 49],
        ["pork-sausage", "หมูยอ", 69],
        ["chicken-feet", "เล็บมือนาง", 79],
        ["shrimp", "กุ้งสด/สุก", 89],
        ["squid-neck", "คอหมึก", 89],
        ["squid", "ปลาหมึก", 89],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      variantItem("tam-pa", "ตำป่า", "ตำป่าใส่มะเขือ ถั่วฝักยาว รสเข้มข้น", [
        ["base", "ธรรมดา", 49],
        ["pickled-crab", "ปูเปรี้ยว", 59],
        ["pork-sausage", "หมูยอ", 89],
        ["chicken-feet", "เล็บมือนาง", 99],
        ["shrimp", "กุ้งสด/สุก", 109],
        ["squid-neck", "คอหมึก", 109],
        ["squid", "ปลาหมึก", 109],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 149],
      ]),
      variantItem("tam-taeng", "ตำแตง", "ตำแตงกวาสดกรอบ รสชาติกลมกล่อม", [
        ["base", "ธรรมดา", 40],
        ["pickled-crab", "ปูเปรี้ยว", 49],
        ["pork-sausage", "หมูยอ", 69],
        ["chicken-feet", "เล็บมือนาง", 79],
        ["shrimp", "กุ้งสด/สุก", 89],
        ["squid-neck", "คอหมึก", 89],
        ["squid", "ปลาหมึก", 89],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      variantItem("tam-sua", "ตำซั่ว", "ตำซั่วสูตรพิเศษ เส้นใหญ่นุ่มเหนียว", [
        ["base", "ธรรมดา", 49],
        ["pickled-crab", "ปูเปรี้ยว", 59],
        ["pork-sausage", "หมูยอ", 79],
        ["chicken-feet", "เล็บมือนาง", 89],
        ["shrimp", "กุ้งสด/สุก", 99],
        ["squid-neck", "คอหมึก", 99],
        ["squid", "ปลาหมึก", 99],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 149],
      ]),
      variantItem("tam-senlek", "ตำเส้นเล็ก", "เส้นเล็กเหนียวนุ่ม คลุกน้ำตำปลาร้ารสจัด", [
        ["base", "ธรรมดา", 49],
        ["pickled-crab", "ปูเปรี้ยว", 59],
        ["pork-sausage", "หมูยอ", 69],
        ["chicken-feet", "เล็บมือนาง", 79],
        ["shrimp", "กุ้งสด/สุก", 89],
        ["squid-neck", "คอหมึก", 89],
        ["squid", "ปลาหมึก", 89],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      variantItem("tam-lao", "ตำเหลา", "ไม่เน้นเส้น เครื่องแน่น เลือกวัตถุดิบที่ชอบ", [
        ["pickled-crab", "ปูเปรี้ยว", 69],
        ["pork-sausage", "หมูยอ", 89],
        ["chicken-feet", "เล็บมือนาง", 109],
        ["shrimp", "กุ้งสด/สุก", 119],
        ["squid-neck", "คอหมึก", 119],
        ["squid", "ปลาหมึก", 119],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      variantItem("tam-kanomjeen", "ตำขนมจีน", "ขนมจีน คลุกน้ำปลาร้านัวๆ ", [
        ["base", "ธรรมดา", 40],
        ["pickled-crab", "ปูเปรี้ยว", 49],
        ["pork-sausage", "หมูยอ", 69],
        ["chicken-feet", "เล็บมือนาง", 79],
        ["shrimp", "กุ้งสด/สุก", 89],
        ["squid-neck", "คอหมึก", 89],
        ["squid", "ปลาหมึก", 89],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      simpleItem("bamboo-soup", "ซุปหน่อไม้", 49, "นัวปลาร้า น้ำย่านาง หอมกลิ่นข้าวคั่ว"),
      simpleItem("bamboo-curry", "แกงหน่อไม้", 69, "เมนูพิเศษ อาทิตย์ละ 1-2 ครั้ง"),
      simpleItem("tam-pa-seafood", "ตำป่าทะเลรวม", 139, "ตำเน้นผักและทะเลรวม แซ่บ เต็มอิ่ม"),
      simpleItem("tam-plara-squid-neck", "ตำปลาร้าคอหมึก", 89, "คอหมึกเด้งกรุบๆ ในตำปลาร้ารสแซ่บ"),
    ],
  },
  // ─── กลุ่ม 3: เมนูไม่ปลาร้า (ไทย) ───
  {
    id: "thai-all",
    category: "thai",
    title: "เมนูไม่ปลาร้า",
    subtitle: "แซ่บกลมกล่อม สำหรับสายไม่ทานปลาร้า",
    items: [
      thaiVariant("tam-thai", "ตำไทย", 40, [
        ["pickled-crab", "ปูเปรี้ยว", 45],
        ["salted-egg", "ไข่เค็ม", 49],
        ["pork-sausage", "หมูยอ", 59],
        ["chicken-feet", "เล็บมือนาง", 79],
        ["shrimp", "กุ้งสด/สุก", 89],
        ["squid-neck", "คอหมึก", 89],
        ["squid", "ปลาหมึก", 89],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      thaiVariant("tam-corn", "ตำข้าวโพด", 49, [
        ["pickled-crab", "ปูเปรี้ยว", 59],
        ["salted-egg", "ไข่เค็ม", 69],
        ["pork-sausage", "หมูยอ", 79],
        ["chicken-feet", "เล็บมือนาง", 89],
        ["shrimp", "กุ้งสด/สุก", 99],
        ["squid-neck", "คอหมึก", 99],
        ["squid", "ปลาหมึก", 99],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      thaiVariant("tam-thai-taeng", "ตำไทยแตง", 40, [
        ["pickled-crab", "ปูเปรี้ยว", 49],
        ["salted-egg", "ไข่เค็ม", 69],
        ["pork-sausage", "หมูยอ", 79],
        ["chicken-feet", "เล็บมือนาง", 89],
        ["shrimp", "กุ้งสด/สุก", 99],
        ["squid-neck", "คอหมึก", 99],
        ["squid", "ปลาหมึก", 99],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      thaiVariant("tam-thai-corn", "ตำไทย+ข้าวโพด", 59, [
        ["pickled-crab", "ปูเปรี้ยว", 69],
        ["salted-egg", "ไข่เค็ม", 79],
        ["pork-sausage", "หมูยอ", 89],
        ["chicken-feet", "เล็บมือนาง", 99],
        ["shrimp", "กุ้งสด/สุก", 109],
        ["squid-neck", "คอหมึก", 109],
        ["squid", "ปลาหมึก", 109],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 149],
      ]),
      thaiVariant("tam-thai-pa", "ตำไทยป่า", 59, [
        ["pickled-crab", "ปูเปรี้ยว", 69],
        ["salted-egg", "ไข่เค็ม", 79],
        ["pork-sausage", "หมูยอ", 89],
        ["chicken-feet", "เล็บมือนาง", 99],
        ["shrimp", "กุ้งสด/สุก", 109],
        ["squid-neck", "คอหมึก", 109],
        ["squid", "ปลาหมึก", 109],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 149],
      ]),
      thaiVariant("tam-thai-kanomjeen", "ตำไทยขนมจีน", 40, [
        ["pickled-crab", "ปูเปรี้ยว", 49],
        ["salted-egg", "ไข่เค็ม", 59],
        ["pork-sausage", "หมูยอ", 59],
        ["chicken-feet", "เล็บมือนาง", 79],
        ["shrimp", "กุ้งสด/สุก", 89],
        ["squid-neck", "คอหมึก", 89],
        ["squid", "ปลาหมึก", 89],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      thaiVariant("tam-thai-lao", "ตำไทยเหลา", null, [
        ["pickled-crab", "ปูเปรี้ยว", 69],
        ["salted-egg", "ไข่เค็ม", 79],
        ["pork-sausage", "หมูยอ", 89],
        ["chicken-feet", "เล็บมือนาง", 109],
        ["shrimp", "กุ้งสด/สุก", 119],
        ["squid-neck", "คอหมึก", 119],
        ["squid", "ปลาหมึก", 119],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      thaiVariant("tam-thai-sua", "ตำไทยซั่ว", 49, [
        ["pickled-crab", "ปูเปรี้ยว", 59],
        ["salted-egg", "ไข่เค็ม", 69],
        ["pork-sausage", "หมูยอ", 79],
        ["chicken-feet", "เล็บมือนาง", 89],
        ["shrimp", "กุ้งสด/สุก", 99],
        ["squid-neck", "คอหมึก", 99],
        ["squid", "ปลาหมึก", 99],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      thaiVariant("tam-thai-senlek", "ตำไทยเส้นเล็ก", 40, [
        ["pickled-crab", "ปูเปรี้ยว", 49],
        ["salted-egg", "ไข่เค็ม", 59],
        ["pork-sausage", "หมูยอ", 59],
        ["chicken-feet", "เล็บมือนาง", 79],
        ["shrimp", "กุ้งสด/สุก", 89],
        ["squid-neck", "คอหมึก", 89],
        ["squid", "ปลาหมึก", 89],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
    ],
  },
  // ─── กลุ่ม 4: เมนูยำแซ่บ ───
  {
    id: "yum-all",
    category: "yum",
    title: "เมนูยำแซ่บ",
    subtitle: "ยำสดใหม่รสจัด ถึงเส้นถึงเครื่อง",
    items: [
      yumVariant("yum-woonsen", "ยำวุ้นเส้น", [
        ["minced-pork", "หมูสับ", 59],
        ["pork-sausage", "หมูยอ", 69],
        ["chicken-feet", "เล็บมือนาง", 79],
        ["shrimp", "กุ้งสด/สุก", 89],
        ["squid-neck", "คอหมึก", 89],
        ["squid", "ปลาหมึก", 89],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      yumVariant("yum-lao", "ยำเหลา", [
        ["minced-pork", "หมูสับ", 69],
        ["pork-sausage", "หมูยอ", 69],
        ["chicken-feet", "เล็บมือนาง", 79],
        ["shrimp", "กุ้งสด/สุก", 119],
        ["squid-neck", "คอหมึก", 119],
        ["squid", "ปลาหมึก", 119],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      yumVariant("yum-glass", "ยำเส้นแก้ว", [
        ["minced-pork", "หมูสับ", 59],
        ["pork-sausage", "หมูยอ", 69],
        ["chicken-feet", "เล็บมือนาง", 79],
        ["shrimp", "กุ้งสด/สุก", 89],
        ["squid-neck", "คอหมึก", 89],
        ["squid", "ปลาหมึก", 89],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      yumVariant("yum-mama", "ยำมาม่า", [
        ["minced-pork", "หมูสับ", 59],
        ["pork-sausage", "หมูยอ", 69],
        ["chicken-feet", "เล็บมือนาง", 79],
        ["shrimp", "กุ้งสด/สุก", 89],
        ["squid-neck", "คอหมึก", 89],
        ["squid", "ปลาหมึก", 89],
        ["mixed-seafood", "ทะเลรวมสด/สุก", 139],
      ]),
      simpleItem("larb-snail", "ลาบหอย", 49, "หนุบหนับ รสแซ่บ เคี้ยวเพลิน"),
      simpleItem("larb-minced-pork", "ลาบหมูสับ", 49, "หมูสับจุกๆ แซ่บไม่เหมือนใคร"),
      simpleItem("namtok-pork", "น้ำตกหมูย่าง", 49, "หมูย่างชิ้นโตๆ ราดน้ำตก รสเข้มข้น"),
      simpleItem("yum-pickled-crab", "ยำปูเปรี้ยว", 69, "ปูเปรี้ยวสดๆ ดองเอง รสแซ่บ"),
      simpleItem("larb-pickled-crab", "ลาบปูเปรี้ยว", 69, "หอมข้าวคั่ว ปูเปรี้ยวสดๆ รสแซ่บ"),
    ],
  },
  // ─── กลุ่ม 5: ของกินคู่กัน ───
  {
    id: "pairing-all",
    category: "pairing",
    title: "กินคู่กัน",
    subtitle: "ของกินคู่ส้มตำ เพิ่มความอิ่มครบชุด",
    items: [
      simpleItem("grilled-chicken", "ไก่ย่าง", 20, "ชุด 3 ไม้ ย่างใหม่ ทุกครั้ง"),
      simpleItem("sticky-rice", "ข้าวเหนียว", 10, "ข้าวเหนียวนึ่งสด ห่อใบตอง"),
      simpleItem("grilled-pork", "หมูย่าง", 49, "หมูย่างหมักสูตรพิเศษ หอมเตา"),
      simpleItem("kanomjeen", "ขนมจีน", 10, "ขนมจีนสดเส้นนุ่ม"),
      simpleItem("pork-crackling", "แคปหมู", 10, "แคปหมูกรอบๆ เค็มหอม"),
      simpleItem("bamboo-soup", "ซุปหน่อไม้", 49, "นัวปลาร้า น้ำย่านาง หอมกลิ่นข้าวคั่ว"),
      simpleItem("bamboo-curry", "แกงหน่อไม้", 69, "แกงหน่อไม้ใส่ปลาร้า รสชาติเข้มข้น"),
    ],
  },
  // ─── กลุ่ม 6: เครื่องดื่ม ชา/กาแฟ ───
  {
    id: "drink-tea",
    category: "drink",
    title: "ชา / กาแฟ / โกโก้",
    subtitle: "เครื่องดื่มหอมกลมกล่อม",
    items: [
      drinkItem("thai-tea", "ชาเย็น", 30, 35),
      drinkItem("green-tea", "ชาเขียว", 30, 35),
      drinkItem("lemon-tea", "ชามะนาว", 30, 35),
      drinkItem("milk-tea", "ชานม", 30, 35),
      drinkItem("ovaltine", "โอวัลติน", 30, 35),
      drinkItem("taro", "เผือก", 30, 35),
      drinkItem("coffee", "กาแฟ", 35, 40),
      drinkItem("cocoa", "โกโก้", 35, 40),
    ],
  },
  // ─── กลุ่ม 7: เครื่องดื่ม โซดา ───
  {
    id: "drink-soda",
    category: "drink",
    title: "เมนูโซดา",
    subtitle: "โซดาสดชื่น หลากสี หลายรส",
    items: [
      simpleItem("red-soda", "น้ำแดงโซดา", 30),
      simpleItem("red-lime-soda", "น้ำแดงโซดามะนาว", 35),
      simpleItem("lychee-soda", "ลิ้นจี่โซดา", 30),
      simpleItem("apple-soda", "แอปเปิ้ลโซดา", 30),
      simpleItem("grape-soda", "องุ่นโซดา", 30),
      simpleItem("blue-hawaii", "บลูฮาวายโซดา", 30),
      simpleItem("strawberry-soda", "สตอเบอรี่โซดา", 30),
      simpleItem("orange-soda", "ส้มโซดา", 30),
      simpleItem("honey-lime", "น้ำผึ้งมะนาว", 35),
      simpleItem("honey-lime-soda", "น้ำผึ้งมะนาวโซดา", 40),
    ],
  },
  // ─── กลุ่ม 8: เครื่องดื่มแนะนำ ───
  {
    id: "drink-recommend",
    category: "drink",
    title: "เมนูเครื่องดื่มแนะนำ",
    subtitle: "เมนูหวานเย็นยอดนิยม",
    items: [
      simpleItem("grass-jelly-milk", "เฉาก๊วยนมสด", 35),
      simpleItem("grass-jelly-classic", "เฉาก๊วยโบราณ", 30),
      simpleItem("coconut-smoothie", "มะพร้าวปั่นนมสด", 35),
    ],
  },
];

const cart = new Map();
const recommendedIds = new Set(["somtam-plara", "tam-thai", "yum-mama", "grilled-chicken"]);
const menuSections = document.querySelector("#menuSections");
const cartItems = document.querySelector("#cartItems");
const cartEmpty = document.querySelector("#cartEmpty");
const cartTotal = document.querySelector("#cartTotal");
const cartCount = document.querySelector("#cartCount");
const orderForm = document.querySelector("#orderForm");
const formStatus = document.querySelector("#formStatus");
const filterButtons = document.querySelectorAll(".filter-button");
const categoryEyebrow = document.querySelector("#categoryEyebrow");
const menuTitle = document.querySelector("#menuTitle");
const categoryJump = document.querySelector("#categoryJump");
const cartSummaryButton = document.querySelector("#cartSummaryButton");
const cartSummaryCount = document.querySelector("#cartSummaryCount");
const cartSummaryTotal = document.querySelector("#cartSummaryTotal");
const toast = document.querySelector("#toast");
const backToTopButton = document.querySelector("#backToTop");
const contactMainButton = document.querySelector("#contactMainButton");
const contactPopup = document.querySelector("#contactPopup");
const paymentMethodSelect = document.querySelector("#paymentMethod");
const paymentDetails = document.querySelector("#paymentDetails");
const itemModal = document.querySelector("#itemModal");
const itemModalTitle = document.querySelector("#itemModalTitle");
const itemModalDescription = document.querySelector("#itemModalDescription");
const itemModalOptions = document.querySelector("#itemModalOptions");
const itemModalPrice = document.querySelector("#itemModalPrice");
const itemModalQty = document.querySelector("#itemModalQty");
const itemModalConfirm = document.querySelector("#itemModalConfirm");
let toastTimeout;
let modalActiveItemId = null;

function variantItem(id, name, description, variants, toppings = null, needsSpice = true) {
  return {
    id,
    name,
    type: "variant",
    description,
    image: menuImages[id] || placeholderImage,
    needsSpice,
    variants: variants.map(([variantId, variantName, price]) => ({ id: variantId, name: variantName, price })),
    toppings,
  };
}

function thaiVariant(id, name, basePrice, variants) {
  const options = basePrice ? [["base", "ธรรมดา", basePrice], ...variants] : variants;
  return variantItem(id, name, "เลือกวัตถุดิบที่ต้องการใส่ รสกลมกล่อมไม่ใส่ปลาร้า", options);
}

function yumVariant(id, name, variants) {
  return variantItem(id, name, "เลือกวัตถุดิบที่ต้องการ ยำสดใหม่รสจัด", variants);
}

function simpleItem(id, name, price, description = "กดเพิ่มลงตะกร้าได้ทันที") {
  return {
    id,
    name,
    type: "simple",
    price,
    description,
    image: menuImages[id] || placeholderImage,
    needsSpice: false,
  };
}

function drinkItem(id, name, coldPrice, frappePrice) {
  return variantItem(
    id,
    name,
    "เลือกแบบเย็นหรือปั่น",
    [
      ["cold", "เย็น", coldPrice],
      ["frappe", "ปั่น", frappePrice],
    ],
    null,
    false
  );
}

function money(value) {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits: 0,
  }).format(value);
}

function allItems() {
  return menuGroups.flatMap((group) => group.items);
}

function menuItemById(id) {
  return allItems().find((item) => item.id === id);
}

function getFeaturedItems() {
  return FEATURED_ITEM_IDS.map((id) => {
    const item = menuItemById(id);
    if (!item) return null;
    const displayDescription = FEATURED_DISPLAY_COPY[id];
    if (!displayDescription) return item;
    return { ...item, description: displayDescription };
  }).filter(Boolean);
}

function renderFeaturedGrid(items) {
  const rowOne = items.slice(0, 3);
  const rowTwo = items.slice(3, 7);
  return `
    <div class="menu-grid menu-grid--featured">
      <div class="menu-grid-row menu-grid-row--top">
        ${rowOne.map(renderMenuCard).join("")}
      </div>
      <div class="menu-grid-row menu-grid-row--bottom">
        ${rowTwo.map(renderMenuCard).join("")}
      </div>
    </div>`;
}

function renderMenu(category) {
  if (!category || category === "all") {
    categoryEyebrow.textContent = "เมนูแนะนำ";
    menuTitle.textContent = "ยอดนิยม";
    menuSections.innerHTML = renderFeaturedGrid(getFeaturedItems());
  } else {
    const meta = categoryMeta[category];
    if (meta) {
      categoryEyebrow.textContent = meta.label;
      menuTitle.textContent = meta.heading;
    }
    const groups = menuGroups.filter((g) => g.category === category);
    menuSections.innerHTML = groups
      .map(
        (group) => `
        <div class="menu-group">
          <div class="group-heading">
            <h3>${group.title}</h3>
            <p>${group.subtitle}</p>
          </div>
          <div class="menu-grid">${group.items.map(renderMenuCard).join("")}</div>
        </div>`
      )
      .join("");
  }
}

function renderMenuCard(item) {
  const defaultPrice = item.type === "simple" ? item.price : item.variants[0].price;
  const badge = recommendedIds.has(item.id) ? `<span class="badge">แนะนำ</span>` : "";
  const imageSrc = item.image || placeholderImage;
  return `
    <article class="menu-card menu-card--compact" data-menu-card="${item.id}">
      <div class="menu-card__media">
        <img src="${imageSrc}" alt="${item.name}" loading="lazy" data-menu-image onerror="this.onerror=null;this.src='${placeholderImage}'" />
        ${badge}
      </div>
      <div class="menu-body">
        <h4>${item.name}</h4>
        <p class="menu-card-desc">${item.description}</p>
        <p class="price menu-card-price">${money(defaultPrice)}</p>
        <button class="add-button" type="button" data-add="${item.id}">เพิ่มลงตะกร้า</button>
      </div>
    </article>
  `;
}

function selectedVariantFromModal(item, root) {
  if (item.type === "simple") return { id: "base", name: "ธรรมดา", price: item.price };
  const select = root.querySelector("[data-modal-variant]");
  const variantId = select ? select.value : item.variants[0].id;
  return item.variants.find((variant) => variant.id === variantId) || item.variants[0];
}

function selectedSpiceFromModal(item, root) {
  if (!item.needsSpice) return "-";
  const select = root.querySelector("[data-modal-spice]");
  return select ? select.value : spiceLevels[0];
}

function selectedToppingsFromModal(item, root) {
  if (!item.toppings) return [];
  const checked = [...root.querySelectorAll("[data-modal-topping]:checked")].map((input) => input.dataset.modalTopping);
  return item.toppings.filter((topping) => checked.includes(topping.id));
}

function getModalQuantity() {
  const value = Number(itemModalQty?.value);
  if (!Number.isFinite(value) || value < 1) return 1;
  return Math.min(99, Math.floor(value));
}

function setModalQuantity(next) {
  if (!itemModalQty) return;
  itemModalQty.value = String(Math.max(1, Math.min(99, next)));
}

function renderModalOptions(item) {
  const parts = [];

  if (item.type === "variant") {
    parts.push(`
      <label class="field-label">
        เลือกวัตถุดิบ/รูปแบบ
        <select data-modal-variant>
          ${item.variants
            .map((variant) => `<option value="${variant.id}">${variant.name} - ${money(variant.price)}</option>`)
            .join("")}
        </select>
      </label>
    `);
  }

  if (item.needsSpice) {
    parts.push(`
      <label class="field-label">
        ระดับความเผ็ด
        <select data-modal-spice>
          ${spiceLevels.map((level) => `<option value="${level}">${level}</option>`).join("")}
        </select>
      </label>
    `);
  }

  if (item.toppings) {
    parts.push(`
      <fieldset class="option-group">
        <legend>เพิ่มท็อปปิ้งพิเศษ</legend>
        <div class="topping-grid">
          ${item.toppings
            .map(
              (topping) => `
                <label class="check-option">
                  <input type="checkbox" data-modal-topping="${topping.id}" />
                  <span>${topping.name} +${money(topping.price)}</span>
                </label>
              `
            )
            .join("")}
        </div>
      </fieldset>
    `);
  }

  itemModalOptions.innerHTML = parts.join("");
}

function updateModalPrice() {
  const item = menuItemById(modalActiveItemId);
  if (!item || !itemModalPrice) return;
  const dialog = itemModal?.querySelector(".item-modal__dialog");
  if (!dialog) return;
  const variant = selectedVariantFromModal(item, dialog);
  const toppings = selectedToppingsFromModal(item, dialog);
  const unitPrice = variant.price + toppings.reduce((sum, topping) => sum + topping.price, 0);
  const qty = getModalQuantity();
  itemModalPrice.textContent = `${money(unitPrice)} × ${qty} = ${money(unitPrice * qty)}`;
}

function openAddModal(id) {
  const item = menuItemById(id);
  if (!item || !itemModal) return;

  modalActiveItemId = id;
  itemModalTitle.textContent = item.name;
  itemModalDescription.textContent = item.description;
  renderModalOptions(item);
  setModalQuantity(1);
  updateModalPrice();

  itemModal.hidden = false;
  itemModal.setAttribute("aria-hidden", "false");
  itemModal.classList.add("is-open");
  document.body.classList.add("modal-open");
  itemModalConfirm?.focus();
}

function closeAddModal() {
  modalActiveItemId = null;
  if (!itemModal) return;
  itemModal.classList.remove("is-open");
  itemModal.hidden = true;
  itemModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function confirmAddFromModal() {
  const item = menuItemById(modalActiveItemId);
  if (!item) return;
  const dialog = itemModal.querySelector(".item-modal__dialog");
  const variant = selectedVariantFromModal(item, dialog);
  const spice = selectedSpiceFromModal(item, dialog);
  const toppings = selectedToppingsFromModal(item, dialog);
  const quantity = getModalQuantity();

  addItemToCart(item, { variant, spice, toppings, quantity });
  closeAddModal();
  showToast(`เพิ่ม ${item.name} ลงตะกร้าแล้ว`);
}

function buildCartKey(item, variant, spice, toppings) {
  const toppingIds = toppings.map((topping) => topping.id).sort().join(".");
  return [item.id, variant.id, spice, toppingIds].join("|");
}

function addItemToCart(item, { variant, spice, toppings, quantity }) {
  const unitPrice = variant.price + toppings.reduce((sum, topping) => sum + topping.price, 0);
  const key = buildCartKey(item, variant, spice, toppings);
  const existing = cart.get(key);
  const addQty = Math.max(1, quantity || 1);

  cart.set(key, {
    key,
    id: item.id,
    name: item.name,
    variantName: variant.name,
    spice,
    toppings,
    unitPrice,
    quantity: (existing?.quantity || 0) + addQty,
  });
  renderCart();
}

function addToCart(id) {
  openAddModal(id);
}

function renderCart() {
  const entries = [...cart.values()];
  const total = entries.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const count = entries.reduce((sum, item) => sum + item.quantity, 0);

  cartEmpty.classList.toggle("is-hidden", entries.length > 0);
  cartTotal.textContent = money(total);
  if (cartCount) cartCount.textContent = count;
  if (cartSummaryCount) cartSummaryCount.textContent = count;
  if (cartSummaryTotal) cartSummaryTotal.textContent = money(total);

  try {
    const fabCountEl = document.querySelector('#cartFabCount');
    const fabBtnEl = document.querySelector('#cartFab');
    if (fabCountEl) fabCountEl.textContent = count;
    if (fabBtnEl) fabBtnEl.classList.toggle('has-items', count > 0);
  } catch (e) {}

  cartItems.innerHTML = entries
    .map(
      (item) => `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong>
            <span>${item.variantName}${item.spice !== "-" ? ` | ${item.spice}` : ""}</span>
            ${item.toppings.length ? `<small>ท็อปปิ้ง: ${item.toppings.map((topping) => topping.name).join(", ")}</small>` : ""}
            <span>${money(item.unitPrice)} x ${item.quantity}</span>
          </div>
          <div class="cart-controls">
            <button class="qty-button" type="button" data-decrease="${item.key}" aria-label="ลด ${item.name}">-</button>
            <strong>${item.quantity}</strong>
            <button class="qty-button" type="button" data-increase="${item.key}" aria-label="เพิ่ม ${item.name}">+</button>
            <button class="remove-button" type="button" data-remove="${item.key}" aria-label="ลบ ${item.name}">x</button>
          </div>
        </div>
      `
    )
    .join("");
}

function updateQuantity(key, change) {
  const existing = cart.get(key);
  if (!existing) return;
  const nextQuantity = existing.quantity + change;
  if (nextQuantity <= 0) cart.delete(key);
  else cart.set(key, { ...existing, quantity: nextQuantity });
  renderCart();
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function buildOrderPayload(formData) {
  const entries = [...cart.values()];
  const total = entries.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  return {
    orderId: `ORD-${Date.now()}`,
    createdAt: new Date().toISOString(),
    customerName: formData.get("customerName"),
    phone: formData.get("phone"),
    fulfillment: formData.get("fulfillment"),
    paymentMethod: formData.get("paymentMethod"),
    note: formData.get("note"),
    total,
    items: entries.map((item) => ({
      id: item.id,
      name: item.name,
      variantName: item.variantName,
      spice: item.spice,
      toppings: item.toppings.map((topping) => topping.name),
      unitPrice: item.unitPrice,
      quantity: item.quantity,
      subtotal: item.unitPrice * item.quantity,
    })),
  };
}

async function submitOrder(payload) {
  const response = await fetch(ORDER_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
  return { ok: response.type === "opaque" || response.ok };
}

if (cartSummaryButton) {
  cartSummaryButton.addEventListener("click", () => {
    document.querySelector("#order").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (contactMainButton && contactPopup) {
  contactMainButton.addEventListener("click", () => {
    const isOpen = contactPopup.classList.toggle("is-open");
    contactMainButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", (event) => {
    if (!contactPopup.contains(event.target) && event.target !== contactMainButton) {
      contactPopup.classList.remove("is-open");
      contactMainButton.setAttribute("aria-expanded", "false");
    }
  });
}

if (paymentMethodSelect && paymentDetails) {
  paymentMethodSelect.addEventListener("change", () => {
    const isTransfer = paymentMethodSelect.value === "โอนผ่านบัญชี/พร้อมเพย์";
    paymentDetails.classList.toggle("is-visible", isTransfer);
  });
}

menuSections.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) openAddModal(addButton.dataset.add);
});

if (itemModal) {
  itemModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-modal-close]")) closeAddModal();
  });

  itemModal.addEventListener("change", () => updateModalPrice());

  itemModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-modal-qty-inc]")) {
      setModalQuantity(getModalQuantity() + 1);
      updateModalPrice();
    }
    if (event.target.closest("[data-modal-qty-dec]")) {
      setModalQuantity(getModalQuantity() - 1);
      updateModalPrice();
    }
  });

  itemModalQty?.addEventListener("input", () => updateModalPrice());
  itemModalConfirm?.addEventListener("click", () => confirmAddFromModal());
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && itemModal?.classList.contains("is-open")) closeAddModal();
});

cartItems.addEventListener("click", (event) => {
  const increase = event.target.closest("[data-increase]");
  const decrease = event.target.closest("[data-decrease]");
  const remove = event.target.closest("[data-remove]");
  if (increase) updateQuantity(increase.dataset.increase, 1);
  if (decrease) updateQuantity(decrease.dataset.decrease, -1);
  if (remove) {
    cart.delete(remove.dataset.remove);
    renderCart();
  }
});

document.addEventListener('click', (event) => {
  const fab = event.target.closest && event.target.closest('#cartFab');
  if (fab) {
    const orderEl = document.querySelector('#order');
    if (orderEl) orderEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderMenu(button.dataset.category);
  });
});

orderForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formStatus.className = "form-status";

  if (cart.size === 0) {
    formStatus.textContent = "กรุณาเลือกเมนูก่อนส่งออเดอร์";
    formStatus.classList.add("is-error");
    return;
  }

  const payload = buildOrderPayload(new FormData(orderForm));
  formStatus.textContent = "กำลังส่งคำสั่งซื้อ...";

  try {
    await submitOrder(payload);
    const locationNote =
      payload.fulfillment === "ส่งเดลิเวอรี่"
        ? " กรณีส่งเดลิเวอรี่ รบกวนส่งตำแหน่งปัจจุบันเข้ามาในแชท LINE ของร้านได้เลยครับ"
        : "";
    formStatus.textContent = `รับออเดอร์เรียบร้อยครับ ทางร้านจะติดต่อกลับเพื่อยืนยันรายการอีกครั้งครับ${locationNote}`;
    formStatus.classList.add("is-success");
    cart.clear();
    orderForm.reset();
    renderCart();
  } catch (error) {
    formStatus.textContent = "ส่งออเดอร์ไม่สำเร็จ กรุณาลองอีกครั้ง";
    formStatus.classList.add("is-error");
  }
});

renderMenu("all");
renderCart();
window.addToCart = addToCart;
window.confirmAddFromModal = confirmAddFromModal;