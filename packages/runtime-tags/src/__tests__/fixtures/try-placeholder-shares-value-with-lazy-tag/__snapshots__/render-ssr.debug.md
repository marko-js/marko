# Render
```html
<button
  class="child"
>
  0
</button>
<button
  class="placeholder"
>
  0
</button>
```

# Update
```js
document.querySelector(`.${name}`)?.click();
```
```html
<button
  class="child"
>
  0
</button>
<button
  class="placeholder"
>
  1
</button>
```
## Change
```
UPDATE: .placeholder::text "0" => "1"
```

# Update
```js
document.querySelector(`.${name}`)?.click();
```
```html
<button
  class="child"
>
  1
</button>
<button
  class="placeholder"
>
  1
</button>
```
## Change
```
UPDATE: .child::text "0" => "1"
```

# Update
```html
done
```
## Change
```
REMOVE: t > button:nth-of-type(1) + button
REMOVE: button
INSERT: ::text("done")
```
