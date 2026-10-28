# Render `{"label":"a"}`
```html
<div>
  <p>
    a0
  </p>
</div>
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
    a1
  </p>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div > p::text "a0" => "a1"
```

# Update `{"label":"b"}`
```html
<div>
  <p>
    b1
  </p>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div > p::text "a1" => "b1"
```
