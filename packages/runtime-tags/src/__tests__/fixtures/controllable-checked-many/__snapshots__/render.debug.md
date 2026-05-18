# Render
```html
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

# Update
```js
container.querySelectorAll("input").item(0).click();
```
```html
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
## Change
```
UPDATE: div::text "false,false,false" => "true,false,false"
```

# Update
```js
container.querySelectorAll("input").item(1).click();
```
```html
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
## Change
```
UPDATE: div::text "true,false,false" => "true,true,false"
```

# Update
```js
container.querySelectorAll("input").item(1).click();
```
```html
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
## Change
```
UPDATE: div::text "true,true,false" => "true,false,false"
```
