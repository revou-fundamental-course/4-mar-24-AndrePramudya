// Function untuk menghitung BMI
function hitungBMI() {
    var beratBadan = parseFloat(document.querySelector('input[name="berat_badan"]').value);
    var tinggiBadan = parseFloat(document.querySelector('input[name="tinggi_badan"]').value);
    
    var bmi = beratBadan / ((tinggiBadan / 100) ** 2); // Menghitung BMI dalam kg/m^2

    return bmi;
}

// Function untuk menentukan klasifikasi berat badan berdasarkan BMI
function klasifikasiBMI(bmi) {
    if (bmi < 18.5) {
        return "Kurus";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "Berlebih";
    } else {
        return "Gemuk";
    }
}

// Function untuk menampilkan hasil BMI, klasifikasi, dan nasihat sesuai kategori
function tampilkanHasilBMI() {
    var bmi = hitungBMI();
    var kategori = klasifikasiBMI(bmi);
    var keterangan = "Berat badan Anda " + kategori.toLowerCase() + ".";
    var kategoriMin, kategoriMax;
    var nasihat = "";

    // Menentukan rentang kategori sesuai dengan klasifikasi BMI
    switch (kategori) {
        case "Kurus":
            kategoriMin = "Kurang dari 18.5";
            kategoriMax = "18.4";
            nasihat = "Anda berada dalam kategori berat badan kurang. Saran: Cara terbaik untuk meningkatkan berat badan adalah dengan meningkatkan asupan kalori dan mengonsumsi makanan bergizi lebih banyak.";
            break;
        case "Normal":
            kategoriMin = "18.5";
            kategoriMax = "24.9";
            nasihat = "Selamat! Berat badan Anda normal. Tetap menjaga pola makan sehat dan rutin berolahraga untuk kesehatan yang baik.";
            break;
        case "Berlebih":
            kategoriMin = "25.0";
            kategoriMax = "29.9";
            nasihat = "Anda berada dalam kategori berat badan berlebih. Saran: Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini, Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
            break;
        case "Gemuk":
            kategoriMin = "30.0";
            kategoriMax = "30.0 atau lebih";
            nasihat = "Anda berada dalam kategori berat badan gemuk. Saran: Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini, Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
            break;
        default:
            kategoriMin = "";
            kategoriMax = "";
            nasihat = "";
    }

    document.getElementById('bmi-result').textContent = bmi.toFixed(2);
    document.getElementById('kategori').textContent = "Kategori BMI: " + kategori;
    document.getElementById('keterangan').textContent = keterangan;
    document.getElementById('kategori-min').textContent = kategoriMin;
    document.getElementById('kategori-max').textContent = kategoriMax;
    
    // Menampilkan nasihat sesuai dengan kategori BMI
    document.getElementById('nasihat').textContent = nasihat;
}

// Function untuk menghapus nilai dalam form berat badan, tinggi badan, dan usia
function hapusNilaiForm() {
    document.querySelector('input[name="berat_badan"]').value = '';
    document.querySelector('input[name="tinggi_badan"]').value = '';
    document.querySelector('input[name="usia"]').value = '';
}

// Event listener untuk tombol "Hitung BMI"
document.getElementById('hitung').addEventListener('click', function() {
    tampilkanHasilBMI();
});

// Event listener untuk tombol "Hapus"
document.getElementById('hapus').addEventListener('click', function() {
    hapusNilaiForm();
});