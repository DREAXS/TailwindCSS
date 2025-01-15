# **Tailwind CSS ile Layout**

Tailwind CSS, bir yardımcı sınıf (utility-first) CSS framework'üdür. Yani, web sayfalarını tasarlarken her bir stil özelliğini tek tek sınıflarla belirlemeye olanak tanır. Bu, geliştiricilerin hızlı bir şekilde özelleştirilebilir ve duyarlı (responsive) düzenler oluşturmasına yardımcı olur.

**Layout** ise, sayfa içeriğinin düzenini veya yapısını belirler. Tailwind CSS ile layout oluşturmak için çeşitli yardımcı sınıflar kullanılır. Örneğin:

- **Flexbox**: `flex`, `flex-row`, `flex-col`, `items-center`, `justify-between` gibi sınıflarla esnek düzenler oluşturabilirsiniz.
- **Grid**: `grid`, `grid-cols-3`, `gap-4` gibi sınıflarla ızgara (grid) yapıları oluşturabilirsiniz.
- **Spacing**: `p-4`, `m-4`, `space-x-4` gibi sınıflarla içerik arasındaki boşlukları ayarlayabilirsiniz.
- **Width/Height**: `w-full`, `h-screen`, `max-w-lg` gibi sınıflarla genişlik ve yükseklik ayarlamaları yapabilirsiniz.
- **Responsive**: `sm:`, `md:`, `lg:` gibi ön eklerle farklı ekran boyutlarına özel düzenler oluşturabilirsiniz.

Bu bölümde ele aldığımız bazı CSS sınıfları:

### A

- **align-{items/center}**: Öğeleri hizalar.

### B

- **bg-{color}-{number}**: Arka plan rengini belirtir. {color} renk adıdır (örneğin, red, gray) ve {number} tonu belirler (örneğin, 300, 800).
- **border-{number}**: Kenarlık kalınlığını belirtir.
- **box-border**: Padding ve border dahil öğe boyutları hesaplanır.
- **box-content**: Padding ve border hariç öğe boyutları hesaplanır.

### C

- **clear-both**: Hem soldan hem de sağdan gelen float'ları temizler (elemanı aşağıya yerleştirir).
- **container**: İçeriği ortalar.
- **collapse**: Elemanı gizler ve yer kaplamaz.

### F

- **flex**: Flexbox düzenini uygular.
- **flex-row**: Öğeleri yatay olarak sıralar.

### G

- **gap-{number}**: Öğeler arasına boşluk ekler.
- **grid**: Grid (ızgara) düzeni başlatır.
- **grid-cols-3**: 3 sütunlu grid düzeni oluşturur.

### H

- **h-{number}**: Yüksekliği belirler.
- **hover**: Hover durumunda özelliği değiştirir.

### I

- **inline-block**: Satır içi blok eleman.
- **invisible**: Elemanı görünmez yapar (boşluk bırakmaya devam eder).

### M

- **mb-{number}**: Alt margin (dış boşluk) ekler.
- **mt-{number}**: Üst margin (dış boşluk) ekler.
- **mx-auto**: Yatayda ortalar.
- **m-{number}**: Her tarafa margin (boşluk) ekler.

### O

- **object-contain**: Görüntüyü oranını koruyarak sığdırır.
- **object-cover**: Görüntüyü keserek tamamen kapsar.
- **object-fill**: Görüntüyü kutuyu tamamen dolduracak şekilde uzatır.
- **object-none**: Görüntüyü olduğu gibi bırakır.
- **object-top**: Görüntüyü üst kısmına hizalar.
- **object-bottom**: Görüntüyü alt kısmına hizalar.
- **object-left-top**: Görüntüyü sol üst köşeye hizalar.
- **object-right-bottom**: Görüntüyü sağ alt köşeye hizalar.

### P

- **p-{number}**: İçerideki padding (iç boşluk) miktarını ayarlar.
- **p-5**: İç boşluk 5 birim.

### R

- **rounded-full**: Tam yuvarlak köşeler oluşturur.

### S

- **sticky**: Elemanı, sayfa kaydırıldığında ekranda sabit tutar.
- **top-0**: Elemanı üst kısmına yapıştırır.
- **left-0**: Elemanı sol kısmına yapıştırır.

### T

- **text-{color}**: Yazı rengini belirtir.
- **text-center**: Yazıyı yatayda ortalar.
- **text-white**: Yazı rengini beyaz yapar.
- **text-red-600**: Kırmızı arka plan

### W

- **w-{number}**: Genişliği belirler.

### Z

- **z-{number}**: Z-index değeri belirler. (Örneğin, z-40, z-10, z-auto vb.)
  &nbsp;

<**_[Alper BİLGİN](https://github.com/DREAXS)_**>
