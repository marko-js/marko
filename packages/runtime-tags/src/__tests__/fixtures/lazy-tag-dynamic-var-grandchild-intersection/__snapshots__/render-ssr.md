# Render
```html
<button
  class="mount"
>
  mount
</button>
<button
  class="inc"
>
  0:undefined
</button>
```

# Update
```js
document.querySelector("button.mount").click();
```

# Update
```html
<button
  class="mount"
>
  mount
</button>
<span>
  0
</span>
<button
  class="inc"
>
  0:0
</button>
```
## Change
```
INSERT: .mount + span
UPDATE: .inc::text "0:undefined" => "0:0"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="mount"
>
  mount
</button>
<span>
  1
</span>
<button
  class="inc"
>
  1:1
</button>
```
## Change
```
UPDATE: span::text "0" => "1"
UPDATE: .inc::text "0:0" => "1:1"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="mount"
>
  mount
</button>
<span>
  2
</span>
<button
  class="inc"
>
  2:2
</button>
```
## Change
```
UPDATE: span::text "1" => "2"
UPDATE: .inc::text "1:1" => "2:2"
```
