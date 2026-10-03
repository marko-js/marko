# Render
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="read"
>
  none
</button>
```

# Update
```js
document.querySelector(".read").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="read"
>
  b:1
</button>
```
## Change
```
UPDATE: .read::text "none" => "b:1"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  a
</span>
<button
  class="read"
>
  b:1
</button>
```
## Change
```
INSERT: .toggle + span
```

# Update
```js
document.querySelector(".read").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<span>
  a
</span>
<button
  class="read"
>
  undefined:0
</button>
```
## Change
```
UPDATE: .read::text "b:1" => "undefined:0"
```
