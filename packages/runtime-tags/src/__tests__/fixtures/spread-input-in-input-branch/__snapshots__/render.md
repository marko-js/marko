# Render
```html
<button
  class="link"
>
  link
</button>
<button
  class="inc"
>
  inc
</button>
<button
  class="btn"
>
  Label 0
</button>
```

# Update
```js
document.querySelector(".link").click();
```
```html
<button
  class="link"
>
  link
</button>
<button
  class="inc"
>
  inc
</button>
<a
  class="btn"
  href="/x"
>
  Label 0
</a>
```
## Change
```
INSERT: .inc + .btn
REMOVE: .btn + .btn
UPDATE: .btn[href] null => "/x"
UPDATE: .btn[class] null => "btn"
INSERT: .btn > :is(::text("Label "), ::text("0"))
UPDATE: .btn::text@6 "" => "0"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="link"
>
  link
</button>
<button
  class="inc"
>
  inc
</button>
<a
  class="btn"
  href="/x"
>
  Label 1
</a>
```
## Change
```
UPDATE: .btn::text@6 "0" => "1"
```

# Update
```js
document.querySelector(".link").click();
```
```html
<button
  class="link"
>
  link
</button>
<button
  class="inc"
>
  inc
</button>
<button
  class="btn"
>
  Label 1
</button>
```
## Change
```
INSERT: .inc + .btn
REMOVE: .btn + .btn
UPDATE: .btn[class] null => "btn"
INSERT: .btn > :is(::text("Label "), ::text("1"))
UPDATE: .btn::text@6 "" => "1"
```

# Update
```js
document.querySelector(".inc").click();
```
```html
<button
  class="link"
>
  link
</button>
<button
  class="inc"
>
  inc
</button>
<button
  class="btn"
>
  Label 2
</button>
```
## Change
```
UPDATE: .btn::text@6 "1" => "2"
```
