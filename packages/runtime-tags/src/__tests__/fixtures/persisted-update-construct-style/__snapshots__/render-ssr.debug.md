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
  <button
    class="tap"
  >
    tap 0
  </button>
  <button
    class="grow"
  >
    grow
  </button>
  <div
    class="tinted"
  >
    styled
  </div>
</section>
```

# Update
```js
const style = document.querySelector("style");
assert.ok(style.className, "style has its scoped class");
for (const decl of decls) {
  assert.ok(
style.textContent.includes(decl),
`style contains ${decl} (got: ${style.textContent})`,
  );
  }
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
  <button
    class="tap"
  >
    tap 0
  </button>
  <button
    class="grow"
  >
    grow
  </button>
  <div
    class="tinted"
  >
    styled
  </div>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
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
REMOVE: .shell > button
REMOVE: .shell > button
REMOVE: .shell > div
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
  <button
    class="tap"
  >
    tap 0
  </button>
  <button
    class="grow"
  >
    grow
  </button>
  <div
    class="tinted"
  >
    styled
  </div>
</section>
```
## Change
```
INSERT: p + :is(.tap, .grow, .tinted)
REMOVE: .shell > p
```

# Update
```js
const style = document.querySelector("style");
assert.ok(style.className, "style has its scoped class");
for (const decl of decls) {
  assert.ok(
style.textContent.includes(decl),
`style contains ${decl} (got: ${style.textContent})`,
  );
  }
```

# Update
```js
document.querySelector(selector).click();
```

# Update
```js
const style = document.querySelector("style");
assert.ok(style.className, "style has its scoped class");
for (const decl of decls) {
  assert.ok(
style.textContent.includes(decl),
`style contains ${decl} (got: ${style.textContent})`,
  );
  }
```
