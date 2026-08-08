# Render `{"title":"a"}`
```html
<main>
  <div
    class="box"
  >
    <p>
      t:a
    </p>
  </div>
  <button>
    +
  </button>
</main>
```

# Update `{"title":"b"}`
```html
<main>
  <div
    class="box"
  >
    <p>
      t:b
    </p>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: .box > p::text "t:a" => "t:b"
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

# Update `{"title":"c"}`

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
      t:c
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
UPDATE: .box > p::text " " => "t:c"
```
