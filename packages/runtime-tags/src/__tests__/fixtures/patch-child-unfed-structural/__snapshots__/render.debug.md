# Render `{"a":"1","b":"2"}`
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
  <p>
    1
  </p>
  <em>
    on
  </em>
  <p>
    2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > :is(p, p)
UPDATE: main > p:nth-of-type(1)::text " " => "1"
UPDATE: main > p:nth-of-type(2)::text " " => "2"
INSERT: main > p:nth-of-type(1) + em
```

# Update `{"a":"3","b":"4"}`
```html
<main>
  <p>
    3
  </p>
  <em>
    on
  </em>
  <p>
    4
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(1)::text "1" => "3"
UPDATE: main > p:nth-of-type(2)::text "2" => "4"
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
REMOVE: main > p
REMOVE: main > em
REMOVE: main > p
```

# Update `{"a":"5","b":"6"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    5
  </p>
  <em>
    on
  </em>
  <p>
    6
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > :is(p, p)
UPDATE: main > p:nth-of-type(1)::text " " => "5"
UPDATE: main > p:nth-of-type(2)::text " " => "6"
INSERT: main > p:nth-of-type(1) + em
```
