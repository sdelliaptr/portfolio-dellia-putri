// Diambil dari bagian "PROYEK & PENGALAMAN RELEVAN" pada CV.
// Untuk menambahkan tangkapan layar asli, masukkan 4 gambar untuk setiap proyek ke
// /public/images/projects/<id>/1.jpg (2.jpg, 3.jpg, 4.jpg), lalu perbarui
// array `images` di bawah — sebelum itu, gambar pengganti akan ditampilkan.
export const projects = [
  {
    id: "cataract-classification",
    name: "Sistem Klasifikasi Katarak Berbasis Web",
    role: "Peneliti & Pengembang Skripsi",
    org: "Universitas Gunadarma & RSU Aulia",
    context: "Penelitian Skripsi",
    period: "Mar 2025 — Agu 2026",
    category: "Pengembangan Web · Pembelajaran Mesin",
    tech: ["Python", "Flask", "ResNet-50", "MySQL"],
    summary:
      "Sistem berbasis web untuk melakukan skrining katarak berdasarkan citra mata guna mendukung deteksi dini.",
    purpose:
      "Proses skrining di poli mata RSU Aulia membutuhkan tahap pemeriksaan awal yang lebih cepat dan mudah diakses untuk mengidentifikasi indikasi katarak sebelum pemeriksaan klinis secara menyeluruh.",
    solution:
      "Mengembangkan aplikasi web menggunakan Python dan Flask dengan mengintegrasikan model pembelajaran mendalam ResNet-50 untuk mengklasifikasikan citra mata yang diunggah dan mendukung proses skrining awal katarak.",
    features: [
      "Autentikasi pengguna dan akses berbasis peran",
      "Pengunggahan citra mata untuk skrining",
      "Hasil klasifikasi otomatis menggunakan ResNet-50",
      "Integrasi model yang telah dilatih dengan aplikasi web",
    ],
    myRole:
      "Menangani pengembangan sistem secara menyeluruh, mulai dari merancang fitur autentikasi, pengunggahan citra, dan hasil deteksi hingga mengintegrasikan model klasifikasi serta melakukan pengujian dan dokumentasi.",
    outcome:
      "Menyelesaikan pengujian fungsional, User Acceptance Testing (UAT), dan evaluasi menggunakan data baru, serta menghasilkan dokumentasi teknis lengkap dan panduan pengguna.",
    github: null,
    demo: null,
    images: [
      { src: "/images/projects/cataract-classification/1.jpg",
        label: "Gambaran Proyek" },
      { src: "/images/projects/cataract-classification/2.jpg",
        label: "Beranda / Antarmuka Utama" },
      { label: "Gambaran Proyek" },
      { label: "Gambaran Proyek" },
    ],
  },

  {
    id: "socioeconomic-poverty-analysis",
    name: "Analisis Data Sosial Ekonomi & Kemiskinan di Indonesia",
    role: "Analis Data",
    org: "Universitas Gunadarma",
    context: "Proyek Analisis Data",
    period: "Jun 2026",
    category: "Analisis Data",
    tech: ["Python", "Pandas", "NumPy", "Looker Studio"],
    summary:
      "Analisis eksploratif yang mengkaji hubungan tingkat kemiskinan di berbagai kabupaten dan kota di Indonesia dengan indikator sosial ekonomi.",
    purpose:
      "Memahami hubungan tingkat kemiskinan di berbagai kabupaten dan kota di Indonesia dengan indikator sosial ekonomi yang lebih luas.",
    solution:
      "Melakukan pembersihan dan eksplorasi data, menangani pencilan, serta melakukan analisis korelasi untuk mengidentifikasi hubungan antara kemiskinan dan berbagai variabel sosial ekonomi, kemudian menyajikan hasilnya dalam dasbor interaktif.",
    features: [
      "Proses pembersihan dan prapemrosesan data",
      "Analisis Data Eksploratif (EDA) dan penanganan pencilan",
      "Analisis korelasi antarindikator sosial ekonomi",
      "Dasbor interaktif menggunakan Looker Studio",
    ],
    myRole:
      "Menangani seluruh proses analisis, mulai dari pembersihan data, EDA, penanganan pencilan, analisis korelasi, hingga perancangan dasbor.",
    outcome:
      "Menghasilkan visualisasi dan dasbor interaktif yang menyajikan hubungan antara tingkat kemiskinan dan berbagai indikator sosial ekonomi.",
    github: null,
    demo: null,
    images: [
      { src: "/images/projects/analisis-kemiskinan/1.jpg",
        label: "Gambaran Proyek" },
      { label: "Gambaran Proyek" },
      { label: "Gambaran Proyek" },
      { label: "Gambaran Proyek" },
    ],
  },

  {
    id: "spotify-music-analysis",
    name: "Analisis Data Musik Spotify",
    role: "Analis Data",
    org: "Universitas Gunadarma",
    context: "Proyek Analisis Data",
    period: "Mei — Jun 2026",
    category: "Analisis Data",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy"],
    summary:
      "Analisis statistik terhadap 114.000 lagu untuk mengkaji hubungan karakteristik audio dengan tingkat popularitas.",
    purpose:
      "Menganalisis faktor yang berkaitan dengan popularitas lagu di Spotify melalui hubungan antara karakteristik audio dan skor popularitas.",
    solution:
      "Melakukan pemahaman data, pembersihan, EDA, penanganan pencilan, rekayasa fitur, dan analisis statistik pada 114.000 data lagu, kemudian memvisualisasikan hubungan utama yang ditemukan.",
    features: [
      "Pembersihan data berskala besar dan rekayasa fitur",
      "Analisis Data Eksploratif terhadap 114.000 lagu",
      "Analisis statistik karakteristik audio terhadap popularitas",
      "Dasbor interaktif menggunakan Looker Studio",
    ],
    myRole:
      "Menangani proses analisis secara menyeluruh, mulai dari memahami data, melakukan pembersihan, EDA, rekayasa fitur, pengujian statistik, hingga membuat dasbor.",
    outcome:
      "Menghasilkan visualisasi dan dasbor interaktif yang merangkum karakteristik audio yang paling berkaitan dengan popularitas lagu.",
    github: null,
    demo: null,
    images: [
      { src: "/images/projects/analisis-spotify/1.jpg",
        label: "Gambaran Proyek" },
      { label: "Gambaran Proyek" },
      { label: "Gambaran Proyek" },
      { label: "Gambaran Proyek" },
    ],
  },

  {
    id: "dante-propolis-sales-system",
    name: "Sistem Penjualan & Transaksi Berbasis Web — Dante Propolis",
    role: "Perancang Sistem",
    org: "Universitas Gunadarma",
    context: "Proyek Perancangan Sistem",
    period: "Sep 2025 — Jan 2026",
    category: "UI/UX & Perancangan Sistem",
    tech: ["Figma", "System Design", "Database Design"],
    summary:
      "Perancangan sistem penjualan dan transaksi secara menyeluruh, mulai dari arsitektur sistem hingga antarmuka dengan tingkat ketelitian tinggi.",
    purpose:
      "Dante Propolis membutuhkan rancangan dasar untuk sistem penjualan dan transaksi berbasis web sebelum tahap pengembangan dimulai.",
    solution:
      "Merancang arsitektur sistem, proses bisnis, aliran data, hubungan antarmodul, dan struktur basis data, kemudian menerjemahkannya ke dalam wireframe dan rancangan antarmuka dengan tingkat ketelitian tinggi.",
    features: [
      "Perancangan arsitektur sistem dan proses bisnis",
      "Pemetaan aliran data dan hubungan antarmodul",
      "Perancangan struktur basis data",
      "Wireframe dan rancangan antarmuka dengan tingkat ketelitian tinggi menggunakan Figma",
    ],
    myRole:
      "Berperan sebagai perancang sistem dengan menentukan arsitektur dan model data, membuat rancangan di Figma, serta menyusun spesifikasi teknis.",
    outcome:
      "Menghasilkan Software Design Description (SDD) dan spesifikasi teknis secara lengkap serta berkoordinasi dengan tim pengembang dalam proses serah terima rancangan.",
    github: null,
    demo: null,
    images: [
      { src: "/images/projects/dante-propolis/1.jpg",
        label: "Gambaran Proyek" },
      { src: "/images/projects/dante-propolis/2.jpg",
        label: "Beranda / Antarmuka Utama" },
      { label: "Gambaran Proyek" },
      { label: "Gambaran Proyek" },
    ],
  },

  {
    id: "mamih-cooking-ordering-website",
    name: "Situs Pemesanan — Mamih Cooking Bakery",
    role: "Pengembang",
    org: "Universitas Gunadarma",
    context: "Penulisan Ilmiah",
    period: "Mar — Agu 2025",
    category: "Pengembangan Web",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    summary:
      "Situs pemesanan lengkap yang dikembangkan untuk usaha roti rumahan, mulai dari basis data hingga antarmuka.",
    purpose:
      "Mamih Cooking membutuhkan situs pemesanan daring agar pelanggan dapat melihat produk dan melakukan pemesanan tanpa perlu melakukan koordinasi secara manual.",
    solution:
      "Merancang dan mengembangkan situs pemesanan menggunakan PHP, MySQL, HTML, dan CSS yang mencakup struktur situs, antarmuka, basis data, serta alur pemesanan.",
    features: [
      "Katalog produk dan alur pemesanan",
      "Perancangan basis data untuk pesanan dan produk",
      "Antarmuka responsif menggunakan HTML dan CSS",
      "Pengujian fungsional pada fitur pemesanan",
    ],
    myRole:
      "Merancang dan mengembangkan situs secara mandiri sebagai proyek penulisan ilmiah, mulai dari basis data hingga antarmuka.",
    outcome:
      "Menghasilkan situs pemesanan yang dapat digunakan dan telah melalui pengujian fungsional untuk memastikan setiap fitur berjalan sesuai kebutuhan.",
    github: null,
    demo: null,
    images: [
      { src: "/images/projects/mamih-cooking/1.jpg",
        label: "Gambaran Proyek" },
      { src: "/images/projects/dante-propolis/2.jpg",
        label: "Beranda / Antarmuka Utama" },
      { label: "Gambaran Proyek" },
      { label: "Gambaran Proyek" },
    ],
  },
];