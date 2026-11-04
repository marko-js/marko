# Render `{"wrap":true,"suffix":"!","rows":[{"id":1,"label":"a"}]}`
```html
<button
  class="toggle"
>
  toggle
</button>
<b>
  a!
</b>
```

# Update `{"wrap":true,"suffix":"?","rows":[{"id":1,"label":"a"},{"id":2,"label":"b"}]}`
```html
<button
  class="toggle"
>
  toggle
</button>
<b>
  a?
</b>
<button
  class="toggle"
>
  toggle
</button>
<b>
  b?
</b>
```
## Change
```
INSERT: b:nth-of-type(1) + button
UPDATE: b:nth-of-type(1)::text@1 "!" => "?"
INSERT: button:nth-of-type(2) + b
UPDATE: b:nth-of-type(2)::text@1 "" => "?"
UPDATE: b:nth-of-type(2)::text@0 "" => "b"
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: button:nth-of-type(1) + b
REMOVE: button:nth-of-type(2) + b
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<b>
  a?
</b>
<button
  class="toggle"
>
  toggle
</button>
<b>
  b?
</b>
```
## Change
```
INSERT: button:nth-of-type(1) + b
INSERT: button:nth-of-type(2) + b
UPDATE: b:nth-of-type(1)::text@0 "" => "a"
UPDATE: b:nth-of-type(1)::text@1 "" => "?"
UPDATE: b:nth-of-type(2)::text@1 "" => "?"
UPDATE: b:nth-of-type(2)::text@0 "" => "b"
```

# Update `{"wrap":true,"suffix":".","rows":[{"id":1,"label":"a"},{"id":2,"label":"b"}]}`
```html
<button
  class="toggle"
>
  toggle
</button>
<b>
  a.
</b>
<button
  class="toggle"
>
  toggle
</button>
<b>
  b.
</b>
```
## Change
```
UPDATE: b:nth-of-type(1)::text@1 "?" => "."
UPDATE: b:nth-of-type(2)::text@1 "?" => "."
```
