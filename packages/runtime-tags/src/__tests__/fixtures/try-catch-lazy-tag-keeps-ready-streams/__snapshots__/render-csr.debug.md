# Render

# Update
```html
<button
  id="other"
>
  0
</button>
<button
  id="child"
>
  0
</button>
```
## Change
```
INSERT: #other
INSERT: #child
```

# Update
```html
<button
  id="other"
>
  0
</button>
loading
```
## Change
```
REMOVE: #child
INSERT: ::text("loading")
```

# Update
```html
<button
  id="other"
>
  0
</button>
caught
```
## Change
```
REMOVE: ::text("loading")
INSERT: ::text("caught")
UPDATE: ::text " " => "caught"
```

# Update
```html
<button
  id="other"
>
  0
</button>
caught
<p>
  done
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "done"
```

# Update
```js
document.getElementById("other").click();
```
```html
<button
  id="other"
>
  1
</button>
caught
<p>
  done
</p>
```
## Change
```
UPDATE: #other::text "0" => "1"
```
