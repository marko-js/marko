# Render
```html
<button />
<!---->
<div>
  0
</div>
<div>
  0
</div>
<!---->
<!---->
```

# Mutations
```
INSERT button, #comment0, div0, div1, #comment1, #comment2
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<!---->
<div>
  1
</div>
<div>
  1
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE div1/#text "0" => "1"
UPDATE div0/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<!---->
<div>
  2
</div>
<div>
  2
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE div1/#text "1" => "2"
UPDATE div0/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<!---->
<div>
  3
</div>
<div>
  3
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE div1/#text "2" => "3"
UPDATE div0/#text "2" => "3"
```