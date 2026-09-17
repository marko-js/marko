# Render `{"first":{"tag":{"name":"x"}},"second":{"tag":{"name":"x"}}}`
```html
<button
  id="a"
>
  x:0
</button>
<button
  id="b"
>
  x:0
</button>
```

# Update `{"first":{"value":{"tag":{"name":"y"}}},"second":{"value":{"tag":{"name":"y"}}}}`
```html
<button
  id="a"
>
  y:0
</button>
<button
  id="b"
>
  y:0
</button>
```
## Change
```
UPDATE: #a::text@0 "x" => "y"
UPDATE: #b::text@0 "x" => "y"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="a"
>
  y:1
</button>
<button
  id="b"
>
  y:0
</button>
```
## Change
```
UPDATE: #a::text@2 "0" => "1"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="a"
>
  y:1
</button>
<button
  data-same="true"
  id="b"
>
  y:1
</button>
```
## Change
```
UPDATE: #b[data-same] null => "true"
UPDATE: #b::text@2 "0" => "1"
```
