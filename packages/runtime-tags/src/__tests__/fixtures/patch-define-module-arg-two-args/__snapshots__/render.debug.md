# Render `{"label":"a"}`
```html
<em>
  AK A!M
</em>
<button
  class="toggle"
>
  toggle
</button>
```

# Update `{"label":"b"}`
```html
<em>
  BK B!M
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: em::text@0 "AK" => "BK"
UPDATE: em::text@3 "A!M" => "B!M"
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: em
```

# Update
```js
document.querySelector("button.toggle").click();
```
```html
<em>
  BK B!M
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
INSERT: em
UPDATE: em::text@0 "" => "BK"
UPDATE: em::text@3 "" => "B!M"
```

# Update `{"label":"c"}`
```html
<em>
  CK C!M
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: em::text@0 "BK" => "CK"
UPDATE: em::text@3 "B!M" => "C!M"
```
