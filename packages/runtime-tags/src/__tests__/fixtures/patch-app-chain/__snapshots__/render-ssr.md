# Render `{"page":0}`
```html
<header>
  <button>
    open
  </button>
</header>
<main>
  <button
    class="a"
  >
    a:0
  </button>
</main>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<header>
  <button>
    close
  </button>
</header>
<main>
  <button
    class="a"
  >
    a:0
  </button>
</main>
```
## Change
```
UPDATE: header > button::text "open" => "close"
```

# Update `{"page":1}`
```html
<header>
  <button>
    close
  </button>
</header>
<main>
  <button
    class="b"
  >
    b:0
  </button>
</main>
```
## Change
```
INSERT: main > .b
REMOVE: .b + button
```

# Update
```js
document.querySelector(selector).click();
```
```html
<header>
  <button>
    close
  </button>
</header>
<main>
  <button
    class="b"
  >
    b:1
  </button>
</main>
```
## Change
```
UPDATE: .b::text@2 "0" => "1"
```

# Update `{"page":0}`
```html
<header>
  <button>
    close
  </button>
</header>
<main>
  <button
    class="a"
  >
    a:0
  </button>
</main>
```
## Change
```
INSERT: main > .a
REMOVE: .a + button
```

# Update
```js
document.querySelector(selector).click();
```
```html
<header>
  <button>
    close
  </button>
</header>
<main>
  <button
    class="a"
  >
    a:1
  </button>
</main>
```
## Change
```
UPDATE: .a::text@2 "0" => "1"
```
