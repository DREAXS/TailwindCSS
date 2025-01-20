# **TailwindCSS**
---

## *Tailwind CSS Nedir?*

**Tailwind CSS, web tasarımı için bir araçtır ama diğer araçlardan biraz farklı çalışır. Diğer araçlarda, genellikle hazır stil ve tasarım öğeleri (butonlar, kartlar, menüler gibi) verilir ve siz bunları seçip kullanırsınız. Ancak Tailwind CSS, bu tür hazır öğeler yerine, sadece temel stil özelliklerini (örneğin, renk, kenar boşlukları, yazı tipi, padding gibi) sağlayan küçük "yardımcı sınıflar" sunar.**

**Tailwind CSS, HTML sayfanızda her eleman için bu stil özelliklerini tek tek eklemenizi sağlar. Örneğin, bir butona kırmızı renk vermek istiyorsanız, HTML kodunda o butona "bg-red-500" gibi bir sınıf ekleyebilirsiniz. Böylece sadece o özellik üzerinde kontrol sahibi olursunuz ve daha özgürce tasarım yapabilirsiniz.**

---

## *Neden Tailwind CSS Kullanılır?*

### **Hızlı Tasarım**:

**Web sayfası tasarımı yaparken, hızlıca fikirlerinizi görmek istersiniz. Tailwind CSS, doğrudan HTML içinde stil eklemenizi sağlar. Yani tasarımınızı oluşturmak için ayrı bir CSS dosyası yazmak zorunda kalmazsınız, HTML kodu içinde hemen stil vererek hızlıca tasarımınızı ortaya çıkarabilirsiniz.**

### **Daha Az CSS Yazma**:

**Geleneksel yöntemlerle, her bir stil için uzun uzun CSS kodları yazmak gerekir. Ancak Tailwind CSS ile, sadece HTML elemanlarınıza bazı küçük sınıflar ekleyerek aynı tasarımı elde edebilirsiniz. Bu da çok daha kısa ve hızlı bir çalışma anlamına gelir.**

### **Özelleştirilebilirlik**:

**Tailwind CSS, tasarımınızı istediğiniz gibi özelleştirmenizi sağlar. Örneğin, bir renk paleti ya da yazı tipi seçtiniz ve bunları tüm projede aynı şekilde kullanmak istiyorsunuz. Tailwind CSS, "tailwind.config.js" adlı bir dosya ile bu gibi ayarları kolayca yapmanıza olanak tanır. Kendi renklerinizi, kenar boşluklarınızı, yazı tiplerinizi belirleyebilirsiniz.**

---

## *Tailwind CSS Kurulumu*

**Tailwind CSS'i projeye dahil etmek için birkaç farklı yöntem vardır.**

### **CDN ile Kurulum**

**Tailwind’i bir CDN üzerinden hızlıca projenize dahil edebilirsiniz. HTML dosyanızın `<head>` bölümüne şu satırı eklemeniz yeterlidir:**

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>
```

### **NPM ile Kurulum**
**Daha büyük projelerde veya özelleştirilmiş bir yapı istiyorsanız npm ile Tailwind’i kurabilirsiniz.**

__Adım adım nasıl kurulacağına dair talimatlar için lütfen aşağıdaki bağlantıya tıklayınız.__

[Tailwind NPM](https://github.com/DREAXS/TailwindCSS/blob/master/01-TailwindCSSProjeKurulumu/TailwindKurulumu.md)

---
