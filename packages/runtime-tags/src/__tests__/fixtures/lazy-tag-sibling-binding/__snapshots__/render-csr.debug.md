# Render
```html
<button
  class="main"
>
  main:0
</button>
```

# Update
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="s"
>
  s:?
</button>
<button
  class="b"
>
  b:?
</button>
```
## Change
```
INSERT: .main + .s
INSERT: .s + .b
```

# Update
```js
document.querySelector(".s").click();
```
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="s"
>
  s:true
</button>
<button
  class="b"
>
  b:?
</button>
```
## Change
```
UPDATE: .s::text@2 "?" => "true"
```

# Update
```js
document.querySelector(".b").click();
```
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="s"
>
  s:true
</button>
<button
  class="b"
>
  b:true
</button>
```
## Change
```
UPDATE: .b::text@2 "?" => "true"
```
