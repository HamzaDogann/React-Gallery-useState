 # useState Hook'u Nedir?

React'te, useState hook'u, fonksiyonel bileşenlerde state (durum) yönetmek için kullanılan bir fonksiyondur. Bu hook, bir bileşenin durumunu (state) tutmanızı sağlar ve bileşenin yeniden render edilmesini tetikler.

## Kullanımı

```jsx
import React, { useState } from 'react';

function Example() {
  // useState hook'u kullanarak bir state (durum) oluşturulur
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Sayaç: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Arttır
      </button>
    </div>
  );
}

```

## useState pratiği için yaptığım mini bir galeri uygulaması.
![Ekran görüntüsü 2024-02-01 184315](https://github.com/HamzaDogann/React-Gallery-useState/assets/93007915/60ee188e-a82a-4915-b1c2-ac5c3c183fe8)
![Ekran görüntüsü 2024-02-01 184413](https://github.com/HamzaDogann/React-Gallery-useState/assets/93007915/d9931fbd-a8d8-4e7e-8969-68321a672270)

