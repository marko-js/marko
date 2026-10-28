# Render `{"show":false,"a":"x"}`

# Update `{"show":true,"a":"x"}`
```html
<span>
  x1
</span>
<button
  class="b"
>
  b
</button>
```
## Change
```
INSERT: span, .b
UPDATE: span::text " " => "x1"
```

# Update
```js
d.querySelector(".b").click();
```
```html
<span>
  x2
</span>
<button
  class="b"
>
  b
</button>
```
## Change
```
UPDATE: span::text "x1" => "x2"
```

# Update `{"show":true,"a":"y"}`
