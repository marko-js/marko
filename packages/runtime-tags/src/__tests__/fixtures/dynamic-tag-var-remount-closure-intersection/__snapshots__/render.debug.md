# Render
```html
<button
  class="row1"
>
  0:0
</button>
<button
  class="row2"
>
  0:0
</button>
<button
  class="toggle"
/>
```

# Update
```js
document.querySelector("button.row1").click();
```
```html
<button
  class="row1"
>
  1:1
</button>
<button
  class="row2"
>
  0:1
</button>
<button
  class="toggle"
/>
```
## Change
```
UPDATE: .row1::text "0:0" => "1:1"
UPDATE: .row2::text "0:0" => "0:1"
```

# Update
```js
document.querySelector("button.toggle").click();
```

# Update
```js
document.querySelector("button.toggle").click();
```

# Update
```js
document.querySelector("button.row1").click();
```
```html
<button
  class="row1"
>
  2:2
</button>
<button
  class="row2"
>
  0:2
</button>
<button
  class="toggle"
/>
```
## Change
```
UPDATE: .row1::text "1:1" => "2:2"
UPDATE: .row1::text "2:1" => "2:2"
UPDATE: .row2::text "0:1" => "0:2"
```
