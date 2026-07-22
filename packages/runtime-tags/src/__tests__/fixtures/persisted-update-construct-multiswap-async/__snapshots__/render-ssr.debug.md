# Render `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"a"},{"id":2,"view":"b"}]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<ul>
  <span
    class="a"
  >
    A: x
  </span>
  <section
    class="b"
  >
    B: x
  </section>
</ul>
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
<ul>
  <span
    class="a"
  >
    A: x
  </span>
  <section
    class="b"
  >
    B: x
  </section>
</ul>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update update frame 1 of 2
```html
<button
  class="count"
>
  clicked 1
</button>
<ul>
  <section
    class="b"
  >
    B: x
  </section>
  <p
    class="loading"
  >
    loading…
  </p>
</ul>
```
## Change
```
INSERT: ul > .b
REMOVE: ul > span
REMOVE: .b + .b
INSERT: .b + .loading
```

# Update `{"$global":{"persisted":true,"topic":"x","items":[{"id":1,"view":"b"},{"id":2,"view":"c"}]}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<ul>
  <section
    class="b"
  >
    B: x
  </section>
  <p
    class="report"
  >
    report for x
  </p>
</ul>
```
## Change
```
INSERT: .b + .b
REMOVE: .b + .b
INSERT: .b + .report
REMOVE: .report + p
```

# Update
```js
const rows = document.querySelectorAll("ul > *");
_strict.default.equal(rows[0]?.outerHTML, '<section class="b">B: x</section>');
_strict.default.equal(document.querySelector("p.report")?.textContent, "report for x");
_strict.default.equal(document.querySelector("button.count").textContent, "clicked 1");
```
