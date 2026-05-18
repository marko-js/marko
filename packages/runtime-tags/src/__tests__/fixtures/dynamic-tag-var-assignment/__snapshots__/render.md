# Render
```html
<button
  class="inc"
>
  1
</button>
<button
  class="reset"
>
  reset
</button>
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  2
</button>
<button
  class="reset"
>
  reset
</button>
```
## Change
```
UPDATE: .inc::text "1" => "2"
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  3
</button>
<button
  class="reset"
>
  reset
</button>
```
## Change
```
UPDATE: .inc::text "2" => "3"
```

# Update
```js
container.querySelector("button.reset").click();
```
```html
<button
  class="inc"
>
  0
</button>
<button
  class="reset"
>
  reset
</button>
```
## Change
```
UPDATE: .inc::text "3" => "0"
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  1
</button>
<button
  class="reset"
>
  reset
</button>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```
