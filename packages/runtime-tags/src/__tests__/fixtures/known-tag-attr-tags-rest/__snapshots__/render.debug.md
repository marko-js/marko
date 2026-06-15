# Render
```html
<button>
  toggle
</button>
<h1>
  t
</h1>
<div>
  row 1
</div>
<div>
  row 2
</div>
<div>
  other 1
</div>
<div>
  cond 1
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<h1>
  t
</h1>
<div>
  row 1
</div>
<div>
  row 2
</div>
<div>
  other 1
</div>
<div>
  cond 2
</div>
```
## Change
```
UPDATE: div:nth-of-type(4)::text@5 "1" => "2"
```
