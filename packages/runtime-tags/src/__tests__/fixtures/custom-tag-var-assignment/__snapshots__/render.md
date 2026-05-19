# Render
```html
<button
  class="inc-child"
>
  1
</button>
<button
  class="inc-parent"
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
container.querySelector("button.inc-child").click();
```
```html
<button
  class="inc-child"
>
  2
</button>
<button
  class="inc-parent"
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
UPDATE: .inc-child::text "1" => "2"
UPDATE: .inc-parent::text "1" => "2"
```

# Update
```js
container.querySelector("button.inc-parent").click();
```
```html
<button
  class="inc-child"
>
  3
</button>
<button
  class="inc-parent"
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
UPDATE: .inc-child::text "2" => "3"
UPDATE: .inc-parent::text "2" => "3"
```

# Update
```js
container.querySelector("button.reset").click();
```
```html
<button
  class="inc-child"
>
  0
</button>
<button
  class="inc-parent"
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
UPDATE: .inc-child::text "3" => "0"
UPDATE: .inc-parent::text "3" => "0"
```
