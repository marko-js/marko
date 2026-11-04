# Render `{"on":false,"n":"a"}`
```html
<main>
  <div
    n="a"
  />
</main>
```

# Update `{"on":true,"n":"a"}`
```html
<main>
  <div>
    <b>
      a
    </b>
  </div>
</main>
```
## Change
```
INSERT: main > div
REMOVE: main > div + div
UPDATE: main > div > b::text " " => "a"
```
