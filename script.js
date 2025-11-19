const products = [
    {
        id: 1,
        name: "Xiaomi G27i 27\" 165Hz",
        price: 2899000,
        specs: "27\" IPS, 165Hz, 1ms, FHD",
        description: "Monitor gaming premium dengan panel IPS 27 inci yang memberikan warna akurat dan viewing angle luas. Refresh rate 165Hz dan response time 1ms memastikan gameplay yang smooth tanpa ghosting. Dilengkapi dengan AMD FreeSync Premium untuk pengalaman gaming yang lebih immersive.",
        category: ["27", "gaming"],
        brand: "xiaomi",
        rating: 4.8,
        image: "https://i02.appmifile.com/28_item_id/18/12/2023/e4e9c04db251062aaee2ef08b03bad8f.png",
        detailedSpecs: {
            size: "27 Inci",
            resolution: "1920 x 1080 (FHD)",
            panel: "IPS",
            refreshRate: "165Hz",
            responseTime: "1ms",
            connectivity: "HDMI 2.0, DisplayPort 1.4",
            features: "AMD FreeSync Premium",
            warranty: "3 Tahun"
        },
        features: [
            "Panel IPS dengan akurasi warna tinggi",
            "Refresh rate 165Hz untuk gaming smooth",
            "Response time 1ms mengurangi ghosting",
            "AMD FreeSync Premium anti-tearing",
            "Viewing angle 178° horizontal & vertikal",
            "Brightness 350 cd/m²",
            "Contrast ratio 1000:1",
            "Flicker-free & Low Blue Light"
        ]
    },
    {
        id: 2,
        name: "LG 24MP60G 24\" IPS",
        price: 1899000,
        specs: "24\" IPS, 75Hz, 5ms, FHD",
        description: "Monitor profesional 24 inci dengan teknologi IPS yang menghadirkan reproduksi warna 99% sRGB. Cocok untuk desain grafis, editing foto, dan pekerjaan kantor. Desain borderless yang elegan dengan stand yang dapat disesuaikan ketinggiannya.",
        category: ["24", "professional"],
        brand: "lg",
        rating: 4.6,
        image: "https://www.lg.com/content/dam/channel/wcms/id/images/monitor/24mp60g-b_ati_eain_id_c/gallery/Z1.jpg?w=800",
        detailedSpecs: {
            size: "24 Inci",
            resolution: "1920 x 1080 (FHD)",
            panel: "IPS",
            refreshRate: "75Hz",
            responseTime: "5ms",
            connectivity: "HDMI, VGA, Audio Out",
            features: "99% sRGB Color Gamut",
            warranty: "3 Tahun"
        },
        features: [
            "99% sRGB color gamut untuk akurasi warna",
            "Panel IPS dengan viewing angle luas",
            "Desain borderless yang elegan",
            "Stand adjustable height & tilt",
            "Reader Mode untuk kenyamanan mata",
            "Flicker Safe teknologi anti-flicker",
            "OnScreen Control software",
            "VESA mount compatible 100x100mm"
        ]
    },
    {
        id: 3,
        name: "Samsung Odyssey G5 32\"",
        price: 4299000,
        specs: "32\" VA, 144Hz, 1ms, QHD",
        description: "Monitor gaming curved 32 inci dengan resolusi QHD (2560x1440) yang memberikan detail gambar yang tajam. Panel VA dengan kontras tinggi 2500:1 menghadirkan warna hitam yang dalam. Refresh rate 144Hz dan G-Sync Compatible untuk pengalaman gaming yang superior.",
        category: ["32", "gaming"],
        brand: "samsung",
        rating: 4.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFPdFExHm2IJ1hDxG9CZ039UHMNNC7Ew8KA&s",
        detailedSpecs: {
            size: "32 Inci Curved",
            resolution: "2560 x 1440 (QHD)",
            panel: "VA",
            refreshRate: "144Hz",
            responseTime: "1ms (MPRT)",
            connectivity: "HDMI 2.0, DisplayPort 1.2",
            features: "G-Sync Compatible, HDR10",
            warranty: "3 Tahun"
        },
        features: [
            "Curved 1000R untuk immersive gaming",
            "QHD resolution untuk detail tajam",
            "Panel VA dengan contrast ratio 2500:1",
            "144Hz refresh rate & 1ms response time",
            "G-Sync Compatible & FreeSync Premium",
            "HDR10 support untuk visual realistis",
            "Eye Saver Mode & Flicker Free",
            "Game Mode dengan berbagai preset"
        ]
    },
    {
        id: 4,
        name: "Acer Nitro XV272U",
        price: 3599000,
        specs: "27\" IPS, 170Hz, 1ms, QHD",
        description: "Monitor gaming 27 inci dengan resolusi QHD dan refresh rate hingga 170Hz. Panel IPS memberikan akurasi warna yang excellent dengan coverage 95% DCI-P3. Dilengkapi dengan HDR400 dan teknologi VRB (Visual Response Boost) untuk pengalaman visual yang memukau.",
        category: ["27", "gaming"],
        brand: "acer",
        rating: 4.7,
        image: "https://m.media-amazon.com/images/I/71XNJ9z6miL.jpg",
        detailedSpecs: {
            size: "27 Inci",
            resolution: "2560 x 1440 (QHD)",
            panel: "IPS",
            refreshRate: "170Hz",
            responseTime: "1ms (VRB)",
            connectivity: "HDMI 2.0, DisplayPort 1.4, USB Hub",
            features: "HDR400, 95% DCI-P3",
            warranty: "3 Tahun"
        },
        features: [
            "170Hz refresh rate untuk ultra-smooth gaming",
            "QHD resolution dengan detail superior",
            "95% DCI-P3 color gamut coverage",
            "HDR400 untuk kontras yang lebih baik",
            "VRB (Visual Response Boost) technology",
            "AMD FreeSync Premium Pro",
            "USB 3.0 hub dengan 4 port",
            "Ergonomic stand dengan full adjustment"
        ]
    },
    {
        id: 5,
        name: "Dell S2421H 24\"",
        price: 2199000,
        specs: "24\" IPS, 75Hz, 4ms, FHD",
        description: "Monitor all-in-one 24 inci yang sempurna untuk produktivitas sehari-hari. Panel IPS dengan teknologi ComfortView mengurangi blue light emission untuk kenyamanan mata. Desain ultra-thin bezel dengan cable management yang rapi, ideal untuk setup dual monitor.",
        category: ["24", "professional"],
        brand: "dell",
        rating: 4.5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2wTh6ipDwAcJ9S2zbd-9_N22C21Y-syRjQ&s",
        detailedSpecs: {
            size: "24 Inci",
            resolution: "1920 x 1080 (FHD)",
            panel: "IPS",
            refreshRate: "75Hz",
            responseTime: "4ms",
            connectivity: "HDMI, Audio Line-out",
            features: "ComfortView, 99% sRGB",
            warranty: "3 Tahun"
        },
        features: [
            "ComfortView untuk mengurangi blue light",
            "99% sRGB color accuracy",
            "Ultra-thin bezel design",
            "Cable management yang rapi",
            "Tilt adjustment -5° hingga +21°",
            "VESA mount ready 100x100mm",
            "Dell Display Manager software",
            "ENERGY STAR certified"
        ]
    },
    {
        id: 6,
        name: "ASUS TUF Gaming VG27AQ",
        price: 3799000,
        specs: "27\" IPS, 165Hz, 1ms, QHD",
        description: "Monitor gaming ASUS TUF dengan sertifikasi ELMB SYNC yang menggabungkan Adaptive-Sync dengan backlight strobing untuk menghilangkan ghosting dan tearing. Panel IPS 27 inci dengan resolusi QHD memberikan visual yang tajam dan warna yang akurat.",
        category: ["27", "gaming"],
        brand: "asus",
        rating: 4.8,
        image: "https://www.asus.com/media/global/products/x2ahzOXdioDZggLv/P_setting_xxx_0_90_end_692.png",
        detailedSpecs: {
            size: "27 Inci",
            resolution: "2560 x 1440 (QHD)",
            panel: "IPS",
            refreshRate: "165Hz",
            responseTime: "1ms (MPRT)",
            connectivity: "HDMI 2.0, DisplayPort 1.2",
            features: "ELMB SYNC, HDR10",
            warranty: "3 Tahun"
        },
        features: [
            "ELMB SYNC menghilangkan ghosting & tearing",
            "165Hz refresh rate dengan 1ms response time",
            "QHD resolution untuk detail gaming superior",
            "HDR10 support untuk visual realistis",
            "Shadow Boost untuk visibilitas area gelap",
            "GamePlus hotkey untuk fitur gaming",
            "Flicker-Free & Low Blue Light",
            "Ergonomic stand dengan pivot function"
        ]
    },
    {
        id: 7,
        name: "MSI MPG 274URDFW E16M",
        price: 7899000,
        specs: "27\" Mini LED, 160Hz, 1ms, QHD",
        description: "Monitor Gaming MSI MPG 274URDFW E16M hadir dengan teknologi Mini-LED, Dual Mode yang mendukung UHD 160Hz dan FHD 320Hz, port Type-C dengan daya 98W, serta AI Navigator yang meningkatkan pengalaman bermain game. Layar Rapid IPS 27 inci dengan teknologi Quantum Dot ini menawarkan waktu respons super cepat 0,5ms (GtG, minimum) dan telah tersertifikasi VESA DisplayHDR 1000 untuk performa visual yang luar biasa.",
        category: ["27", "gaming"],
        brand: "msi",
        rating: 4.9,
        image: "https://asset.msi.com/resize/image/global/product/product_174590393635e1022dd8095e48c2385f3de19e4459.png62405b38c58fe0f07fcef2367d8a9ba1/400",
        detailedSpecs: {
            size: "27 Inci",
            resolution: "3840 2160 (UHD)",
            panel: "Mini LED",
            refreshRate: "160Hz",
            responseTime: "1ms (MPRT)",
            connectivity: "HDMI 2.0, DisplayPort 1.2",
            features: "G-Sync Compatible, HDR10",
            warranty: "3 Tahun"
        },
        features: [
            "Mini-LED 1.152 zona",
            "Rapid IPS + Quantum Dot",
            "AI Navigator & Gaming Intelligence",
            "Console Mode",
            "Windows Dynamic Lighting",
        ]
    },
    {
        id: 8,
        name: "MSI Modern MD2412P",
        price: 1999000,
        specs: "24\" IPS, 100Hz, FHD",
        description: "Dengan desain eksterior yang elegan, indah, dan rapi, Modern MD2412 Series didesain dengan bentuk minimalis yang terlihat cocok di ruang dan meja manapun. Menjadi bagian dari furnitur & dekorasi yang elegan dimanapun dibandingkan monitor pada umumnya.",
        category: ["24", "professional"],
        brand: "msi",
        rating: 4.9,
        image: "https://asset.msi.com/resize/image/global/product/product_16904210277a228ca3f3904fb80233c3e569fa7a2a.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
        detailedSpecs: {
            size: "24 Inci",
            resolution: "1920 1080 (FHD)",
            panel: "IPS",
            refreshRate: "100Hz",
            responseTime: "1ms (MPRT)",
            connectivity: "HDMI 2.0, DisplayPort 1.2",
            features: "Type C display port, HDR",
            warranty: "3 Tahun"
        },
        features: [
            "Panel IPS 24 Inci dengan Sudut Pandang Luas 178° didesain untuk kualitas gambar yang premium.",
            "Red Dot Design Award 2021 Winner – Cocokkan dekorasi rumah atau kantor Anda dengan desain yang elegan & trendi.",
            "Display tersertifikasi TÜV memastikan keamanan dan kesehatan penglihatan mata.",
            "Koneksi Built-in USB Type-C dengan fungsi pengiriman daya dapat membuat Anda terhubung dan charge perangkat Anda dengan mudah.",
            "Refresh rate 100 Hz memberikan pengalaman melihat yang lebih baik.",
            "Dua built-in speakers.",
        ]
    },
        {
        id: 9,
        name: "LG 27U411A-B",
        price: 1799000,
        specs: "27\" IPS, 120Hz, FHD",
        description: "Desain ramping. Warna yang sesungguhnya. Layar Full HD (1920x1080) kami menghadirkan visual yang jernih dengan gamut warna sRGB 99% (Typ.) dan kecerahan 250 nits (Typ.) dengan rasio kontras 1500:1.",
        category: ["27", "professional"],
        brand: "lg",
        rating: 4.9,
        image: "https://www.lg.com/content/dam/channel/wcms/id/monitor/fhd-qhd/27u411a/gallery/gallery/full-hd-qhd-27u411a-2025-gallery-gallery-01.jpg/jcr:content/renditions/thum-1600x1062.jpeg",
        detailedSpecs: {
            size: "27 Inci",
            resolution: "1920 1080 (FHD)",
            panel: "IPS",
            refreshRate: "120Hz",
            responseTime: "1ms (MPRT)",
            connectivity: "HDMI 2.0, DisplayPort 1.2",
            features: "HDR 10, sRGB 99%",
            warranty: "3 Tahun"
        },
        features: [
            "Full HD",
            "120Hz refresh rate, 1ms Motion Blur Reduction",
            "4-side virtually borderless design",
            "HDR 10 / sRGB 99% (Typ.)",
            "Ergonomic design with -5° to 20° tilt",
            "Dynamic Action Sync / Black Stabilizer.",
        ]
    },
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Default config
const defaultConfig = {
    store_name: "Bottleneck Store",
    hero_title: "Monitor PC Terbaik",
    hero_subtitle: "Kualitas Premium, Harga Terjangkau - Temukan Monitor Impian Anda",
    contact_phone: "+62 812-3456-7890",
    contact_email: "info@bottleneckstore.com"
};

// Initialize page
function init() {
    updateCartCount();
    loadFeaturedProducts();
    loadAllProducts();
    setupEventListeners();
    updateCartDisplay();
}

// Utility: debounce helper to limit how often a function runs
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.dataset.section;
            showSection(section);
            
            // Update active nav
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Search functionality (debounced) - auto-switch to Produk saat mengetik
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const debounced = debounce((e) => {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.trim()) showProducts();
            filterProducts(searchTerm);
        }, 250);

        searchInput.addEventListener('input', debounced);
    }

    // Filter dropdowns
    const sizeFilterEl = document.getElementById('sizeFilter');
    const categoryFilterEl = document.getElementById('categoryFilter');
    const brandFilterEl = document.getElementById('brandFilter');
    const priceFilterEl = document.getElementById('priceFilter');
    
    if (sizeFilterEl) sizeFilterEl.addEventListener('change', applyFilters);
    if (categoryFilterEl) categoryFilterEl.addEventListener('change', applyFilters);
    if (brandFilterEl) brandFilterEl.addEventListener('change', applyFilters);
    if (priceFilterEl) priceFilterEl.addEventListener('change', applyFilters);

    // Modal close events
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeProductModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductModal();
        }
    });
}

