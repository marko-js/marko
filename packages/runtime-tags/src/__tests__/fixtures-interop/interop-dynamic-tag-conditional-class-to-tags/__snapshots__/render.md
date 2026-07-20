# Render
```html
<button
  id="class"
>
  toggle
</button>
<button
  id="tags"
>
  0
</button>
```

# Update
```js
document.querySelector("#tags").click();
```
```html
<button
  id="class"
>
  toggle
</button>
<button
  id="tags"
>
  1
</button>
```
## Change
```
UPDATE: #tags::text "0" => "1"
```

# Update
```js
document.querySelector("#class").click();
```
```html
<button
  id="class"
>
  toggle
</button>
```
## Change
```
REMOVE: #class + #tags
```

# Update
```js
document.querySelector("#class").click();
```
```html
<button
  id="class"
>
  toggle
</button>
<button
  id="tags"
>
  0
</button>
```
## Change
```
INSERT: #class + #tags
```
