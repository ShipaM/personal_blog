// Применение класса "ibg"//////////////////////////////////////////
function ibg() {

    let ibg = document.querySelectorAll(".ibg"); // Получаем блок склассом .ibg в переменную ibg
    console.log(ibg);
    for (let i = 0; i < ibg.length; i++) {
        console.log(ibg[i]);
        console.log(ibg[i].querySelector('img'))
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();