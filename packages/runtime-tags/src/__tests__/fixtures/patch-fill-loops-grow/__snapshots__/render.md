# Render `{"rows":[{"id":"r1","cells":["a"]}],"suffix":"x"}`
```html
<main>
  <p>
    a:x@0
  </p>
  <button>
    +
  </button>
</main>
```

# Update `{"rows":[{"id":"r1","cells":["a","b"]}],"suffix":"x"}`
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
## Change
```
INSERT: main > p:nth-of-type(1) + p
UPDATE: main > p:nth-of-type(2)::text " " => "b:x@0"
```
