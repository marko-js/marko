# Render
```html
<button
  id="other"
>
  0
</button>
loading
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
INSERT: #child
REMOVE: #child
REMOVE: ::text("loading")
INSERT: ::text("caught")
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
INSERT: p::text("done")
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
