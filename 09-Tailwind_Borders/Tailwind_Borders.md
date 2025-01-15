# **Tailwind CSS Borders**

### **1. Border (Kenarlık) ile İlgili Sınıflar:**

Tailwind CSS'deki **border** (kenarlık) sınıfları, öğelere kenarlıklar eklemeyi sağlayan utility sınıflarını içerir. Bu sınıflar, öğelerin dış hatlarını kontrol etmek için kullanılır. Bu özellik sayesinde tasarımlarınıza net sınırlar ekleyebilir ve öğeleri belirginleştirebilirsiniz.

#### **Border ile ilgili temel sınıflar:**

1.  **`border`**: Bir öğeye varsayılan bir kenarlık ekler. Kenarlık genişliği 1px olarak ayarlanır.

    - **Örnek**: `border`

2.  **`border-{color}`**: Kenarlık rengini ayarlamak için kullanılır.

    - **Örnekler**:
      - `border-red-500`: Kırmızı renkte kenarlık.
      - `border-blue-300`: Mavi renkte kenarlık.

3.  **`border-{width}`**: Kenarlığın kalınlığını ayarlamak için kullanılır.

    - **Örnekler**:
      - `border-2`: Kenarlık genişliği 2px.
      - `border-4`: Kenarlık genişliği 4px.
      - `border-8`: Kenarlık genişliği 8px.
      - `border-[value]`: Özel bir değer ile kenarlık genişliği. Örneğin, `border-[3px]`.

4.  **`border-{style}`**: Kenarlık stilini ayarlamak için kullanılır. Öne çıkan stil seçenekleri şunlardır:

    - `border-solid`: Katı kenarlık (varsayılan stil).
    - `border-dashed`: Kesikli kenarlık.
    - `border-dotted`: Noktalı kenarlık.
    - `border-double`: Çift kenarlık.
    - `border-none`: Kenarlık yok.

5.  **`border-{side}`**: Kenarlığı sadece belirli bir tarafa uygulamak için kullanılır. `side` yerine kullanılan bazı seçenekler:

    - `border-t`: Üst kenarlık.
    - `border-r`: Sağ kenarlık.
    - `border-b`: Alt kenarlık.
    - `border-l`: Sol kenarlık.
    - `border-x`: Hem sol hem sağ kenarlık.
    - `border-y`: Hem üst hem alt kenarlık.

6.  **`rounded-{size}`**: Kenarlık köşe yuvarlama sınıfıdır. Köşe yuvarlama, öğenin köşelerini yumuşatmak için kullanılır.

    - **Örnekler**:
      - `rounded`: Varsayılan yuvarlama.
      - `rounded-sm`: Küçük yuvarlama.
      - `rounded-md`: Orta büyüklükte yuvarlama.
      - `rounded-lg`: Büyük yuvarlama.
      - `rounded-full`: Tam yuvarlak köşeler (dairesel şekil).
      - `rounded-t` / `rounded-r` / `rounded-b` / `rounded-l`: Belirli köşelere yuvarlama eklemek.

7.  **`border-collapse` ve `border-separate`**: Bu, tablo (table) öğelerinde kenarlıkların nasıl görüneceğini ayarlayan sınıflardır.

    - `border-collapse`: Tablodaki kenarlıkların birleşik (tek) görünmesini sağlar.
    - `border-separate`: Tablo hücrelerinin kenarlıklarının ayrılmış şekilde görünmesini sağlar.

---

### **2. Divide (Bölme) ile İlgili Sınıflar:**

`divide` sınıfı, bir öğeyi bölmek için kullanılır. Genellikle öğe içindeki öğelere kenarlıklar ekler. Bu, özellikle grid ve flex düzenlerinde kullanılır.

#### **Divide ile ilgili sınıflar:**

