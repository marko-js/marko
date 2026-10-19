# Render `{"show":false}`

# Update `{"show":true}`
```html
<p>
  sel=0
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p, button
```

# Update
```js
d.querySelector("button").click();
```
```html
<p>
  sel=1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text@4 "0" => "1"
```
