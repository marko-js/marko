# Render `{"heading":"H","rows":[{"id":"r1","cells":["a","b"]}],"suffix":"x"}`
```html
<main>
  <h1>
    H
  </h1>
  <p>
    a:x@0
  </p>
  <p>
    b:x@0
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
  <h1>
    H
  </h1>
  <p>
    a:x@1
  </p>
  <p>
    b:x@1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(1)::text "a:x@0" => "a:x@1"
UPDATE: main > p:nth-of-type(2)::text "b:x@0" => "b:x@1"
```

# Update `{"heading":"H","rows":[{"id":"r1","cells":["b","a"]}],"suffix":"y"}`
```html
<main>
  <h1>
    H
  </h1>
  <p>
    b:y@1
  </p>
  <p>
    a:y@1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > h1::text "H" => "H"
REMOVE: main > p:nth-of-type(2) + p
INSERT: main > h1 + p
UPDATE: main > p:nth-of-type(2)::text "a:x@1" => "a:y@1"
UPDATE: main > p:nth-of-type(1)::text "b:x@1" => "b:y@1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    H
  </h1>
  <p>
    b:y@2
  </p>
  <p>
    a:y@2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(2)::text "a:y@1" => "a:y@2"
UPDATE: main > p:nth-of-type(1)::text "b:y@1" => "b:y@2"
```
