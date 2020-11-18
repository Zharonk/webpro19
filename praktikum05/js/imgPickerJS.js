function picker() {
    let gunungFinal = document.getElementById("gunung").value

    if (gunungFinal == "bromo"){
        gunungFinal = "http://www.bromotravelindo.com/wp-content/uploads/2015/11/gambar-gunung-gunung-kerinci-2.jpg"
        alert("Ini gambar bromo.jpg")
    } else if (gunungFinal == "everest") {
        gunungFinal = "https://www.inspiradata.com/wp-content/uploads/2018/06/gunung-everest.jpg"
        alert("Ini gambar everest.jpg")
    } else if (gunungFinal == "fuji") {
        gunungFinal = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Numazu_and_Mount_Fuji.jpg/1200px-Numazu_and_Mount_Fuji.jpg"
        alert("Ini gambar fuji.jpg")
    } else if (gunungFinal == "kilimanjaro"){
        gunungFinal = "https://cdn.britannica.com/33/153433-050-F76BDF75/Sunrise-Mount-Kilimanjaro-Tanzania.jpg"
        alert("Ini gambar kilimanjaro.jpg")
    } else if (gunungFinal == "merapi"){
        gunungFinal = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mount_Merapi_in_2014.jpg/1920px-Mount_Merapi_in_2014.jpg"
        alert("Ini gambar merapi.jpg")
    } else if (gunungFinal == "salak"){
        gunungFinal = "https://www.indoindians.com/wp-content/uploads/2017/01/Gunung-salak.jpg"
        alert("Ini gambar salak.jpg")
    }

    document.getElementById("gambar").src = gunungFinal

}