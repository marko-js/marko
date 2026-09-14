# Render `{"items":[{"id":"a","x":1}]}`
```html
<main>
  <p>
    a:x#0
  </p>
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
    a:x#1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "a:x#0" => "a:x#1"
```

# Update `{"items":[{"id":"a","x":1,"y":2},{"id":"b","z":3}]}`
```html
<main>
  <p>
    a:x+y#1
  </p>
  <p>
    b:z#1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p:nth-of-type(1) + p
UPDATE: main > p:nth-of-type(1)::text "a:x#1" => "a:x+y#1"
UPDATE: main > p:nth-of-type(2)::text " " => "b:z#1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    a:x+y#2
  </p>
  <p>
    b:z#2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(1)::text "a:x+y#1" => "a:x+y#2"
UPDATE: main > p:nth-of-type(2)::text "b:z#1" => "b:z#2"
```
