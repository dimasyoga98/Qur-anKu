function fetchSurahAndDisplay(surahNumber) {
    const au = document.querySelector('.audio');
    const cont = document.querySelector('.container');

    fetch(`https://quran-api.santrikoding.com/api/surah/${surahNumber}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const surah = data.ayat;
            const audio = data.audio;
            console.log(audio);
            au.innerHTML += `<audio controls>
                <source src="${audio}" type="audio/mpeg">
                Browsermu tidak mendukung tag audio, upgrade donk!
            </audio>`;
            console.log(surah);
            for (let i = 0; i < surah.length; i++) {
                const ayatDiv = document.createElement('div');
                const ayat = surah[i].ar;
                const arti = surah[i].idn;
                const latin = surah[i].tr;
                const no = surah[i].nomor;
                ayatDiv.className = 'surah';
                ayatDiv.innerHTML = `<h2>${ayat}</h2><span>${latin}</span></br><p>${no}.${arti}</p>`;
                cont.appendChild(ayatDiv);
            }
        })
        .catch(error => console.error('Error:', error));
}
fetchSurahAndDisplay(32);