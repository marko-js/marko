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
INSERT: main > :is(::text(" "), hr)
INSERT: main > hr:nth-of-type(1) + :is(hr, ::text(" "))
INSERT: main > b
REMOVE: main > b:nth-of-type(1) + ::text(" ")
INSERT: main > hr:nth-of-type(2) + b
REMOVE: main > b:nth-of-type(2) + ::text(" ")
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
REMOVE: main > hr
REMOVE: main > hr
REMOVE: main > b
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
INSERT: main > :is(::text(" "), hr)
INSERT: main > hr:nth-of-type(1) + :is(hr, ::text(" "))
INSERT: main > b
REMOVE: main > b:nth-of-type(1) + ::text(" ")
INSERT: main > hr:nth-of-type(2) + b
REMOVE: main > b:nth-of-type(2) + ::text(" ")
```