// Show section
function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionName + 'Section').classList.remove('hidden');

    // Update desktop nav active state
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const desktopLink = document.querySelector('[data-section="' + (sectionName === 'home' ? 'home' : sectionName) + '"]');
    if (desktopLink) desktopLink.classList.add('active');

    // Update mobile nav active state (if mobile nav exists)
    const mobileBtns = document.querySelectorAll('.mobile-nav-btn');
    if (mobileBtns.length) {
        mobileBtns.forEach(b => b.classList.remove('active'));
        let targetLabel = 'Home';
        if (sectionName === 'products') targetLabel = 'Produk';
        if (sectionName === 'cart') targetLabel = 'Keranjang';
        const mobileBtn = document.querySelector('.mobile-nav-btn[aria-label="' + targetLabel + '"]');
        if (mobileBtn) mobileBtn.classList.add('active');
    }
}

// Show products
function showProducts() {
    showSection('products');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('[data-section="products"]').classList.add('active');
}

// Show cart
function showCart() {
    showSection('cart');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector('[data-section="cart"]').classList.add('active');
}

// Load featured products
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    const featuredProducts = products.slice(0, 3);
    
    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

// Load all products
function loadAllProducts() {
    const container = document.getElementById('allProducts');
    container.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Create product card with image
function createProductCard(product) {
    const stars = '⭐'.repeat(Math.floor(product.rating));
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(product.price);

    return `
        <div class="product-card" data-id="${product.id}" onclick="showProductDetail(${product.id})" style="cursor: pointer;">
            <div class="product-image">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     onerror="this.src=''; this.style.display='none'; this.parentElement.innerHTML='🖥️';"
                     style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-specs">${product.specs}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-rating">
                    <span class="stars">${stars}</span>
                    <span>(${product.rating})</span>
                </div>
                <div class="product-price">${formattedPrice}</div>
                <button class="buy-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                    Tambah ke Keranjang
                </button>
            </div>
        </div>
    `;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
    
    // Show success message
    showNotification('Produk berhasil ditambahkan ke keranjang!');
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const desktopCountEl = document.getElementById('cartCount');
    const mobileCountEl = document.getElementById('mobileCartCount');
    if (desktopCountEl) desktopCountEl.textContent = count;
    if (mobileCountEl) mobileCountEl.textContent = count;
}

// Update cart display
function updateCartDisplay() {
    const container = document.getElementById('cartItems');
    const totalElement = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #CCCCCC;">Keranjang kosong</p>';
        totalElement.textContent = 'Total: Rp 0';
        return;
    }
    
    container.innerHTML = cart.map(item => {
        const formattedPrice = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(item.price);
        
        const totalPrice = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(item.price * item.quantity);
        
        return `
            <div class="cart-item">
                <div class="cart-thumb">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src=''; this.style.display='none'; this.parentElement.innerHTML='🖥️';">
                </div>
                <div class="cart-info">
                    <h4>${item.name}</h4>
                    <p>${formattedPrice} x ${item.quantity} = ${totalPrice}</p>
                </div>
                <div class="cart-actions">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Hapus</button>
                </div>
            </div>
        `;
    }).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const formattedTotal = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(total);
    
    totalElement.textContent = `Total: ${formattedTotal}`;
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            updateCartDisplay();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

// Enhanced search functionality
function filterProducts(searchTerm) {
    if (!searchTerm.trim()) {
        applyFilters();
        return;
    }

    const sizeFilter = document.getElementById('sizeFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const brandFilter = document.getElementById('brandFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;

    let filteredProducts = products.filter(product => {
        const searchableText = [
            product.name,
            product.specs,
            product.description,
            product.brand,
            product.category.join(' '),
            product.price.toString(),
            product.category.includes('gaming') ? 'gaming game' : '',
            product.category.includes('professional') ? 'professional kerja kantor office' : '',
            product.specs.includes('IPS') ? 'ips' : '',
            product.specs.includes('VA') ? 'va' : '',
            product.specs.includes('144Hz') ? '144hz high refresh' : '',
            product.specs.includes('165Hz') ? '165hz high refresh' : '',
            product.specs.includes('170Hz') ? '170hz high refresh' : '',
            product.specs.includes('1ms') ? 'fast response time' : '',
            product.specs.includes('QHD') ? 'qhd 2k 1440p' : '',
            product.specs.includes('FHD') ? 'fhd 1080p fullhd' : '',
            product.price < 2000000 ? 'murah budget' : '',
            product.price >= 2000000 && product.price < 3000000 ? 'menengah' : '',
            product.price >= 3000000 ? 'premium mahal' : ''
        ].join(' ').toLowerCase();

        const searchWords = searchTerm.toLowerCase().split(' ').filter(word => word.length > 0);
        const matchesSearch = searchWords.every(word => searchableText.includes(word));

        if (!matchesSearch) return false;

        if (sizeFilter !== 'all' && !product.category.includes(sizeFilter)) {
            return false;
        }
        
        if (categoryFilter !== 'all' && !product.category.includes(categoryFilter)) {
            return false;
        }
        
        if (brandFilter !== 'all' && product.brand !== brandFilter) {
            return false;
        }
        
        if (priceFilter !== 'all') {
            const price = product.price;
            switch (priceFilter) {
                case 'under2':
                    if (price >= 2000000) return false;
                    break;
                case '2to3':
                    if (price < 2000000 || price >= 3000000) return false;
                    break;
                case '3to4':
                    if (price < 3000000 || price >= 4000000) return false;
                    break;
                case 'over4':
                    if (price < 4000000) return false;
                    break;
            }
        }

        return true;
    });

    const container = document.getElementById('allProducts');
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; color: #CCCCCC; grid-column: 1/-1; padding: 2rem;">
                <h3 style="color: #C3073F; margin-bottom: 1rem;">🔍 Tidak ditemukan</h3>
                <p>Tidak ada monitor yang sesuai dengan pencarian "<strong>${searchTerm}</strong>"</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;">Coba kata kunci lain seperti: "gaming", "24 inch", "xiaomi", "murah", "144hz"</p>
            </div>
        `;
    } else {
        container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
        
        if (filteredProducts.length < products.length) {
            const resultInfo = document.createElement('div');
            resultInfo.style.cssText = `
                text-align: center; 
                color: #C3073F; 
                grid-column: 1/-1; 
                padding: 1rem; 
                background: rgba(195, 7, 63, 0.1); 
                border-radius: 10px; 
                margin-bottom: 1rem;
                font-weight: bold;
            `;
            resultInfo.innerHTML = `🔍 Ditemukan ${filteredProducts.length} monitor untuk pencarian "${searchTerm}"`;
            container.insertBefore(resultInfo, container.firstChild);
        }
    }
}

// Apply all filters
function applyFilters() {
    const sizeFilter = document.getElementById('sizeFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const brandFilter = document.getElementById('brandFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    
    let filteredProducts = products.filter(product => {
        if (sizeFilter !== 'all' && !product.category.includes(sizeFilter)) {
            return false;
        }
        
        if (categoryFilter !== 'all' && !product.category.includes(categoryFilter)) {
            return false;
        }
        
        if (brandFilter !== 'all' && product.brand !== brandFilter) {
            return false;
        }
        
        if (priceFilter !== 'all') {
            const price = product.price;
            switch (priceFilter) {
                case 'under2':
                    if (price >= 2000000) return false;
                    break;
                case '2to3':
                    if (price < 2000000 || price >= 3000000) return false;
                    break;
                case '3to4':
                    if (price < 3000000 || price >= 4000000) return false;
                    break;
                case 'over4':
                    if (price < 4000000) return false;
                    break;
            }
        }
        
        return true;
    });
    
    const container = document.getElementById('allProducts');
    if (filteredProducts.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: #CCCCCC; grid-column: 1/-1; padding: 2rem;">Tidak ada produk yang sesuai dengan filter yang dipilih.</div>';
    } else {
        container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
}

// Reset all filters
function resetFilters() {
    const sizeEl = document.getElementById('sizeFilter');
    const categoryEl = document.getElementById('categoryFilter');
    const brandEl = document.getElementById('brandFilter');
    const priceEl = document.getElementById('priceFilter');
    const searchEl = document.getElementById('searchInput');
    if (sizeEl) sizeEl.value = 'all';
    if (categoryEl) categoryEl.value = 'all';
    if (brandEl) brandEl.value = 'all';
    if (priceEl) priceEl.value = 'all';
    if (searchEl) searchEl.value = '';
    applyFilters();
    showNotification('Filter berhasil direset!');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Keranjang kosong!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const formattedTotal = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(total);
    
    showNotification(`Terima kasih! Pesanan Anda sebesar ${formattedTotal} sedang diproses.`);
    
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

// Show product detail modal with image
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    const stars = '⭐'.repeat(Math.floor(product.rating));
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(product.price);

    modalBody.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-image">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     onerror="this.src=''; this.style.display='none'; this.parentElement.innerHTML='🖥️';"
                     style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <div class="product-detail-rating">
                    <span class="rating-stars">${stars}</span>
                    <span class="rating-text">(${product.rating}/5.0)</span>
                </div>
                <div class="product-detail-price">${formattedPrice}</div>
                <div class="product-detail-specs">
                    <h4>📋 Spesifikasi Teknis</h4>
                    <div class="specs-list">
                        <div class="spec-item"><span class="spec-label">Ukuran:</span> ${product.detailedSpecs.size}</div>
                        <div class="spec-item"><span class="spec-label">Resolusi:</span> ${product.detailedSpecs.resolution}</div>
                        <div class="spec-item"><span class="spec-label">Panel:</span> ${product.detailedSpecs.panel}</div>
                        <div class="spec-item"><span class="spec-label">Refresh Rate:</span> ${product.detailedSpecs.refreshRate}</div>
                        <div class="spec-item"><span class="spec-label">Response Time:</span> ${product.detailedSpecs.responseTime}</div>
                        <div class="spec-item"><span class="spec-label">Konektivitas:</span> ${product.detailedSpecs.connectivity}</div>
                        <div class="spec-item"><span class="spec-label">Fitur Khusus:</span> ${product.detailedSpecs.features}</div>
                        <div class="spec-item"><span class="spec-label">Garansi:</span> ${product.detailedSpecs.warranty}</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="product-detail-description">
            <h4>📝 Deskripsi Produk</h4>
            <p>${product.description}</p>
        </div>
        
        <div class="product-detail-features">
            <h4>✨ Fitur Unggulan</h4>
            <ul class="features-list">
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-actions">
            <button class="modal-buy-btn" onclick="addToCart(${product.id}); closeProductModal();">
                🛒 Tambah ke Keranjang
            </button>
            <button class="modal-close-btn" onclick="closeProductModal()">
                Tutup
            </button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close product detail modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Element SDK integration
async function onConfigChange(config) {
    document.getElementById('storeName').textContent = config.store_name || defaultConfig.store_name;
    document.getElementById('heroTitle').textContent = config.hero_title || defaultConfig.hero_title;
    document.getElementById('heroSubtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
    document.getElementById('contactPhone').textContent = `📞 ${config.contact_phone || defaultConfig.contact_phone}`;
    document.getElementById('contactEmail').textContent = `✉️ ${config.contact_email || defaultConfig.contact_email}`;
}

// Initialize Element SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: () => ({
            recolorables: [],
            borderables: [],
            fontEditable: undefined,
            fontSizeable: undefined
        }),
        mapToEditPanelValues: (config) => new Map([
            ["store_name", config.store_name || defaultConfig.store_name],
            ["hero_title", config.hero_title || defaultConfig.hero_title],
            ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
            ["contact_phone", config.contact_phone || defaultConfig.contact_phone],
            ["contact_email", config.contact_email || defaultConfig.contact_email]
        ])
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);
