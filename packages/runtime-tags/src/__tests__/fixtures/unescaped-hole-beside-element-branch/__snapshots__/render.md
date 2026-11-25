# Render `{"html":"<b>a</b>"}`
```html
<main>
  <button>
    t
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <b>
    a
  </b>
  <hr />
  <hr />
  <b>
    a
  </b>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main::text(" ")
REMOVE: main::text(" ")
INSERT: main > b:nth-of-type(1)
INSERT: main::text(" "), main > hr:nth-of-type(1)
INSERT: main > hr:nth-of-type(2), main::text(" ")
INSERT: main > b:nth-of-type(2)
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main > b
REMOVE: main > b
REMOVE: main > hr
REMOVE: main > hr
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <b>
    a
  </b>
  <hr />
  <hr />
  <b>
    a
  </b>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main::text(" ")
REMOVE: main::text(" ")
INSERT: main > b:nth-of-type(1)
INSERT: main::text(" "), main > hr:nth-of-type(1)
INSERT: main > hr:nth-of-type(2), main::text(" ")
INSERT: main > b:nth-of-type(2)
```
