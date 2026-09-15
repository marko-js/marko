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
REMOVE: main > button
INSERT: main > .b
UPDATE: .b::text@2 "" => "0"
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
REMOVE: main > button
INSERT: main > .a
UPDATE: .a::text@2 "" => "0"
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
