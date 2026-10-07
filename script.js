
// Data Produk Toko Komputer & Aplikasi
const products = [

    // ================= 1. DATA PRODUK KOMPUTER & LAPTOP =================
    { 
        id: 1, 
        name: "PC Gaming Beast Core i7 RTX 4060", 
        category: "PC Rakitan", 
        price: "Rp 12.500.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80", 
        spec: "Core i7 13700F, RAM 16GB, SSD 512GB, RTX 4060 8GB" 
    },
    { 
        id: 2, 
        name: "Laptop ASUS ROG Strix G15", 
        category: "Laptop", 
        price: "Rp 16.200.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80", 
        spec: "Ryzen 7, RTX 3050, 16GB RAM, 512GB SSD, 144Hz" 
    },

    // ================= 2. DATA PRODUK SPAREPART & KOMPONEN =================
    { 
        id: 50, 
        name: "Processor Intel Core i5-13400F", 
        category: "Komponen", 
        price: "Rp 3.100.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&q=80", 
        spec: "10 Cores, 16 Threads, LGA1700" 
    },
    { 
        id: 51, 
        name: "VGA NVIDIA RTX 4060 8GB OC", 
        category: "Komponen", 
        price: "Rp 5.400.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=80", 
        spec: "GDDR6, DLSS 3, Dual Fan Cooling" 
    },

    // ================= 3. DATA PRODUK AKSESORIES & NETWORKING =================
    { 
        id: 100, 
        name: "Mechanical Keyboard RGB Gaming", 
        category: "Aksesoris", 
        price: "Rp 450.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80", 
        spec: "Switch Blue/Red, Hot-swappable, RGB LED" 
    },
    { 
        id: 101, 
        name: "Wireless Gaming Mouse 16000 DPI", 
        category: "Aksesoris", 
        price: "Rp 320.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80", 
        spec: "Dual Connectivity, Rechargeable Battery" 
    },
    { 
        id: 102, 
        name: "Router WiFi Gigabit Dual Band", 
        category: "Networking", 
        price: "Rp 650.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80", 
        spec: "AC1200, Gigabit Ports, High Gain Antennas" 
    },
    { 
        id: 103, 
        name: "Mini PC Office & Multimedia", 
        category: "PC Rakitan", 
        price: "Rp 3.800.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=500&q=80", 
        spec: "Intel N100, 8GB RAM, 256GB SSD, Windows 11" 
    },

    // ================= 4. DATA PRODUK APLIKASI / SOFTWARE =================
    { 
        id: 200, 
        name: "Aplikasi Toko Komputer (POS)", 
        category: "Aplikasi", 
        price: "Rp 2.000.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80", 
        spec: "Manajemen Stok, Laporan Penjualan, Cetak Struk Bluetooth/USB" 
    },
    { 
        id: 201, 
        name: "Sistem Informasi Warga", 
        category: "Aplikasi", 
        price: "Rp 8.000.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80", 
        spec: "Data Warga, Kas Warga dan Masjid, Jadwal Ronda, Kegiatan, Pengaduan Multi-User" 
    },
    { 
        id: 202, 
        name: "POS Kelontongan", 
        category: "Aplikasi", 
        price: "Rp 2.000.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1556742049-0a67d553825a?w=500&q=80", 
        spec: "Manajemen Toko Kelontongan, Laporan Keuangan, Barcode Scanner" 
    }

];

let currentCategory = 'Semua';
const waNumber = "6281314141770"; // Ganti dengan nomor WhatsApp Anda

// Render produk ke halaman
function renderProducts(filterName = '', category = 'Semua') {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    const filtered = products.filter(p => {
        const matchName = p.name.toLowerCase().includes(filterName.toLowerCase());
        const matchCat = category === 'Semua' || p.category === category;
        return matchName && matchCat;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500">Produk tidak ditemukan.</div>`;
        return;
    }

    filtered.forEach(p => {
        const message = encodeURIComponent(`Halo Merpati Note Book, saya ingin menanyakan produk ${p.name} dengan harga ${p.price}. Apakah masih tersedia?`);
        const waLink = `https://wa.me/${waNumber}?text=${message}`;

        const card = document.createElement('div');
        card.className = "bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <div class="h-48 overflow-hidden bg-slate-100">
					<img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover hover:scale-105 transition duration-300" onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80'">
				</div>
                <div class="p-5">
                    <span class="text-xs font-semibold text-blue-600 uppercase tracking-wide bg-blue-50 px-2.5 py-1 rounded-md">${p.category}</span>
                    <h3 class="font-bold text-slate-900 mt-2 text-base line-clamp-1">${p.name}</h3>
                    <p class="text-xs text-slate-500 mt-1 line-clamp-2">${p.spec}</p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-lg font-bold text-slate-900">${p.price}</span>
                        <span class="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-medium">${p.stock}</span>
                    </div>
                </div>
            </div>
            <div class="p-5 pt-0">
                <a href="${waLink}" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium py-2.5 rounded-xl flex items-center justify-center space-x-2 transition shadow-sm">
                    <i class="fa-brands fa-whatsapp text-sm"></i>
                    <span>Tanya via WhatsApp</span>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter kategori
function setKategori(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        if (btn.innerText === cat) {
            btn.className = "cat-btn bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-medium transition";
        } else {
            btn.className = "cat-btn bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-medium transition";
        }
    });
    const keyword = document.getElementById('search-input').value;
    renderProducts(keyword, currentCategory);
}

// Filter pencarian
function filterProduk() {
    const keyword = document.getElementById('search-input').value;
    renderProducts(keyword, currentCategory);
}

// Simulasi cek status service
function cekService() {
    const nota = document.getElementById('no-nota').value.trim();
    const hasil = document.getElementById('hasil-cek');
    hasil.classList.remove('hidden');

    if (!nota) {
        hasil.innerHTML = `<span class="text-red-400">Silakan masukkan nomor nota terlebih dahulu!</span>`;
        return;
    }

    // Simulasi data status service contoh
    if (nota === "SRV-2026-001") {
        hasil.innerHTML = `<strong>Status:</strong> Sedang diperiksa oleh Teknisi (Estimasi selesai: Besok)`;
    } else if (nota === "SRV-2026-002") {
        hasil.innerHTML = `<strong>Status:</strong> Selesai / Sudah dapat diambil di toko.`;
    } else {
        hasil.innerHTML = `<span class="text-amber-400">Nomor nota "${nota}" tidak ditemukan. Pastikan nomor benar atau hubungi WhatsApp kami.</span>`;
    }
}

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Load awal saat halaman dibuka
window.onload = () => {
    renderProducts();
};