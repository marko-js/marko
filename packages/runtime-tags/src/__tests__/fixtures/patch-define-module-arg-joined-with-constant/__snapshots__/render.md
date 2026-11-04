# Render `{"label":"a"}`
```html
<em>
  A!
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
  B!
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: em::text "A!" => "B!"
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
  B!
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
UPDATE: em::text " " => "B!"
```

# Update `{"label":"c"}`
```html
<em>
  C!
</em>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: em::text "B!" => "C!"
```
