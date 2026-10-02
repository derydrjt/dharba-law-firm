export type Service = {
  title: string
  summary: string
  image: string
  tag: string
  type: 'professional' | 'probono'
}

export const professionalServices: Service[] = [
  {
    title: 'Pidana',
    summary: 'Pendampingan hukum untuk perkara pidana, konsultasi, hingga strategi pembelaan yang tepat.',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
    tag: 'Profesional',
    type: 'professional',
  },
  {
    title: 'Perdata',
    summary: 'Penanganan sengketa perdata, klaim, perjanjian, serta perlindungan kepentingan aset dan bisnis.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    tag: 'Profesional',
    type: 'professional',
  },
  {
    title: 'Keluarga',
    summary: 'Mendampingi perceraian, hak asuh anak, waris, dan persoalan keluarga yang sensitif secara hati-hati.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    tag: 'Profesional',
    type: 'professional',
  },
  {
    title: 'Ketenagakerjaan',
    summary: 'Konsultasi pekerja dan perusahaan terkait PHK, hak kerja, dan kontrak ketenagakerjaan.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    tag: 'Profesional',
    type: 'professional',
  },
  {
    title: 'Bisnis & Korporasi',
    summary: 'Bantuan legal untuk pendirian usaha, kontrak, perizinan, serta perlindungan hak korporasi.',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80',
    tag: 'Profesional',
    type: 'professional',
  },
  {
    title: 'Pertanahan',
    summary: 'Konsultasi dokumentasi, sengketa tanah, dan pengurusan hak kepemilikan yang kompleks.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    tag: 'Profesional',
    type: 'professional',
  },
]

export const proBonoServices: Service[] = [
  {
    title: 'Konsultasi Hukum Dasar',
    summary: 'Layanan konsultasi awal untuk masyarakat yang membutuhkan arahan legal dasar dan sederhana.',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    tag: 'Bantuan Hukum Gratis',
    type: 'probono',
  },
  {
    title: 'Pendidikan Hukum Masyarakat',
    summary: 'Edukasi hukum untuk masyarakat umum agar memahami hak-hak mereka secara lebih mudah.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    tag: 'Bantuan Hukum Gratis',
    type: 'probono',
  },
]
