# Render
```html
<button>
  add
</button>
<div>
  5
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  add
</button>
<div>
  5
</div>
<div>
  5
</div>
```
## Change
```
INSERT: div:nth-of-type(1) + div
INSERT: div:nth-of-type(2)::text("5")
UPDATE: div:nth-of-type(2)::text " " => "5"
```
