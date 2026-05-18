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
loading...
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
INSERT: #two + ::text("1")
```

# Update
```js
container.querySelector("button").click();
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
REMOVE: #two + ::text("1")
REMOVE: #one::text("Fail")
INSERT: #one::text("Pass")
REMOVE: #two::text("Fail")
INSERT: #two::text("Pass")
```
