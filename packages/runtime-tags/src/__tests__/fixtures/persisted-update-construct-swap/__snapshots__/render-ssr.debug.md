# Render `{"$global":{"persisted":true,"view":"a","topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="shell"
>
  <p
    class="a"
  >
    Panel A: sales report
  </p>
  <span
    class="a2"
  >
    alpha detail
  </span>
  <em
    class="a3"
  >
    always in stock
  </em>
</section>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="shell"
>
  <p
    class="a"
  >
    Panel A: sales report
  </p>
  <span
    class="a2"
  >
    alpha detail
  </span>
  <em
    class="a3"
  >
    always in stock
  </em>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"view":"b","topic":"sales"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="shell"
>
  <section
    class="b"
  >
    Panel B: sales report
  </section>
  <span
    class="b2"
  >
    beta detail
  </span>
</section>
```
## Change
```
INSERT: .shell > :is(.b, .b2)
REMOVE: .shell > p
REMOVE: .shell > span
REMOVE: .shell > em
```

# Update
```js
assert.equal(document.querySelector(selector)?.textContent, text);
assert.equal(
  document.querySelector("button.count").textContent,
  `clicked ${count}`,
);
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<section
  class="shell"
>
  <section
    class="b"
  >
    Panel B: sales report
  </section>
  <span
    class="b2"
  >
    beta detail
  </span>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"view":"a","topic":"growth"}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<section
  class="shell"
>
  <p
    class="a"
  >
    Panel A: growth report
  </p>
  <span
    class="a2"
  >
    alpha detail
  </span>
  <em
    class="a3"
  >
    always in stock
  </em>
</section>
```
## Change
```
INSERT: span + :is(.a, .a2, .a3)
REMOVE: .shell > section
REMOVE: .shell > span
```

# Update
```js
assert.equal(document.querySelector(selector)?.textContent, text);
assert.equal(
  document.querySelector("button.count").textContent,
  `clicked ${count}`,
);
```

# Update
```js
assert.equal(
document.querySelector("em.a3").textContent,
"always in stock",
  );
```
