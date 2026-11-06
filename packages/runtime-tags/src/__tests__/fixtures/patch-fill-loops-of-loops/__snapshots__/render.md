# Render `{"rows":[{"id":"r1","cells":["a","b"]},{"id":"r2","cells":["c"]}],"suffix":"x"}`
```html
<main>
  <p>
    a:x@0
  </p>
  <p>
    b:x@0
  </p>
  <p>
    c:x@0
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
    a:x@1
  </p>
  <p>
    b:x@1
  </p>
  <p>
    c:x@1
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
UPDATE: main > p:nth-of-type(3)::text "c:x@0" => "c:x@1"
```

# Update `{"rows":[{"id":"r2","cells":["c"]},{"id":"r1","cells":["b","a"]}],"suffix":"y"}`
```html
<main>
  <p>
    c:y@1
  </p>
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
REMOVE: main > p:nth-of-type(3) + p
INSERT: main > p:nth-of-type(1) + p
REMOVE: main > p:nth-of-type(3) + p
INSERT: main > p
UPDATE: main > p:nth-of-type(3)::text "a:x@1" => "a:y@1"
UPDATE: main > p:nth-of-type(2)::text "b:x@1" => "b:y@1"
UPDATE: main > p:nth-of-type(1)::text "c:x@1" => "c:y@1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    c:y@2
  </p>
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
UPDATE: main > p:nth-of-type(3)::text "a:y@1" => "a:y@2"
UPDATE: main > p:nth-of-type(2)::text "b:y@1" => "b:y@2"
UPDATE: main > p:nth-of-type(1)::text "c:y@1" => "c:y@2"
```
