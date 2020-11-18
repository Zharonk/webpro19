function otentikasi() {
    let usernameFinal = document.getElementById("username").value
    let passwordFinal = document.getElementById("password").value
    if (usernameFinal == "zharonk" && passwordFinal == "asdwalaksj1") {
        alert("login sukses!")
        window.open().document.write("<h1>Login Sukses</h1>")
    } else {
        alert("Ada yang salah coba lagi!")
    }
}