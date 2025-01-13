/* Dark & Light Mode */
// HTML elementine erişim sağlıyoruz. Bu, sayfanın tüm HTML içeriğini temsil eder.
const htmlTag = document.getElementsByTagName("html")[0];

// Sayfa yüklendiğinde çalışacak fonksiyon
window.onload = function () {
  // localStorage'da daha önce "dark" olarak kaydedilmiş bir tema var mı diye kontrol ediyoruz.
  if (localStorage.theme === "dark") {
    htmlTag.classList.add("dark");
  }
};

try {
  function changeTheme(e) {
    // Butona tıklanma olayını engelliyoruz (sayfanın yenilenmesini önlüyoruz).
    e.preventDefault();

    if (htmlTag.className.includes("dark")) {
      // htmlTag.classList.remove("dark");
      localStorage.removeItem("theme");
    } else {
      // htmlTag.classList.add("dark");
      localStorage.theme = "dark";
    }

    htmlTag.classList.toggle("dark");
  }

  const switcher = document.getElementById("theme-mode");
  // Eğer buton varsa, tıklama olayına tema değiştirme fonksiyonunu bağlıyoruz.
  switcher?.addEventListener("click", changeTheme);
} catch (err) {
  console.log(err);
}
