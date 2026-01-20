# Render
```html
<!---->
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<div>
  false,false,false
</div>
```

# Mutations
```
INSERT #comment, input0, input1, input2, div
```

# Render
```js
container.querySelectorAll("input").item(0).click();
```
```html
<!---->
<input
  checked=""
  type="checkbox"
/>
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<div>
  true,false,false
</div>
```

# Mutations
```
UPDATE div/#text "false,false,false" => "true,false,false"
```

# Render
```js
container.querySelectorAll("input").item(1).click();
```
```html
<!---->
<input
  checked=""
  type="checkbox"
/>
<input
  checked=""
  type="checkbox"
/>
<input
  type="checkbox"
/>
<div>
  true,true,false
</div>
```

# Mutations
```
UPDATE div/#text "true,false,false" => "true,true,false"
```

# Render
```js
container.querySelectorAll("input").item(1).click();
```
```html
<!---->
<input
  checked=""
  type="checkbox"
/>
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<div>
  true,false,false
</div>
```

# Mutations
```
UPDATE div/#text "true,true,false" => "true,false,false"
```