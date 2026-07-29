# Render `{"$global":{"persisted":true,"view":"panel"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<section
  class="shell"
>
  <div
    class="box"
    data-runs="1"
  >
    panel 0
  </div>
  <span
    class="note"
  >
    fresh
  </span>
</section>
```

# Update
```js
const box = document.querySelector("div.box");
assert.equal(box.dataset.runs, runs);
assert.equal(box.textContent, text);
assert.equal(document.querySelector("span.note")?.textContent, "fresh");
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
  clicked 1
</button>
<section
  class="shell"
>
  <div
    class="box"
    data-runs="1"
  >
    panel 1
  </div>
  <span
    class="note"
  >
    fresh
  </span>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
UPDATE: .box::text@6 "0" => "1"
```

# Update
```js
const box = document.querySelector("div.box");
assert.equal(box.dataset.runs, runs);
assert.equal(box.textContent, text);
assert.equal(document.querySelector("span.note")?.textContent, "fresh");
assert.equal(
  document.querySelector("button.count").textContent,
  `clicked ${count}`,
);
```

# Update `{"$global":{"persisted":true,"view":"about"}}`
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
    class="about"
  >
    about
  </p>
</section>
```
## Change
```
INSERT: .shell > .about
REMOVE: .shell > div
REMOVE: .shell > span
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"view":"panel"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<section
  class="shell"
>
  <div
    class="box"
    data-runs="1"
  >
    panel 1
  </div>
  <span
    class="note"
  >
    fresh
  </span>
</section>
```
## Change
```
INSERT: p + :is(.box, .note)
REMOVE: .shell > p
UPDATE: .note::text " " => "fresh"
UPDATE: .box[data-runs] null => "1"
```

# Update
```js
const box = document.querySelector("div.box");
assert.equal(box.dataset.runs, runs);
assert.equal(box.textContent, text);
assert.equal(document.querySelector("span.note")?.textContent, "fresh");
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
  <div
    class="box"
    data-runs="1"
  >
    panel 2
  </div>
  <span
    class="note"
  >
    fresh
  </span>
</section>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
UPDATE: .box::text@6 "1" => "2"
```

# Update
```js
const box = document.querySelector("div.box");
assert.equal(box.dataset.runs, runs);
assert.equal(box.textContent, text);
assert.equal(document.querySelector("span.note")?.textContent, "fresh");
assert.equal(
  document.querySelector("button.count").textContent,
  `clicked ${count}`,
);
```
