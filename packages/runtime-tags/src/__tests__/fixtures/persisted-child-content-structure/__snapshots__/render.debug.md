# Render `{"show":true,"title":"a"}`
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
      t:a
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
UPDATE: .box > p::text " " => "t:a"
```

# Update `{"show":false,"title":"a"}`
```html
<main>
  <div
    class="box"
  />
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: .box > p
```

# Update `{"show":true,"title":"b"}`
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
INSERT: .box > p
UPDATE: .box > p::text " " => "t:b"
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
