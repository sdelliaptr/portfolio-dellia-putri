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
    tech: ["Python", "Flask", "ResNet-50"],
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
    github: "https://github.com/sdelliaptr/data-analysis-kemiskinan",
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
    github: "https://github.com/sdelliaptr/spotify-data-analysis",
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
      { label: "Gambaran Proyek" },
      { label: "Gambaran Proyek" },
      { label: "Gambaran Proyek" },
    ],
  },

  {
    id: "moodflix",
    name: "MoodFlix — Website Rekomendasi Film Berdasarkan Mood",
    role: "Back-End Developer",
    org: "Coding Camp 2025",
    context: "Capstone Project",
    period: "Juni - Juli 2025",
    category: "Pengembangan Web · Machine Learning",
    tech: ["JavaScript", "HAPI.js", "Flask", "REST API", "Machine Learning"],
    summary:
      "Website rekomendasi film berdasarkan mood pengguna yang dikembangkan sebagai capstone project Coding Camp 2025.",
    purpose:
      "Membangun aplikasi rekomendasi film berdasarkan mood dengan mengintegrasikan layanan back-end dan model Machine Learning.",
    solution:
      "Mengembangkan RESTful API, mengintegrasikan Machine Learning API untuk fitur rekomendasi, serta menghubungkan API dengan front-end.",
    features: [
      "RESTful API",
      "Rekomendasi film berdasarkan mood",
      "Integrasi Machine Learning API",
      "Integrasi API dengan front-end"
    ],
    myRole:
      "Berperan sebagai Back-End Developer dalam membangun RESTful API, mengintegrasikan Machine Learning API, dan mendukung integrasi API dengan front-end.",
    outcome:
      "Menghasilkan aplikasi rekomendasi film berbasis mood dengan layanan back-end dan Machine Learning yang terintegrasi.",
    github: null,
    demo: "https://youtube.com/shorts/j9YcnwETpVg?si=IqfIg0vWLITy_O-9",
    images: [
      {
        src: "/images/projects/moodflix/1.jpg",
        label: "Tampilan MoodFlix"
      },
      {
        label: "Gambar Proyek"
      },
      {
        label: "Gambar Proyek"
      },
      {
        label: "Gambar Proyek"
      }
    ],
  },

  {
    id: "diabetes-data-analysis",
    name: "Analisis Data Pasien Diabetes",
    role: "Analis Data",
    org: "Universitas Gunadarma",
    context: "Proyek Analisis Data",
    period: "Juni 2025",
    category: "Analisis Data",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    summary:
      "Analisis eksploratif untuk mengidentifikasi pola dan karakteristik pasien berdasarkan faktor yang berkaitan dengan diabetes.",
    purpose:
      "Mengeksplorasi karakteristik pasien dan hubungan antarvariabel untuk memperoleh insight dari data pasien diabetes.",
    solution:
      "Melakukan pemeriksaan dan pembersihan data, analisis statistik deskriptif, serta Exploratory Data Analysis (EDA) menggunakan visualisasi untuk memahami pola pada data.",
    features: [
      "Pemeriksaan dan pembersihan data",
      "Analisis statistik deskriptif",
      "Exploratory Data Analysis (EDA)",
      "Visualisasi distribusi dan hubungan antarvariabel"
    ],
    myRole:
      "Menangani proses analisis data secara menyeluruh, mulai dari memahami dan memeriksa data hingga melakukan EDA dan visualisasi.",
    outcome:
      "Menghasilkan visualisasi dan insight mengenai karakteristik serta pola data pasien diabetes.",
    github: "https://github.com/sdelliaptr/diabetes-data-analysis",
    demo: null,
    images: [
      { src: "/images/projects/diabetes-data-analysis/1.jpg",
        label: "Gambaran Proyek" },
      {
        label: "Gambar Proyek"
      },
      {
        label: "Gambar Proyek"
      },
      {
        label: "Gambar Proyek"
      }
      ],
    },
];