# Render `{"title":"a"}`
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
    class="panel"
  >
    <h1>
      hi a
    </h1>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > .panel
INSERT: .panel > h1
UPDATE: .panel > h1::text@3 "" => "a"
```

# Update `{"title":"b"}`
```html
<main>
  <div
    class="panel"
  >
    <h1>
      hi b
    </h1>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: .panel > h1::text@3 "a" => "b"
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
    class="panel"
  >
    <h1>
      hi c
    </h1>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > .panel
INSERT: .panel > h1
UPDATE: .panel > h1::text@3 "" => "c"
```

# Update `{"title":"d"}`
```html
<main>
  <div
    class="panel"
  >
    <h1>
      hi d
    </h1>
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: .panel > h1::text@3 "c" => "d"
```
