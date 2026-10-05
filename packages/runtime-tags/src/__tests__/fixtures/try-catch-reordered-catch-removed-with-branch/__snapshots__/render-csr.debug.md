# Render
```html
<pre
  id="log"
/>
<button
  class="inc"
>
  0
</button>
<button
  class="hide"
/>
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<pre
  id="log"
/>
<button
  class="inc"
>
  1
</button>
<button
  class="hide"
/>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```

# Update
```js
document.querySelector(".hide").click();
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<pre
  id="log"
/>
<button
  class="inc"
>
  2
</button>
<button
  class="hide"
/>
```
## Change
```
UPDATE: .inc::text "1" => "2"
```
