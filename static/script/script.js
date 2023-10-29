const weatherAPI = 'http://api.weatherapi.com/v1/current.json?key=9988eda2db7342cf86e24116232810&aqi=no';

const keyword = document.querySelector('.keyword');
const btnSearch = document.querySelector('.btn-search');

const container = document.getElementById('container');

btnSearch.onclick = () => {
    const location = keyword.value;

    if (location) { // Pastikan lokasi tidak kosong
        fetch(`${weatherAPI}&q=${location}`)
            .then(res => res.json())
            .then((data) => {
                // console.log(data)
                let element = '';

                element = showElement(data);

                container.innerHTML = element;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
};


function showElement(data) {
    const judulElemen = document.querySelector('.output-container');

    setTimeout(() => {
    judulElemen.classList.add('show');
    }, 250);

    return `<h3 id="lokasi">${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
    <p class="tanggal">${data.current.last_updated}</p>
    <div class="box">
        <div class="cuaca">
            <img src="${data.current.condition.icon}">
        </div>
        <h1 class="celci">${data.current.temp_c}℃</h1>
        <h1 class="faren">${data.current.temp_f}℉</h1>
    </div>
    
    <p id="kondisi">${data.current.condition.text}</p>`;
}


// ======= fungsi menghentikan animasi dari search bar==========
const form = document.getElementById('searchForm');
const input = form.querySelector('input');

form.addEventListener('click', () => {
    input.classList.add('expanded');
    input.style.animation = 'none';
});

// Atur ulang animasi saat halaman di-refresh
window.addEventListener('beforeunload', () => {
    input.classList.remove('expanded');
    input.style.animation = '';
});

// hide title

// function hideTitle() {
//     document.getElementById("title").style.display = "none";
// };


// ======= menyembunyikan title function ============
function hideTitle() {
        var title = document.getElementById("title");
        var opacity = 1;
        var fadeInterval = setInterval(function() {
            opacity -= 0.03;
            title.style.opacity = opacity;
            if (opacity <= 0) {
                clearInterval(fadeInterval);
                title.style.display = "none";
            }
        }, 50);
    }


    var loader = document.getElementById("preloader");
    
    window.addEventListener("load", function(){
        loader.style.display = "none"
    });