1.  **`divide-x` / `divide-y`**: Yatay veya dikey olarak öğeler arasına bölme kenarlıkları ekler.

    - **Örnekler**:
      - `divide-x-4`: Yatayda her öğe arasına 4px'lik bir kenarlık ekler.
      - `divide-y-2`: Dikeyde her öğe arasına 2px'lik bir kenarlık ekler.

2.  **`divide-{color}`**: Bölme kenarlığının rengini ayarlamak için kullanılır.

    - **Örnekler**:
      - `divide-red-500`: Bölme kenarlığının rengi kırmızı olur.
      - `divide-gray-300`: Bölme kenarlığının rengi gri olur.

3.  **`divide-{style}`**: Bölme kenarlığının stilini belirler.

    - **Örnekler**:
      - `divide-solid`: Katı bir bölme kenarlığı.
      - `divide-dashed`: Kesikli bir bölme kenarlığı.

4.  **`divide-{side}`**: Bölme kenarlığını sadece bir yönde uygulamak için kullanılır.

    - **Örnekler**:
      - `divide-x`: Yalnızca yatay bölme kenarlığı ekler.
      - `divide-y`: Yalnızca dikey bölme kenarlığı ekler.

---

### **3. Outline (Çerçeve) ile İlgili Sınıflar:**

`outline` sınıfları, öğelere kenarlık dışında ek bir çerçeve eklemek için kullanılır. Bu, genellikle etkileşimli öğelere (butonlar, girişler vb.) odaklanıldığında görünür.

#### **Outline ile ilgili sınıflar:**

1.  **`outline`**: Varsayılan bir dış çerçeve ekler.

    - **Örnek**: `outline`

2.  **`outline-{color}`**: Çerçeve rengini ayarlamak için kullanılır.

    - **Örnekler**:
      - `outline-red-500`: Kırmızı renkli bir çerçeve.
      - `outline-green-500`: Yeşil renkli bir çerçeve.

3.  **`outline-{width}`**: Çerçeve genişliğini ayarlamak için kullanılır.

    - **Örnekler**:
      - `outline-1`: 1px genişliğinde çerçeve.
      - `outline-2`: 2px genişliğinde çerçeve.

4.  **`outline-{style}`**: Çerçeve stilini belirler.

    - **Örnekler**:
      - `outline-solid`: Katı çerçeve.
      - `outline-dashed`: Kesikli çerçeve.

5.  **`outline-offset-{value}`**: Çerçevenin öğeden ne kadar uzak olacağını belirler.

    - **Örnek**: `outline-offset-4`: Çerçeve, öğeden 4px uzaklıkta olacak.

---

### **4. Ring (Halka) ile İlgili Sınıflar:**

`ring` sınıfları, öğelere dış kenarlık yerine bir halka (halo) efekti eklemek için kullanılır. Bu, öğeye odaklandığında veya belirli bir durum meydana geldiğinde dışarıda bir ışık halkası oluşturur.

#### **Ring ile ilgili sınıflar:**

1.  **`ring`**: Bir öğeye halka efekti ekler.

    - **Örnek**: `ring`

2.  **`ring-{width}`**: Halka genişliğini belirler.

    - **Örnekler**:
      - `ring-2`: Halka genişliği 2px.
      - `ring-4`: Halka genişliği 4px.

3.  **`ring-{color}`**: Halka rengini ayarlar.

    - **Örnekler**:
      - `ring-blue-500`: Mavi renkli halka.
      - `ring-red-300`: Kırmızı renkli halka.

4.  **`ring-offset-{value}`**: Halka ile öğe arasındaki mesafeyi belirler.

    - **Örnekler**:
      - `ring-offset-2`: Halka ile öğe arasında 2px mesafe.

5.  **`focus:ring`**: Odaklandığında halka efektini etkinleştirir.

    - **Örnek**: `focus:ring-4 focus:ring-blue-500`: Odaklandığında 4px genişliğinde mavi halka ekler.

&nbsp;

<**_[Alper BİLGİN](https://github.com/DREAXS)_**>
