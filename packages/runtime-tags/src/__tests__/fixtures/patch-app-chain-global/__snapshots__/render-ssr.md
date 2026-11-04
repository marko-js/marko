# Render `{"page":0,"$global":{"search":["",false]}}`
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

# Update `{"page":1,"$global":{"search":["a",false]}}`
```html
<header>
  <button>
    open
  </button>
</header>
<main>
  <button
    class="b"
  >
    b:a::0
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
    open
  </button>
</header>
<main>
  <button
    class="b"
  >
    b:a::1
  </button>
</main>
```
## Change
```
UPDATE: .b::text@5 "0" => "1"
```

# Update `{"page":1,"$global":{"search":["b",true]}}`
```html
<header>
  <button>
    open
  </button>
</header>
<main>
  <button
    class="b"
  >
    b:b:!:1
  </button>
</main>
```
## Change
```
UPDATE: .b::text@2 "a" => "b"
UPDATE: .b::text@4 "" => "!"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<header>
  <button>
    open
  </button>
</header>
<main>
  <button
    class="b"
  >
    b:b:!:2
  </button>
</main>
```
## Change
```
UPDATE: .b::text@6 "1" => "2"
```

# Update `{"page":0,"$global":{"search":["",false]}}`
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
## Change
```
INSERT: main > .a
REMOVE: .a + button
```

# Update `{"page":1,"$global":{"search":["c",false]}}`
```html
<header>
  <button>
    open
  </button>
</header>
<main>
  <button
    class="b"
  >
    b:c::0
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
    open
  </button>
</header>
<main>
  <button
    class="b"
  >
    b:c::1
  </button>
</main>
```
## Change
```
UPDATE: .b::text@5 "0" => "1"
```
