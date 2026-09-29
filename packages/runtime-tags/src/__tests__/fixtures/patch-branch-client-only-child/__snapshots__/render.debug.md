# Render `{"title":"a","label":"l1"}`
```html
<main>
  <div />
  <span>
    l1
  </span>
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
  <div>
    <p>
      a
    </p>
  </div>
  <span>
    l1
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > div > p
UPDATE: main > div > p::text " " => "a"
```

# Update `{"title":"b","label":"l2"}`
```html
<main>
  <div>
    <p>
      b
    </p>
  </div>
  <span>
    l2
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > span::text "l1" => "l2"
UPDATE: main > div > p::text "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div />
  <span>
    l2
  </span>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > div > p
```
