# Render
```html
<button
  class="rename"
>
  rename
</button>
<p>
  ok
</p>
```

# Update
```js
container.querySelector(selector).click();
```

# Update `{"error":{}}`
```html
<button
  class="rename"
>
  rename
</button>
<button
  class="inc"
>
  label!: SHOWN_x 0
</button>
```
## Change
```
INSERT: .rename + .inc
REMOVE: .inc + p
UPDATE: .inc::text@16 "" => "0"
UPDATE: .inc::text@0 "" => "label!: SHOWN_x"
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  class="rename"
>
  rename
</button>
<button
  class="inc"
>
  label!: SHOWN_x 1
</button>
```
## Change
```
UPDATE: .inc::text@16 "0" => "1"
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  class="rename"
>
  rename
</button>
<button
  class="inc"
>
  label!!: SHOWN_x 1
</button>
```
## Change
```
UPDATE: .inc::text@0 "label!: SHOWN_x" => "label!!: SHOWN_x"
```
