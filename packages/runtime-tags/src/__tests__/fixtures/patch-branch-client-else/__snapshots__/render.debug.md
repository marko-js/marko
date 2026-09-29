# Render `{"yes":"y1","no":"n1"}`
```html
<main>
  <h2>
    y1
  </h2>
  <i>
    n1!
  </i>
  <button>
    toggle
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h2>
    y1
  </h2>
  <b>
    y1
  </b>
  <button>
    toggle
  </button>
</main>
```
## Change
```
INSERT: main > h2 + b
REMOVE: main > b + i
UPDATE: main > b::text " " => "y1"
```

# Update `{"yes":"y2","no":"n2"}`
```html
<main>
  <h2>
    y2
  </h2>
  <b>
    y2
  </b>
  <button>
    toggle
  </button>
</main>
```
## Change
```
UPDATE: main > h2::text "y1" => "y2"
UPDATE: main > b::text "y1" => "y2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h2>
    y2
  </h2>
  <i>
    n2!
  </i>
  <button>
    toggle
  </button>
</main>
```
## Change
```
INSERT: main > h2 + i
REMOVE: main > i + b
UPDATE: main > i::text " " => "n2!"
```

# Update `{"yes":"y3","no":"n3"}`
```html
<main>
  <h2>
    y3
  </h2>
  <i>
    n3!
  </i>
  <button>
    toggle
  </button>
</main>
```
## Change
```
UPDATE: main > h2::text "y2" => "y3"
UPDATE: main > i::text "n2!" => "n3!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h2>
    y3
  </h2>
  <b>
    y3
  </b>
  <button>
    toggle
  </button>
</main>
```
## Change
```
INSERT: main > h2 + b
REMOVE: main > b + i
UPDATE: main > b::text " " => "y3"
```
