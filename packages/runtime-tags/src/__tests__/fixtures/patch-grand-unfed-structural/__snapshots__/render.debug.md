# Render `{"a":"1"}`
```html
<main>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div
    class="wrap"
  >
    <p>
      1
    </p>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > .wrap
UPDATE: .wrap > p::text " " => "1"
```

# Update `{"a":"2"}`
```html
<main>
  <div
    class="wrap"
  >
    <p>
      2
    </p>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: .wrap > p::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > div
```

# Update `{"a":"3"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div
    class="wrap"
  >
    <p>
      3
    </p>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > .wrap
UPDATE: .wrap > p::text " " => "3"
```
