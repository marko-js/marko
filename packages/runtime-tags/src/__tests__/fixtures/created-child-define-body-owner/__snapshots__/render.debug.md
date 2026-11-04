# Render `{"show":false}`

# Update `{"show":true}`
```html
<p>
  0
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p, button
UPDATE: p::text " " => "0"
```

# Update
```js
container.querySelector("button").click();
```
```html
<p>
  1
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0" => "1"
```
