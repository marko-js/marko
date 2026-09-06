# Render `{"show":true,"items":["a","b"],"suffix":"x"}`
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

# Update `{"show":true,"items":["a","b"],"suffix":"y"}`
```html
<main>
  <p>
    a:y@1
  </p>
  <p>
    b:y@1
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(1)::text "a:x@1" => "a:y@1"
UPDATE: main > p:nth-of-type(2)::text "b:x@1" => "b:y@1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    a:y@2
  </p>
  <p>
    b:y@2
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p:nth-of-type(1)::text "a:y@1" => "a:y@2"
UPDATE: main > p:nth-of-type(2)::text "b:y@1" => "b:y@2"
```
