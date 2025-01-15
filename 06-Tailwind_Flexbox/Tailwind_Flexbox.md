**# **Tailwind CSS ile Flexbox\*\*\*\*

Tailwind CSS ile **Flexbox** kullanımı, esnek ve düzenli bir layout (düzen) oluşturmanıza olanak tanır. İşte **Flexbox** kavramının kısa ve madde madde açıklamaları:

### 1. **Flex Container (Flex Konteyner)**

- **`flex`**: Flexbox düzenini başlatır, bir öğeyi flex konteyner yapar.
- **`inline-flex`**: Flexbox düzenini satır içi (inline) olarak başlatır.

### 2. **Flex Direction (Yön Belirleme)**

- **`flex-row`**: Öğeleri yatayda sıralar (varsayılan).
- **`flex-col`**: Öğeleri dikeyde sıralar.
- **`flex-row-reverse`**: Öğeleri ters sırayla yatayda sıralar.
- **`flex-col-reverse`**: Öğeleri ters sırayla dikeyde sıralar.

### 3. **Flex Wrap (Sarmalama)**

- **`flex-wrap`**: Öğelerin sarmasını sağlar (satıra taşarsa yeni satıra geçer).
- **`flex-nowrap`**: Öğelerin sarmasına izin vermez, tek satırda kalır.
- **`flex-wrap-reverse`**: Öğeleri ters sırayla sarar.

### 4. **Justify Content (İçerik Hizalama)**

- **`justify-start`**: Öğeleri konteynerin başına hizalar.
- **`justify-center`**: Öğeleri konteynerin ortasına hizalar.
- **`justify-end`**: Öğeleri konteynerin sonuna hizalar.
- **`justify-between`**: Öğeleri eşit aralıklarla hizalar.
- **`justify-around`**: Öğeler arasına eşit boşluk bırakır, kenarlarda yarım boşluk kalır.
- **`justify-evenly`**: Öğeler arasında eşit boşluk bırakır, kenarlarda da eşit boşluk olur.

### 5. **Align Items (Dikey Hizalama)**

- **`items-start`**: Öğeleri konteynerin üstüne hizalar.
- **`items-center`**: Öğeleri konteynerin ortasına hizalar.
- **`items-end`**: Öğeleri konteynerin altına hizalar.
- **`items-baseline`**: Öğeleri satır yüksekliğine göre hizalar.
- **`items-stretch`**: Öğeleri dikey olarak gerer (varsayılan).

### 6. **Align Self (Bireysel Öğelerin Dikey Hizalaması)**

- **`self-auto`**: Varsayılan hizalamayı kullanır.
- **`self-start`**: Öğeyi üst kısma hizalar.
- **`self-center`**: Öğeyi dikeyde ortalar.
- **`self-end`**: Öğeyi alt kısma hizalar.
- **`self-stretch`**: Öğeyi dikey olarak gerer.

### 7. **Flex Grow (Büyüme)**

- **`grow`**: Öğenin mevcut boş alanı eşit şekilde büyütmesine olanak sağlar.
- **`grow-0`**: Öğenin büyümesini engeller.

### 8. **Flex Shrink (Küçülme)**

- **`shrink`**: Öğenin küçülmesine izin verir.
- **`shrink-0`**: Öğenin küçülmesini engeller.

### 9. **Flex Basis (Başlangıç Boyutu)**

- **`basis-0`**: Öğenin başlangıç boyutunu 0 yapar.
- **`basis-auto`**: Öğenin başlangıç boyutunu içeriğine göre belirler.
- **`basis-1/2`**, **`basis-1/3`**: Öğenin başlangıç boyutunu belirli bir orana ayarlar (örneğin, 1/2, 1/3 vb).

### 10. **Order (Sıra)**

- **`order-{n}`**: Öğenin sırasını belirler. Varsayılan sıra `0`'dır.
- **`order-1`**, **`order-2`** vb: Öğenin sırasını değiştirebilirsiniz.

### 11. **Gap (Boşluklar)**

- **`gap-{size}`**: Flex öğeleri arasına boşluk ekler. Örneğin, **`gap-4`** 1rem boşluk bırakır.
