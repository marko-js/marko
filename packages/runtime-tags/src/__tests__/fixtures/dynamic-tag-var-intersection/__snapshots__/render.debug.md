# Render
```html
<span>
  0
</span>
<button
  class="inc"
>
  0:0
</button>
<button
  class="toggle"
/>
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<span>
  1
</span>
<button
  class="inc"
>
  1:1
</button>
<button
  class="toggle"
/>
```
## Change
```
UPDATE: span::text "0" => "1"
UPDATE: .inc::text "0:0" => "1:1"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<button
  class="inc"
>
  1:undefined
</button>
<button
  class="toggle"
/>
```
## Change
```
REMOVE: span
UPDATE: .inc::text "1:1" => "1:undefined"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<span>
  0
</span>
<button
  class="inc"
>
  1:0
</button>
<button
  class="toggle"
/>
```
## Change
```
INSERT: span
UPDATE: span::text " " => "0"
UPDATE: .inc::text "1:undefined" => "1:0"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<span>
  2
</span>
<button
  class="inc"
>
  2:2
</button>
<button
  class="toggle"
/>
```
## Change
```
UPDATE: span::text "0" => "2"
UPDATE: .inc::text "1:0" => "2:2"
```
