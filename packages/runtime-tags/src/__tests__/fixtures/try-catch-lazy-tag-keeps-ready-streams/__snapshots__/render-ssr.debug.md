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
REMOVE: ::text("loading")
INSERT: #child
REMOVE: #child
INSERT: #other + ::text("caught")
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
INSERT: ::text + p
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
