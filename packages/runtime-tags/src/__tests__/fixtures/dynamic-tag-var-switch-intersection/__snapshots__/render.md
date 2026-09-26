# Render
```html
<button
  class="swap"
>
  0:1
</button>
<button
  class="clear"
/>
<button
  class="mount"
/>
```

# Update
```js
document.querySelector("button.swap").click();
```
```html
<button
  class="swap"
>
  1:2
</button>
<button
  class="clear"
/>
<button
  class="mount"
/>
```
## Change
```
UPDATE: .swap::text "0:1" => "1:2"
UPDATE: .swap::text "1:1" => "1:2"
```

# Update
```js
document.querySelector("button.swap").click();
```
```html
<button
  class="swap"
>
  2:1
</button>
<button
  class="clear"
/>
<button
  class="mount"
/>
```
## Change
```
UPDATE: .swap::text "1:2" => "2:1"
UPDATE: .swap::text "2:2" => "2:1"
```

# Update
```js
document.querySelector("button.clear").click();
```
```html
<button
  class="swap"
>
  2:undefined
</button>
<button
  class="clear"
/>
<button
  class="mount"
/>
```
## Change
```
UPDATE: .swap::text "2:1" => "2:undefined"
```

# Update
```js
document.querySelector("button.mount").click();
```
```html
<button
  class="swap"
>
  3:1
</button>
<button
  class="clear"
/>
<button
  class="mount"
/>
```
## Change
```
UPDATE: .swap::text "2:undefined" => "3:1"
UPDATE: .swap::text "3:undefined" => "3:1"
```
