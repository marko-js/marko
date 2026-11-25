# Render
```html
<button />
<div
  id="one"
>
  Fail
</div>
<div
  id="two"
>
  Fail
</div>
```

# Update
```html
<button />
<div
  id="one"
>
  Fail
</div>
<div
  id="two"
>
  Fail
</div>
loading...
```
## Change
```
INSERT: ::text("loading...")
```

# Update
```html
<button />
<div
  id="one"
>
  Fail
</div>
<div
  id="two"
>
  Fail
</div>
1
```
## Change
```
REMOVE: ::text("loading...")
INSERT: ::text("1")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button />
<div
  id="one"
>
  Pass
</div>
<div
  id="two"
>
  Pass
</div>
```
## Change
```
REMOVE: ::text("1")
REMOVE: #one::text("Fail")
INSERT: #one::text("Pass")
REMOVE: #two::text("Fail")
INSERT: #two::text("Pass")
```
