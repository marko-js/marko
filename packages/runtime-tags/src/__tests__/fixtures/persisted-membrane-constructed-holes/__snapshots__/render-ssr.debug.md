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
INSERT: .inner + :is(h3, p)
INSERT: .arrived > p:nth-of-type(1) + :is(h3, p)
```

# Update
```js
assert.deepEqual(texts("h3.card-title")(document), ["T2", "U2"]);
assert.deepEqual(texts("p.card-note")(document), ["N2", "M2"]);
assert.equal(
  document.querySelector("section.arrived").childElementCount,
  5,
);
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
assert.equal(;
document.querySelector("button.count").textContent,
"clicked 1",
  )
```
