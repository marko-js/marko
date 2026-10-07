# Render `{"a":true,"b":true}`
```html
<div>
  <p />
  <span />
</div>
<button>
  set
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
  <span>
    b
  </span>
</div>
<button>
  set
</button>
```
## Change
```
INSERT: div > p::text("a")
INSERT: div > span::text("b")
```
