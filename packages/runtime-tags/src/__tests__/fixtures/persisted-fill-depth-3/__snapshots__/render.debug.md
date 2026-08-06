# Render `{"show":true,"inner":true,"items":["a","b"],"suffix":"x"}`
```html
<main>
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

# Update `{"show":true,"inner":true,"items":["b","a"],"suffix":"y"}`
```html
<main>
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
REMOVE: main > p:nth-of-type(2) + p
INSERT: main > p
UPDATE: main > p:nth-of-type(2)::text "a:x@1" => "a:y@1"
UPDATE: main > p:nth-of-type(1)::text "b:x@1" => "b:y@1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
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

# Update `{"show":true,"inner":false,"items":["b","a"],"suffix":"z"}`
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
REMOVE: main > p
```
