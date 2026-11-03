# Render `{"show":true}`
```html
<main>
  <div>
    <p>
      Y!#0
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
      Y!#1
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
UPDATE: main > div > p::text "Y!#0" => "Y!#1"
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
      Y!#1
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
UPDATE: main > div > p::text " " => "Y!#1"
```

# Update
```js
document.querySelector("#c").click();
```
```html
<main>
  <div>
    <p>
      Y!#2
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
UPDATE: main > div > p::text "Y!#1" => "Y!#2"
```

# Update
```js
document.querySelector("#p").click();
```
```html
<main>
  <div>
    <p>
      X!#2
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
UPDATE: main > div > p::text "Y!#2" => "X!#2"
```
