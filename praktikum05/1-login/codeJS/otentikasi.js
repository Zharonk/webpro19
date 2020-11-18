function otentikasi() {
    let usernameFinal = document.getElementById("username").value
    let passwordFinal = document.getElementById("password").value
    if (usernameFinal == "ahmad2017" && passwordFinal == "integrity") {
        alert("login sukses!")
        window.open().document.write("<h1>Login Sukses</h1>")
    } else {
        alert("Ada yang salah coba lagi!")
    }
}