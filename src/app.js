const btn = document.querySelector('.btn');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const title = document.getElementById('sub-title');
const nav = document.querySelector('.navbar');

//btn dark mode 
// jika menambah kan btn atau objek lain harap di update darkmode css nya agar berubah warna kerena element a atau teks yg terbungkus div tidak berubah warna.
btn.addEventListener('click', ()=> {
  sun.classList.toggle('onvis');
  moon.classList.toggle('invis');
  document.body.classList.toggle('darkmode');
})

//input nama
//const data = prompt('masukan nama anda:');
//title.innerHTML = `
//<h3>hello ` + data +`</h3>
//`;

//navbar background color
window.addEventListener('scroll', ()=> {
  if (window.scrollY > 0) {
    nav.classList.add('subnav');
  } else {
    nav.classList.remove('subnav');
  }
})

//jam
const currentHour = new Date().getHours();
if (currentHour >= 5 && currentHour < 12) {
    title.innerHTML = `
    <h2>Hai selamat pagi</h2>
    `;
  } else if (currentHour >= 12 && currentHour < 15) {
    title.innerHTML = `
    <h2>Hai selamat siang</h2>
    `;
  } else if (currentHour >= 15 && currentHour < 18) {
    title.innerHTML = `
    <h2>Hai selamat sore</h2>
    `;
  } else {
    title.innerHTML = `
    <h2>Hai selamat malam</h2>
    `;
  }
  //load halaman
  window.addEventListener('load', (event) => {
        // Setelah website selesai dimuat, hapus kelas "fadeIn"
       body.classList.remove('fadeIn');
    });
