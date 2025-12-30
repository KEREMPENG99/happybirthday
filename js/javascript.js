// Fungsi untuk membuka game
function openGame(gameName) {
    // Sembunyikan semua area game
    document.getElementById('album-game').classList.remove('active');
    document.getElementById('riddle-game').classList.remove('active');
    document.getElementById('message-game').classList.remove('active');
    
    // Tampilkan game yang dipilih
    document.getElementById(gameName + '-game').classList.add('active');
    
    // Inisialisasi game teka-teki jika dipilih
    if (gameName === 'riddle' && typeof initRiddleGame === 'function') {
        initRiddleGame();
    }
    
    // Scroll ke game area
    const element = document.getElementById(gameName + '-game');
    const offsetPosition = element.offsetTop - 50;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Tambahkan fungsi untuk menangani resize window
window.addEventListener('resize', function() {
    // Pastikan kontainer tidak terlalu kecil
    const container = document.querySelector('.container');
    if (window.innerWidth < 350) {
        container.style.minWidth = '350px';
    } else {
        container.style.minWidth = '';
    }
});

// Fungsi untuk menutup game
function closeGame(gameName) {
document.getElementById(gameName + '-game').classList.remove('active');
}

 const audio = document.getElementById('bgMusic');
    
    // Make song loop when it ends
    audio.addEventListener('ended', function() {
        this.currentTime = 0; // Reset to beginning
        this.play(); // Play again
    });
    
    // Start on click
    document.body.onclick = function() {
        audio.play();
        document.body.onclick = null; // Remove click listener
    };

// Fungsi untuk menampilkan foto
function showPhoto(photoId) {
const photoTitles = {
  'photo1': 'Peace kecil, senyum manis — bikin hati ikut tenang 🤍',
  'photo2': 'Naik kuda sambil senyum — cantiknya kebangetan 🐎✨',
  'photo3': 'Senyumnya bersinar — bikin dunia ikut cerah ☀️',
  'photo4': 'Peace manis — cantiknya bikin lupa kedip 💕',
  'photo5': 'Agak blur, tapi tetap paling lucu 😎💫',
  'photo6': 'Pose galak dikit — tapi tetap gemas kok 😤💗',
  'photo7': 'Jempol mantap — senyumnya juga juara 👍😊',
  'photo8': 'Duduk manis — cantiknya adem di hati 🤍',
  'photo9': 'Muka nangis dikit — tapi tetap lucu dan manis 🥺💞',
  'photo10': 'Pakai masker pun — cantiknya tetap kelihatan 😷✨'
};

alert(photoTitles[photoId] );
}

// Fungsi untuk mengungkap pesan rahasia
function revealMessage() {
const messages = [
  "Kita emang jauh, tapi lucunya masih nyampe kok 😆 sayang",
  "Aku lagi kerja, kamu lagi istirahat… tapi tetep kepikiran satu sama lain sayang",
  "Kadang aku ketawa sendiri cuma gara-gara inget kamu sayang",
  "Walau jauh, bercanda sama kamu tuh tetap paling enak sayang",
  "Aku capek, tapi inget kamu langsung hilang sayang",
  "LDR gini tuh lucu ya, ketemunya jarang tapi rindunya sering sayang",
  "Kita jauh bukan karena nggak mau bareng, tapi lagi sama-sama usaha",
  "Kadang cuma chat sebentar tapi efeknya lama sayang",
  "Aku kerja sambil mikir, nanti kalau ketemu ngapain ya sayang",
  "Kamu tuh bikin capekku nggak kerasa sayang",
  "Walau nggak ketemu, rasanya kamu tetep deket sayang",
  "Aku suka cara kita ketawa walau cuma lewat layar sayang",
  "Kadang aku senyum sendiri baca chat kamu yang dulu sayang",
  "Jarak emang ada, tapi rasa mah nggak kemana-mana sayang",
  "Kita emang jauh, tapi hatinya nggak ikut jauh sayang",
  "Aku nunggu bukan karena terpaksa, tapi karena mau sayang",
  "Kalau lagi capek, inget aja kita lagi berjuang bareng sayang",
  "Nanti pas ketemu, ketawanya harus lebih lama ya sayang",
  "Sekarang jauh dulu, nanti deketnya lama sayang",
  "Aku kangen, tapi masih bisa ketawa karena kamu sayang",
  "Kadang aku mikir, lucu juga ya kita bisa sejauh ini sayang",
  "Kamu tuh sederhana, tapi bikin aku betah sayang",
  "Walau jauh, kamu tetep orang favoritku sayang",
  "Aku kerja sambil senyum-senyum sendiri mikirin kamu sayang",
  "Kalau kamu capek, aku di sini walau cuma lewat chat sayang",
  "Kita nggak ribet, cuma saling jaga aja sayang",
  "Aku nyaman sama kamu, itu aja udah cukup sayang",
  "Nggak perlu sering ketemu, asal hati tetap nyambung sayang",
  "Pelan-pelan aja, yang penting bareng ya sayang"
];

const randomMessage = messages[Math.floor(Math.random() * messages.length)];
const secretMessageDiv = document.getElementById('secret-message');

secretMessageDiv.innerHTML = `"${randomMessage}"`;
secretMessageDiv.classList.add('revealed');

// Ubah tombol
const button = document.querySelector('.reveal-btn');
button.innerHTML = '<i class="fas fa-redo"></i> Pesan Lainnya';
button.onclick = function() {
    revealMessage();
};
}

// Inisialisasi halaman
document.addEventListener('DOMContentLoaded', function() {
// Tambahkan efek hover pada kartu game
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Buat efek hujan hati di header
const header = document.querySelector('header');
for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-decoration');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 1 + 0.5) + 'rem';
    heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    header.appendChild(heart);
}
});

// Tambahkan di akhir file javascript.js
window.addEventListener('load', function() {
    // Deteksi zoom dan sesuaikan
    function handleZoom() {
        const container = document.querySelector('.container');
        if (window.innerWidth < document.documentElement.clientWidth) {
            // Jika ada zoom, izinkan overflow
            container.style.minWidth = window.innerWidth + 'px';
        } else {
            container.style.minWidth = '';
        }
    }
    
    // Panggil saat resize dan load
    window.addEventListener('resize', handleZoom);
    handleZoom();
    
    // Pastikan body selalu bisa scroll
    document.body.style.overflowX = 'auto';
    document.body.style.overflowY = 'auto';
    
    // Tambahkan class untuk mencegah isu tertentu
    document.documentElement.style.overflow = 'auto';
});

// Background slideshow
function initBackgroundSlideshow() {
    const slides = document.querySelectorAll('#background-slideshow .slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    function changeSlide() {
        // Hapus class active dari semua slide
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Tambah class active ke slide saat ini
        slides[currentSlide].classList.add('active');
        
        // Pindah ke slide berikutnya
        currentSlide = (currentSlide + 1) % slides.length;
    }
    
    // Mulai dengan slide pertama
    changeSlide();
    
    // Ganti slide setiap 5 detik
    setInterval(changeSlide, 5000);
}

// Panggil saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    initBackgroundSlideshow();
});





