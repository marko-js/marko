# Render `{"a":"x"}`
```html
<main>
  <button
    class="toggle"
  >
    +
  </button>
  <button
    class="bump"
  >
    0
  </button>
</main>
```

# Update
```js
document.querySelector(sel).click();
```
```html
<main>
  <div
    class="box"
  >
    <p>
      0:x
    </p>
  </div>
  <button
    class="toggle"
  >
    +
  </button>
  <button
    class="bump"
  >
    0
  </button>
</main>
```
## Change
```
INSERT: main > .box
INSERT: .box > p
UPDATE: .box > p::text " " => "0:x"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<main>
  <div
    class="box"
  >
    <p>
      1:x
    </p>
  </div>
  <button
    class="toggle"
  >
    +
  </button>
  <button
    class="bump"
  >
    1
  </button>
</main>
```
## Change
```
UPDATE: .bump::text "0" => "1"
UPDATE: .box > p::text "0:x" => "1:x"
```

# Update `{"a":"y"}`
```html
<main>
  <div
    class="box"
  >
    <p>
      1:y
    </p>
  </div>
  <button
    class="toggle"
  >
    +
  </button>
  <button
    class="bump"
  >
    1
  </button>
</main>
```
## Change
```
UPDATE: .box > p::text "1:x" => "1:y"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<main>
  <div
    class="box"
  >
    <p>
      2:y
    </p>
  </div>
  <button
    class="toggle"
  >
    +
  </button>
  <button
    class="bump"
  >
    2
  </button>
</main>
```
## Change
```
UPDATE: .bump::text "1" => "2"
UPDATE: .box > p::text "1:y" => "2:y"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<main>
  <button
    class="toggle"
  >
    +
  </button>
  <button
    class="bump"
  >
    2
  </button>
</main>
```
## Change
```
REMOVE: main > div
```

# Update `{"a":"z"}`

# Update
```js
document.querySelector(sel).click();
```
```html
<main>
  <div
    class="box"
  >
    <p>
      2:z
    </p>
  </div>
  <button
    class="toggle"
  >
    +
  </button>
  <button
    class="bump"
  >
    2
  </button>
</main>
```
## Change
```
INSERT: main > .box
INSERT: .box > p
UPDATE: .box > p::text " " => "2:z"
```
