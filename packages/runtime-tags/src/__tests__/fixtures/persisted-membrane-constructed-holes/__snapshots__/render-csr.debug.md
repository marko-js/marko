# Render `{"show":false,"title":"T1","note":"N1","title2":"U1","note2":"M1","$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
```

# Update `{"show":true,"title":"T2","note":"N2","title2":"U2","note2":"M2","$global":{"persisted":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="arrived"
>
  <button
    class="inner"
  >
    inner
  </button>
  <h3
    class="card-title"
  >
    T2
  </h3>
  <p
    class="card-note"
  >
    N2
  </p>
  <h3
    class="card-title"
  >
    U2
  </h3>
  <p
    class="card-note"
  >
    M2
  </p>
</section>
```
## Change
```
INSERT: .count + .arrived
UPDATE: .arrived > h3:nth-of-type(1)::text " " => "T2"
UPDATE: .arrived > p:nth-of-type(1)::text " " => "N2"
UPDATE: .arrived > h3:nth-of-type(2)::text " " => "U2"
UPDATE: .arrived > p:nth-of-type(2)::text " " => "M2"
```

# Update `{"show":true,"title":"T2","note":"N2","title2":"U2","note2":"M2","$global":{"persisted":true}}`

# Update
```js
_strict.default.deepEqual(texts("h3.card-title")(document), ["T2", "U2"]);
_strict.default.deepEqual(texts("p.card-note")(document), ["N2", "M2"]);
_strict.default.equal(document.querySelector("section.arrived").childElementCount, 5);
```

# Update
```js
document.querySelector("button.inner").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="arrived"
>
  <button
    class="inner"
  >
    inner
  </button>
  <h3
    class="card-title"
  >
    T2
  </h3>
  <p
    class="card-note"
  >
    N2
  </p>
  <h3
    class="card-title"
  >
    U2
  </h3>
  <p
    class="card-note"
  >
    M2
  </p>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update
```js
_strict.default.equal(document.querySelector("button.count").textContent, "clicked 1");
```
