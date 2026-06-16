# 🎫 TicketNova - Aplikasi Pemesanan Tiket Online

Aplikasi Web Pemesanan Tiket Konser/Event Online berbasis **Client-Side Framework** yang modern, responsif, dan interaktif. Project ini dikembangkan menggunakan **Bootstrap 5** untuk penyusunan _User Interface (UI)_ bertema _Futuristic Slate Dark Mode_ dan **jQuery** untuk penanganan manajemen state, manipulasi DOM, serta pengolahan basis data lokal.

Project ini disusun dalam rangka pemenuhan tugas mata kuliah pemrograman web.

---

## 🚀 Fitur Utama Aplikasi

1. **Dashboard Utama (Client & Admin)**:
   - **Admin Dashboard**: Form manajemen event (_Create, Read, Update, Delete_) terintegrasi dengan visual grafik batang (_Progress Bar_) target penjualan tiket.
   - **Client Dashboard**: Menampilkan informasi tiket yang telah dibeli, kalkulasi poin loyalitas, serta penentuan _Badge Level Member_ secara otomatis.
2. **Featured & All Events System**:
   - Penayangan daftar konser secara dinamis dengan integrasi waktu hitung mundur (_Countdown Timer_) _real-time_.
   - Sistem pencarian instan (_Live Search Bar_) berbasis pelacakan karakter tombol (_Keyup Event Handler_) dan filter lokasi kota (Jakarta, Bandung, Bali).
3. **Interactive Booking Modal**:
   - Alur pemesanan karcis yang konsisten di halaman _Events_ maupun _Wishlist_ menggunakan komponen _Bootstrap Modal Pop-up_.
4. **Wishlist Management**:
   - Menyimpan daftar konser incaran menggunakan _array_ data, lengkap dengan fitur hapus item satuan, bersihkan semua, dan tombol aksi _checkout_ cepat.
5. **Responsive Payment Gateway & QR Code**:
   - Simulasi pemilihan _Payment Method_ (Virtual Account, E-Wallet, Retail).
   - Generator QR Code pembayaran otomatis yang responsif di berbagai resolusi layar berkat optimasi rendering _Canvas_ menggunakan library `qrcode.js`.

---

## 🛠️ Arsitektur & Teknologi

- **Frontend Framework**: [Bootstrap v5.3.0](https://getbootstrap.com/)
- **Javascript Library**: [jQuery v3.6.0 / v3.7.1](https://jquery.com/)
- **QR Code Engine**: [QRCode.js](https://davidshimjs.github.io/qrcodejs/)
- **Icon Provider**: [FontAwesome v6.4.0](https://fontawesome.com/)
- **Local Database Engine**: Browser LocalStorage Architecture (`activeBooking`, `currentBooking`, `wishlist`, `tickets`, `points`)

---

## 📂 Struktur Folder Project

```text
ticket-nova/
│
├── assets/                  # Tempat semua aset statis aplikasi
│   ├── css/
│   │   └── style.css        # Custom overrides CSS styling
│   └── js/
│       └── main.js          # Core script/logic aplikasi utama
│
├── pages/                   # Modul halaman aplikasi (Satu Scope)
│   ├── admin.html           # Panel kontrol manajemen event admin
│   ├── dashboard.html       # Informasi profil member, poin, dan kepemilikan tiket
│   ├── events.html          # Katalog pencarian konser, filter lokasi, dan countdown
│   ├── payment.html         # Portal konfirmasi pembayaran dan generate QR Code
│   └── wishlist.html        # Daftar simpanan konser favorit user
│
├── index.html               # Landing page / halaman utama aplikasi
└── README.md                # Dokumentasi sistem aplikasi
```
