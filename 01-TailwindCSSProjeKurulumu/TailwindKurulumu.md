# **Tailwind Css Kurulumu**

---

## 01-Node.js ve npm'in Kurulumu

- Node.js Resmi Web Sitesi üzerinden önerilen sürümü indirilir.
- İndirilen dosyayı çalıştırarak kurulum işlemini başlatılır.
- Kurulumda varsayılan ayarları seçmek genellikle yeterlidir.
- Kurulum tamamlandıktan sonra, komut satırını (CMD veya PowerShell) açılır ve aşağıdaki komutları kullanarak Node.js ve npm'in doğru bir şekilde kurulup kurulmadığını anlarız.

```
node -v
npm -v
```

---

## 02-Yeni Bir Proje Dizini Oluşturma

- Komut satırında, projeni başlatmak istediğimiz dizine gidilir ve yeni bir dizin oluşturulur.

```
mkdir tailwind-projem
cd tailwind-projem
```

---

## 03-Tailwind CSS'i kurun

- Tailwind CSS'i npm ile yüklenir ve tailwind.config.js dosyanızı oluşturulur.

```
npm install -D tailwindcss
npx tailwindcss init
```

---

## 04-Uygun dosyaları kurun

- Kurulumlar tamamlandıktan sonra **src** ve **dist** klasörleri eklenir.
- dist klasörü içine **index.html** eklenir.
- src klasörü içine input.css eklenir.

---

## 05-Şablon yollarını yapılandırmak

- tailwind.config.js dosyanıza, şablon dosyalarınızın uygun yollarını ekleyin.

### tailwind.config.js

```tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 06-Tailwind yönergelerini CSS dosyasına eklenmesi

- Ana CSS dosyanıza Tailwind'in her katmanı için @tailwind yönergelerini ekleyin.

### src/input.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 07-Tailwind CLI derleme sürecini başlatın

- CLI aracını, şablon dosyalarınızı sınıflar için tarayıp CSS'inizi oluşturacak şekilde çalıştırın.

### Terminal

```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```
