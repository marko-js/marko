# Render `{"show":false}`

# Update `{"show":true}`
```html
<div>
  <p>
    a
  </p>
  <button>
    +
  </button>
</div>
```
## Change
```
INSERT: div
UPDATE: div > p::text "" => "a"
```

# Update
```js
d.querySelector("button").click();
```
```html
<div>
  <p>
    a,b
  </p>
  <button>
    +
  </button>
</div>
```
## Change
```
UPDATE: div > p::text "a" => "a,b"
```
