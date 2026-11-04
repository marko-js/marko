# Render `{"show":false}`
```html
<span>
  0
</span>
```

# Update `{"show":true}`
```html
<button>
  pick
</button>
<span>
  0
</span>
```
## Change
```
INSERT: button
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  pick
</button>
<span>
  1
</span>
```
## Change
```
UPDATE: span::text "0" => "1"
```
