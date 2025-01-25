# Render
```html
<button />
<div>
  1 2 3
</div>
<div>
  <!---->
  1 2 3
  <!---->
</div>
```

# Mutations
```
INSERT button, div0, div1
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<div>
  1 2 4
</div>
<div>
  <!---->
  1 2 4
  <!---->
</div>
```

# Mutations
```
UPDATE div0/#text4 "3" => "4"
UPDATE div1/#text4 "3" => "4"
```