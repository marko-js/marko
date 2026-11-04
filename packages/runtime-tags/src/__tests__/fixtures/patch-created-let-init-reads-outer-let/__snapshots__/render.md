# Render `{"outer":true,"show":false}`
```html
<button
  class="x"
>
  1
</button>
```

# Update `{"outer":true,"show":true}`
```html
<button
  class="x"
>
  1
</button>
<span
  data-y="1"
/>
<button
  class="y"
>
  go
</button>
```
## Change
```
INSERT: .x + span
INSERT: span + .y
UPDATE: span[data-y] null => "1"
```

# Update
```js
d.querySelector("button.y").click();
```
```html
<button
  class="x"
>
  1
</button>
<span
  data-y="1"
  title="1"
/>
<button
  class="y"
>
  go
</button>
```
## Change
```
UPDATE: span[title] null => "1"
```

# Update `{"outer":false,"show":false}`
## Change
```
REMOVE: button
REMOVE: span
REMOVE: button
```

# Update `{"outer":true,"show":true}`
```html
<button
  class="x"
>
  1
</button>
<span
  data-y="1"
/>
<button
  class="y"
>
  go
</button>
```
## Change
```
INSERT: .x
INSERT: .x + span
INSERT: span + .y
UPDATE: span[data-y] null => "1"
```
