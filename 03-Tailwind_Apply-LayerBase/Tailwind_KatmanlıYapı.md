# **Katmanlı Yapı (Layering) Nedir?**

**Tailwind CSS, **katmanlı stil yapısını** kullanarak stil sınıflarını düzenler. Katmanlar (layers), CSS'in daha yapılandırılmış ve yönetilebilir şekilde yazılmasını sağlar. Katmanlar sayesinde, temel stil düzenlemeleri (base), bileşenler (components) ve yardımcı sınıflar (utilities) farklı alanlarda gruplanabilir.**

Tailwind'in kullandığı 3 ana katman vardır:

- **base**: Temel stil tanımlamaları (genel, global stiller).
- **components**: Yeniden kullanılabilir bileşen stilleri.
- **utilities**: Yardımcı sınıflar, genellikle tek bir CSS özelliği için hızlı stil uygulamaları.

Bu katmanlar, CSS dosyasını daha düzenli ve bakımı daha kolay hale getirir.

---

## **@layer base**

**`@layer base`, temel stil yapıları için kullanılır. Bu katmanda genellikle HTML etiketlerine (örneğin, `<h1>`, `<p>`, `<a>`, vb.) yönelik stil uygulamaları yer alır. Burada yapılan stil düzenlemeleri, tüm sayfa genelinde geçerlidir.**

**Kullanım Amacı:**

- Sayfadaki tüm HTML elemanlarına temel stiller uygulamak.
- Global stiller eklemek (örneğin, yazı tipi, renkler, arka planlar, vb.).

Örnek:

```css
@layer base {
  h1 {
    @apply text-3xl;
  }

  p {
    @apply font-bold;
  }
}
```

- **`h1 { @apply text-3xl; }`**: Tüm `<h1>` etiketlerine büyük bir yazı tipi boyutu (`text-3xl`) uygulanır.
- **`p { @apply font-bold; }`**: Tüm `<p>` etiketlerine kalın yazı tipi (`font-bold`) uygulanır.

Bu tür temel düzenlemeler sayfa genelinde geçerli olur ve stilinizi global bir düzeyde yönetmenizi sağlar.

---

## **@layer components**

**`@layer components`, daha karmaşık ve yeniden kullanılabilir stil bileşenlerini tanımlamak için kullanılır. Burada genellikle butonlar, kartlar, formlar, menüler gibi UI bileşenleri için stiller yazılır. Bu bileşenler, projenin farklı yerlerinde tekrar kullanılabilir.**

**Kullanım Amacı:**

- Yeniden kullanılabilir UI bileşenlerini stilize etmek.
- Projede benzer öğelere tutarlı bir stil vermek.

Örnek:

```css
@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }

  .btn-secondary {
    @apply py-2 px-4 border border-blue-500 text-blue-950 font-semibold rounded-lg shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
```

- **`.btn-primary { ... }`**: `btn-primary` sınıfı birincil butonları stilize eder. İçinde padding, arka plan rengi, metin rengi, font kalınlığı, yuvarlatılmış köşeler, gölge ve etkileşimli stiller gibi öğeler bulunur.
- **`.btn-secondary { ... }`**: `btn-secondary` sınıfı ikincil butonları stilize eder ve biraz daha farklı bir görünüm sunar (örneğin, sınır (border) ekler).

Bu stiller, projedeki her yerde aynı görünüme sahip butonlar oluşturmanıza olanak tanır. Böylece tutarlılık sağlanmış olur.

---

## **@layer utilities**

**`@layer utilities`, tek bir özellik için hızlı stil uygulamaları sağlayan yardımcı sınıfları içerir. Bu katman, daha önce `@tailwind utilities` ile dahil ettiğimiz sınıfları barındırır. Yardımcı sınıflar, elementin hemen hemen her özelliğini değiştirebilir (örneğin, padding, margin, renkler, hizalama, vb.) ve genellikle hızlı stil değişiklikleri için kullanılır.**

**Kullanım Amacı:**

- Çok daha belirgin, tek bir stil özelliği eklemek.
- Daha esnek ve hızlı bir şekilde stil uygulamak.

---

## **Katmanların Öncelik Sırası**

**Tailwind CSS'teki katmanlar, belirli bir sıralama ve öncelik taşır. Genellikle sıralama şu şekildedir:**

1. **`base`**: Temel stiller (HTML etiketlerine uygulanan ilk stiller).
2. **`components`**: Yeniden kullanılabilir bileşenler (butonlar, kartlar, vb.).
3. **`utilities`**: Yardımcı sınıflar (özellikle tek bir CSS özelliği).

&nbsp;

<**_[Alper BİLGİN](https://github.com/DREAXS)_**>
