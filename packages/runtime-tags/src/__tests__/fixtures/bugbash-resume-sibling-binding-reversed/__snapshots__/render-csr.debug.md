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
container.querySelector(".s").click();
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
container.querySelector(".b").click();
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
