# Render
```html
<div>
  <span>
    S
  </span>
</div>
<div>
  helloab
</div>
<button>
  drop
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <span>
    S
  </span>
</div>
<div>
  hellob
</div>
<button>
  drop
</button>
```
## Change
```
UPDATE: div:nth-of-type(2)::text@5 "a" => "b"
REMOVE: div:nth-of-type(2)::text@5 + ::text("b")
```
