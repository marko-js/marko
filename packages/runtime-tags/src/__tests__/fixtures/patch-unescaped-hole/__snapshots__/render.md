# Render `{"html":"<b>a</b>"}`
```html
<main>
  <div>
    <b>
      a
    </b>
  </div>
  <button>
    +
  </button>
</main>
```

# Update `{"html":"<i>b</i> c"}`
```html
<main>
  <div>
    <i>
      b
    </i>
     c
  </div>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > div > :is(i, ::text(" c"))
REMOVE: main > div::text + b
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <div>
    <i>
      b
    </i>
     c
  </div>
  <p>
    <i>
      b
    </i>
     c
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > div + p
INSERT: main > p > :is(i, ::text(" c"))
REMOVE: main > p::text + ::text(" ")
```

# Update `{"html":"<b>d</b>"}`
```html
<main>
  <div>
    <b>
      d
    </b>
  </div>
  <p>
    <b>
      d
    </b>
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > div > b
REMOVE: main > div > b + i
REMOVE: main > div > b + ::text(" c")
INSERT: main > p > b
REMOVE: main > p > b + i
REMOVE: main > p > b + ::text(" c")
```
