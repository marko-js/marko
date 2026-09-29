# Render `{"a":"1","b":"x"}`
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
    class="box"
  >
    <p>
      1:x
    </p>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > .box
INSERT: .box > p
UPDATE: .box > p::text " " => "1:x"
```

# Update `{"a":"2","b":"y"}`
```html
<main>
  <div
    class="box"
  >
    <p>
      2:y
    </p>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: .box > p::text "1:x" => "2:y"
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

# Update `{"a":"3","b":"z"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div
    class="box"
  >
    <p>
      3:z
    </p>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > .box
INSERT: .box > p
UPDATE: .box > p::text " " => "3:z"
```
