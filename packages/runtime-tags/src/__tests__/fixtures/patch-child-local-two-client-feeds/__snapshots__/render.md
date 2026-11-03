# Render `{"show":true}`
```html
<main>
  <div>
    <p>
      YB!#0
    </p>
    <button
      id="c"
    >
      c
    </button>
  </div>
  <button
    id="p"
  >
    p
  </button>
</main>
```

# Update
```js
document.querySelector("#c").click();
```
```html
<main>
  <div>
    <p>
      YB!#1
    </p>
    <button
      id="c"
    >
      c
    </button>
  </div>
  <button
    id="p"
  >
    p
  </button>
</main>
```
## Change
```
UPDATE: main > div > p::text "YB!#0" => "YB!#1"
```

# Update `{"show":false}`
```html
<main>
  <div>
    <button
      id="c"
    >
      c
    </button>
  </div>
  <button
    id="p"
  >
    p
  </button>
</main>
```
## Change
```
REMOVE: main > div > p
```

# Update `{"show":true}`
```html
<main>
  <div>
    <p>
      YB!#1
    </p>
    <button
      id="c"
    >
      c
    </button>
  </div>
  <button
    id="p"
  >
    p
  </button>
</main>
```
## Change
```
INSERT: main > div > p
UPDATE: main > div > p::text " " => "YB!#1"
```

# Update
```js
document.querySelector("#c").click();
```
```html
<main>
  <div>
    <p>
      YB!#2
    </p>
    <button
      id="c"
    >
      c
    </button>
  </div>
  <button
    id="p"
  >
    p
  </button>
</main>
```
## Change
```
UPDATE: main > div > p::text "YB!#1" => "YB!#2"
```

# Update
```js
document.querySelector("#p").click();
```
```html
<main>
  <div>
    <p>
      XA!#2
    </p>
    <button
      id="c"
    >
      c
    </button>
  </div>
  <button
    id="p"
  >
    p
  </button>
</main>
```
## Change
```
UPDATE: main > div > p::text "YB!#2" => "XA!#2"
```
