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
UPDATE: #other::text " " => "0"
INSERT: #other + #child
UPDATE: #child::text " " => "0"
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
INSERT: #other + ::text("loading")
REMOVE: ::text + #child
```

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
INSERT: #other + #child
REMOVE: #child + ::text("loading")
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
INSERT: #other + ::text("caught")
REMOVE: ::text + #child
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
INSERT: ::text + p
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
