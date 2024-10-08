import input from 'input';

class DaftarNilai {
    constructor() {
        this.nilaiList = [];
    }

    tambahNilai(nilai) {
        this.nilaiList.push(nilai);
    }

    hitungRataRata() {
        return this.nilaiList.reduce((total, nilai) => total + nilai, 0) / this.nilaiList.length;
    }

    nilaiDiatasRataRata() {
        const rataRata = this.hitungRataRata();
        return this.nilaiList.filter(nilai => nilai > rataRata);
    }

    jumlahNilaiDiatasRataRata() {
        return this.nilaiDiatasRataRata().reduce((total, nilai) => total + nilai, 0);
    }

    nilaiTertinggi() {
        return Math.max(...this.nilaiList);
    }

    nilaiTerendah() {
        return Math.min(...this.nilaiList);
    }

    reverseNilai() {
        const nilaiSalinan = [...this.nilaiList];
        return nilaiSalinan.sort((a, b) => b - a);
    }
}
  
  async function main() {
    const daftarNilai = new DaftarNilai();
  
    let inputPoint = "+";
    do {
    const nilai = await input.text('Masukan Nilai?', { default: 'example 1, 2, 3 etc ; when done type -' });
      if (nilai === "-") {
        inputPoint = "-";
      } else {
        daftarNilai.tambahNilai(parseFloat(nilai));
      }
    } while (inputPoint === "+");
  
    console.log(`Rata-rata adalah: \t\t\t${daftarNilai.hitungRataRata()}`);
    console.log(`Nilai tertinggi adalah: \t\t${daftarNilai.nilaiTertinggi()}`);
    console.log(`Nilai terendah adalah: \t\t\t${daftarNilai.nilaiTerendah()}`);
    console.log(`Jumlah nilai diatas rata rata adalah: \t${daftarNilai.jumlahNilaiDiatasRataRata()}`);
    console.log(`Nilai di atas rata-rata: \t\t${daftarNilai.nilaiDiatasRataRata()}`);
    console.log(`Reverse nilai: \t\t\t\t${daftarNilai.reverseNilai()}`);
  }
  
  main();