# Dharba Law Firm Prototype

Prototype landing page untuk Dharba Law Firm dengan gaya law firm yang tegas, professional, dan cocok untuk demo klien.

## Cara menjalankan

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Buka:

- http://localhost:5173/

## Build produksi

```bash
npm run build
```

## Struktur aplikasi

- `src/data/` berisi konten statis dan placeholder
- `src/App.tsx` berisi layout satu halaman dan interaksi utama
- `src/index.css` berisi tema visual, font, dan CSS dasar
- `public/logo.svg` adalah placeholder logo yang mengikuti referensi warna dari logo yang dikirimkan

## TODO yang perlu dikonfirmasi klien

- Nama lengkap advokat dan posisi tiap profil di `src/data/team.ts`
- Nomor WhatsApp aktif di `src/data/site.ts` dan `src/data/contact.ts`
- Email bisnis yang valid di `src/data/site.ts` dan `src/data/contact.ts`
- Username TikTok final di `src/data/site.ts` dan `src/data/contact.ts`
- Jadwal live TikTok yang benar di `src/data/site.ts`
- Foto final untuk masing-masing advokat jika tersedia
- Logo resmi PNG bila ingin mengganti placeholder saat ini
- Konten profil firma yang lebih spesifik bila klien ingin menyesuaikan narasi legal

## Catatan desain

- React + TypeScript + Vite
- Tailwind CSS
- Lucide React
- Layout mobile-first dan responsif
- Floating WhatsApp dan toast sukses pada form kontak
