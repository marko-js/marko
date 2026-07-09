# Render
```html
<button
  class="add"
>
  add
</button>
<span
  class="display"
>
  0
</span>
<div
  class="provider-count"
>
  0
</div>
```

# Update
```js
container.querySelector("button.add").click();
```
```html
<button
  class="add"
>
  add
</button>
<span
  class="display"
>
  1
</span>
<div
  class="provider-count"
>
  1
</div>
```
## Change
```
UPDATE: .provider-count::text "0" => "1"
UPDATE: .display::text "0" => "1"
```

# Update
```js
container.querySelector("button.add").click();
```
```html
<button
  class="add"
>
  add
</button>
<span
  class="display"
>
  2
</span>
<div
  class="provider-count"
>
  2
</div>
```
## Change
```
UPDATE: .provider-count::text "1" => "2"
UPDATE: .display::text "1" => "2"
```
