# Render `{"a":"a","x":true}`
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="read"
>
  a
</button>
<output />
```

# Update `{"a":"b","x":true}`
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="read"
>
  b
</button>
<output />
```
## Change
```
UPDATE: .read::text "a" => "b"
```

# Update
```js
document.querySelector(selector).click();
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
  b
</button>
<output>
  b
</output>
```
## Change
```
UPDATE: output::text "" => "b"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="toggle"
>
  toggle
</button>
<output>
  b
</output>
```
## Change
```
REMOVE: .toggle + button
```

# Update
```js
document.querySelector(selector).click();
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
  b
</button>
<output>
  b
</output>
```
## Change
```
INSERT: .toggle + .read
UPDATE: .read::text " " => "b"
```

# Update `{"a":"c","x":true}`
```html
<button
  class="toggle"
>
  toggle
</button>
<button
  class="read"
>
  c
</button>
<output>
  b
</output>
```
## Change
```
UPDATE: .read::text "b" => "c"
```

# Update
```js
document.querySelector(selector).click();
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
  c
</button>
<output>
  c
</output>
```
## Change
```
UPDATE: output::text "b" => "c"
```
