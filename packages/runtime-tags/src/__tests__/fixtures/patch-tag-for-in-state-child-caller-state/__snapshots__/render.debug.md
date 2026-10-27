# Render `{"obj":{"p":1,"q":2},"sel":"p"}`
```html
<button
  class="b"
>
  b
</button>
<span>
  1x
</span>
<button />
```

# Update `{"obj":{"p":3,"q":4},"sel":"q"}`
```html
<button
  class="b"
>
  b
</button>
<span>
  4x
</span>
<button />
```
## Change
```
REMOVE: .b + span
INSERT: .b + span
UPDATE: span::text@0 "" => "4"
UPDATE: span::text@1 "" => "x"
```

# Update
```js
document.querySelector("button.b").click();
```
```html
<button
  class="b"
>
  b
</button>
<span>
  4x!
</span>
<button />
```
## Change
```
UPDATE: span::text@1 "x" => "x!"
```

# Update
```js
document.querySelector("button:not(.b)").click();
```
```html
<button
  class="b"
>
  b
</button>
<span>
  5x!
</span>
<button />
```
## Change
```
UPDATE: span::text@0 "4" => "5"
```

# Update
```js
document.querySelector("button.b").click();
```
```html
<button
  class="b"
>
  b
</button>
<span>
  5x!!
</span>
<button />
```
## Change
```
UPDATE: span::text@1 "x!" => "x!!"
```
