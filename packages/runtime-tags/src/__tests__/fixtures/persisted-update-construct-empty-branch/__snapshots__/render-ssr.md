# Render `{"$global":{"persisted":true,"view":"panel","on":true}}`
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
    class="flip"
  >
    flip
  </button>
  <p
    class="msg"
  >
    msg 0
  </p>
  <span
    class="badge"
  >
    beta
  </span>
</section>
```

# Update
```js
assert.equal(document.querySelector("p.msg")?.textContent, msg);
assert.equal(document.querySelector("span.badge")?.textContent, "beta");
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
  <button
    class="flip"
  >
    flip
  </button>
  <p
    class="msg"
  >
    msg 1
  </p>
  <span
    class="badge"
  >
    beta
  </span>
</section>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
UPDATE: .msg::text@4 "0" => "1"
```

# Update `{"$global":{"persisted":true,"view":"about","on":true}}`
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
REMOVE: .shell > p
REMOVE: .shell > span
```

# Update update frame 1 of 2

# Update `{"$global":{"persisted":true,"view":"panel","on":false}}`
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
    class="flip"
  >
    flip
  </button>
  <span
    class="badge"
  >
    beta
  </span>
</section>
```
## Change
```
INSERT: p + :is(.flip, .badge)
REMOVE: .shell > p
UPDATE: .badge::text " " => "beta"
```

# Update
```js
assert.equal(document.querySelector("p.msg")?.textContent, msg);
assert.equal(document.querySelector("span.badge")?.textContent, "beta");
assert.equal(
  document.querySelector("button.count").textContent,
  `clicked ${count}`,
);
```

# Update
```js
document.querySelector("button.flip").click();
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
    class="flip"
  >
    flip
  </button>
  <p
    class="msg"
  >
    msg 1
  </p>
  <span
    class="badge"
  >
    beta
  </span>
</section>
```
## Change
```
INSERT: .flip + .msg
UPDATE: .msg::text@4 "" => "1"
```

# Update
```js
assert.equal(document.querySelector("p.msg")?.textContent, msg);
assert.equal(document.querySelector("span.badge")?.textContent, "beta");
assert.equal(
  document.querySelector("button.count").textContent,
  `clicked ${count}`,
);
```

# Update
```js
document.querySelector("button.flip").click();
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
    class="flip"
  >
    flip
  </button>
  <span
    class="badge"
  >
    beta
  </span>
</section>
```
## Change
```
REMOVE: .flip + p
```

# Update
```js
assert.equal(document.querySelector("p.msg")?.textContent, msg);
assert.equal(document.querySelector("span.badge")?.textContent, "beta");
assert.equal(
  document.querySelector("button.count").textContent,
  `clicked ${count}`,
);
```
