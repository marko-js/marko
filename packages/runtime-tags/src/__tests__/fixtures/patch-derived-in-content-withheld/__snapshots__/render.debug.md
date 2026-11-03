# Render `{"label":"a"}`
```html
<div />
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <p>
    a
  </p>
</div>
<button>
  +
</button>
```
## Change
```
INSERT: div > p
UPDATE: div > p::text " " => "a"
```

# Update `{"label":"b"}`
```html
<div>
  <p>
    b
  </p>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div > p::text "a" => "b"
```
