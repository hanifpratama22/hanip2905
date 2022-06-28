/* Algoritma
 1. Cari rumus keliling lingkaran yang sudah ditentukan
 2. Temukan panjang jari-jari lingkaran tersebut
 3. Kalikan dengan pi (3.14)
 4. Kalikan dengan 2
 5. Tampilkan hasilnya dari proses yang sudah di hitung 

 Diketahui
 jari-jari = 14
 pi = 3.14

 Ditanya
 keliling lingkaran

 Jawaban

var pi = Math.PI;
var jariJari;
var keliling;

STORE pi AS NUMBER WITH Math.PI
STORE jariJari AS NUMBER WITH 14
STORE keliling AS NUMBER WITH jariJari TIMES pi TIMES 2

DISPLAY "Nilai pi: " CONCAT WITH pi
DISPLAY "Nilai Jari-jari: " CONCAT WITH jariJari
DISPLAY "Keliling lingkaran = " CONCAT WITH 'jari-jari x 2 x pi'
DISPLAY "Keliling lingkaran = " CONCAT WITH jariJari CONCAT WITH 'x 2 x' CONCAT WITH pi
DISPLAY "Keliling lingkaran = " keliling
*/
