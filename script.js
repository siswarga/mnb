
// Data Produk Toko Komputer & Aplikasi
const products = [

    // ================= 1. DATA PRODUK KOMPUTER & LAPTOP =================
    { 
        id: 1, 
        name: "PC Entry-Level", 
        category: "Laptop & Computer", 
        price: "Rp. 1.500.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80", 
        spec: "Core i3 Gen 2, RAM 4GB, HDD 500 GB, Keyboard + Mouse Std" 
    },
    { 
        id: 2, 
        name: "Laptop ASUS ROG Strix G15", 
        category: "Laptop & Computer", 
        price: "Rp. 16.200.000", 
        stock: "Stok Habis", 
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80", 
        spec: "Ryzen 7, RTX 3050, 16GB RAM, 512GB SSD, 144Hz" 
    },

    // ====================== 2. DATA PRODUK SPAREPART  =======================
    { 
        id: 50, 
        name: "Keyboard Laptop", 
        category: "Sparepart", 
        price: "Rp. 200.000 - 450.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=80", 
        spec: "Semua Type Keyboard Laptop" 
    },
    { 
        id: 51, 
        name: "Battery Laptop", 
        category: "Sparepart", 
        price: "Rp. 350.000 - 800.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1721333089351-353c85f2b34a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=80", 
        spec: "Semua Battery Laptop" 
    },
    { 
        id: 52, 
        name: "Charger Laptop", 
        category: "Sparepart", 
        price: "Rp. 200.000 - 450.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1756043827116-5764e6d23d85?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=80", 
        spec: "Semua Charger Laptop" 
    },
    { 
        id: 53, 
        name: "Screen Laptop", 
        category: "Sparepart", 
        price: "Rp. 800.000 -1.050.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=80", 
        spec: "Semua LCD,LED,OLED,IPS Laptop" 
    },

    // ==================== 3. DATA PRODUK AKSESORIES ====================
    { 
        id: 100, 
        name: "Mechanical Keyboard RGB Gaming", 
        category: "Aksesoris", 
        price: "Rp. 450.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80", 
        spec: "Switch Blue/Red, Hot-swappable, RGB LED" 
    },
    { 
        id: 101, 
        name: "Wireless Gaming Mouse 16000 DPI", 
        category: "Aksesoris", 
        price: "Rp. 320.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80", 
        spec: "Dual Connectivity, Rechargeable Battery" 
    },
    
    // ====================== 4. DATA PRODUK NETWORKING  =======================
    { 
        id: 102, 
        name: "WIFI ROUTER AC1200 AC6", 
        category: "Networking", 
        price: "Rp. 400.000", 
        stock: "Tersedia", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3IGH8-SLaduVlXUzuFI3Hf6HpoeZVA0HP4tfJOR6Ow&s=10?w=500&q=80", 
        spec: "AC1200, Gigabit Ports, High Gain Antennas" 
    },
    {
        id: 103, 
        name: "WIFI ROUTER TPLink TLWR840", 
        category: "Networking", 
        price: "Rp. 200.000", 
        stock: "Tersedia", 
        image: "https://myhartono.com/images/detailed/339/TL-WR840N_pathpic_Wireless_N_Router_TP-Link_300Mbps_WR840N.jpg?w=500&q=80", 
        spec: "AC1200, Gigabit Ports, High Gain Antennas" 
    },
    {
        id: 104, 
        name: "Kabel Lan Cat 5e", 
        category: "Networking", 
        price: "Rp. 2.000 / Meter", 
        stock: "Tersedia", 
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-83742404/no-brand_kabel-lan-5m-cat-5e-kabel-utp-5-meter-pabrikan_full01.jpg?w=500&q=80", 
        spec: "Kebel Lan / UTP Cat 5 Meteran " 
    },
    {
        id: 105, 
        name: "Kabel Lan Cat 6e", 
        category: "Networking", 
        price: "Rp. 5.000 / Meter", 
        stock: "Tersedia", 
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-83742404/no-brand_kabel-lan-5m-cat-5e-kabel-utp-5-meter-pabrikan_full02.jpg?w=500&q=80", 
        spec: "Kebel Lan / UTP Cat 6 Meteran " 
    },
    
    // ================= 5. DATA PRODUK APLIKASI / SOFTWARE (DENGAN DEMO & DESKRIPSI) =================
    { 
        id: 200, 
        name: "Aplikasi Toko Komputer (POS)", 
        category: "Aplikasi", 
        price: "Rp. 2.000.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80", 
        spec: "Manajemen Stok, Laporan Penjualan, Cetak Struk Bluetooth/USB",
        description: "Software kasir dirancang khusus untuk toko komputer. Membantu mengontrol stok sparepart, melacak garansi komponen, dan rekap laba rugi harian.",
        demoUrl: "https://siswarga.github.io/computer" 
    },
    { 
        id: 201, 
        name: "Sistem Informasi Warga", 
        category: "Aplikasi", 
        price: "Rp. 8.000.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80", 
        spec: "Data Warga, Kas Warga dan Masjid, Jadwal Ronda, Kegiatan, Pengaduan Multi-User",
        description: "Platform digital lengkap untuk pengelolaan administrasi RT/RW atau komplek perumahan secara transparan dan terintegrasi.",
        demoUrl: "https://siswarga.github.io/demo" 
    },
    { 
        id: 202, 
        name: "POS Kelontongan", 
        category: "Aplikasi", 
        price: "Rp. 2.000.000", 
        stock: "Tersedia", 
        image: "https://nutapos.com/wp-content/uploads/2024/11/image-99.jpeg?w=500&q=80", 
        spec: "Manajemen Toko Kelontongan, Laporan Keuangan, Barcode Scanner",
        description: "Aplikasi kasir praktis untuk toko kelontongan/sembako dengan fitur scanner barcode dan manajemen barang ribuan item.",
        demoUrl: "https://siswarga.github.io/kelontongan" 
    },
    { 
        id: 203, 
        name: "POS Petshop", 
        category: "Aplikasi", 
        price: "Rp. 1.000.000", 
        stock: "Tersedia", 
        image: "https://petshopindonesia.com/wp-content/uploads/2025/05/GAMBAR-HEWAN-1RZ-1.webp?w=500&q=80", 
        spec: "Manajemen Toko Petshop, Laporan Keuangan, Barcode Scanner",
        description: "Solusi kasir dan manajemen layanan grooming serta penjualan produk kebutuhan hewan peliharaan.",
        demoUrl: "https://siswarga.github.io/petshop" 
    },
    
     // ==================== 6. DATA PRODUK DVR & CCTV ====================
    { 
        id: 250, 
        name: "Paket CCTV Analog Dahua", 
        category: "CCTV", 
        price: "Rp. 4.500.000", 
        stock: "Tersedia", 
        image: "https://images.unsplash.com/photo-1618482914248-29272d021005?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=80", 
        spec: "Paket CCTV Analog 4 Cam" 
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

        // Cek apakah produk memiliki link demo atau deskripsi tambahan
        let demoButtonHTML = '';
        let descHTML = `<p class="text-xs text-slate-500 mt-1 line-clamp-2">${p.spec}</p>`;

        if (p.category === 'Aplikasi') {
            if (p.description) {
                descHTML = `<p class="text-xs text-slate-600 mt-1 line-clamp-3">${p.description}</p>`;
            }
            if (p.demoUrl) {
                demoButtonHTML = `
                    <a href="${p.demoUrl}" target="_blank" class="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 rounded-xl flex items-center justify-center space-x-2 transition shadow-sm mb-2">
                        <i class="fa-solid fa-desktop text-sm"></i>
                        <span>Lihat Demo Aplikasi</span>
                    </a>
                `;
            }
        }

        const card = document.createElement('div');
        card.className = "bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <div class="h-48 overflow-hidden bg-slate-100">
                    <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover hover:scale-105 transition duration-300" onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80'">
                </div>
                <div class="p-5">
                    <span class="text-xs font-semibold text-blue-600 uppercase tracking-wide bg-blue-50 px-2.5 py-1 rounded-md">${p.category}</span>
                    <h3 class="font-bold text-slate-900 mt-2 text-base line-clamp-2">${p.name}</h3>
                    ${descHTML}
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-lg font-bold text-slate-900">${p.price}</span>
                        <span class="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-medium">${p.stock}</span>
                    </div>
                </div>
            </div>
            <div class="p-5 pt-0 flex flex-col">
                ${demoButtonHTML}
                <a href="${waLink}" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium py-2.5 rounded-xl flex items-center justify-center space-x-2 transition shadow-sm">
                    <i class="fa-brands fa-whatsapp text-sm"></i>
                    <span>Tanya via WhatsApp</span>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Cek status service interaktif
function cekService() {
    const nota = document.getElementById('no-nota').value.trim();
    const hasil = document.getElementById('hasil-cek');
    hasil.classList.remove('hidden');

    if (!nota) {
        hasil.innerHTML = `<span class="text-red-400">Silakan masukkan nomor nota terlebih dahulu!</span>`;
        return;
    }

    hasil.innerHTML = `<span class="text-blue-300"><i class="fa-solid fa-spinner fa-spin mr-1"></i> Memeriksa data servis...</span>`;

    // Cek apakah berjalan di lingkungan Google Apps Script Web App atau Statis Lokal
    if (typeof google !== 'undefined' && google.script && google.script.run) {
        google.script.run
            .withSuccessHandler(res => {
                if (res.success) {
                    const biayaStr = res.estimasiBiaya > 0 ? ` (Biaya: Rp ${res.estimasiBiaya.toLocaleString('id-ID')})` : "";
                    hasil.innerHTML = `<strong>Unit:</strong> ${res.unit}<br><strong>Status:</strong> <span class="text-emerald-400 font-bold">${res.status}</span>${biayaStr}`;
                } else {
                    hasil.innerHTML = `<span class="text-amber-400">${res.message}</span>`;
                }
            })
            .withFailureHandler(() => {
                hasil.innerHTML = `<span class="text-red-400">Gagal terhubung ke server database.</span>`;
            })
            .checkPublicServiceStatus(nota);
    } else {
        // Mode Simulasi Lokal (jika dibuka via file HTML biasa)
        if (nota.toUpperCase() === "SRV-2026-001") {
            hasil.innerHTML = `<strong>Status:</strong> Sedang diperiksa oleh Teknisi (Estimasi selesai: Besok)`;
        } else if (nota.toUpperCase() === "SRV-2026-002") {
            hasil.innerHTML = `<strong>Status:</strong> Selesai / Sudah dapat diambil di toko.`;
        } else {
            hasil.innerHTML = `<span class="text-amber-400">Nomor nota "${nota}" tidak ditemukan dalam simulasi lokal.</span>`;
        }
    }
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