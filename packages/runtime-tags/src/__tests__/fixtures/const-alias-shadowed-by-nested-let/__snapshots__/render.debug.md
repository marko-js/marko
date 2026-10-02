# Render
```html
<span>
  1-10
</span>
<button />
<button
  class="outer"
/>
```

# Update
```js
document.querySelector(".outer").click();
```
```html
<span>
  2-10
</span>
<button />
<button
  class="outer"
/>
```
## Change
```
UPDATE: span::text@0 "1" => "2"
```

# Update
```js
document.querySelector("wrap button, button").click();
```
```html
<span>
  2-11
</span>
<button />
<button
  class="outer"
/>
```
## Change
```
UPDATE: span::text@2 "10" => "11"
```
