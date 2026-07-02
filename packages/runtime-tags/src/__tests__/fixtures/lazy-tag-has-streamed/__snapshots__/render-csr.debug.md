# Render `{"value":1}`

# Update
```html
<button
  class="a"
>
  1
</button>
```
## Change
```
INSERT: .a
UPDATE: .a::text " " => "1"
```

# Update
```js
container.querySelector("button.a").click();
```
```html
<button
  class="a"
>
  2
</button>
```
## Change
```
UPDATE: .a::text "1" => "2"
```

# Update
```html
<span>
  1
</span>
<button
  class="a"
>
  2
</button>
```
## Change
```
INSERT: span
```

# Update
```html
<span>
  1
</span>
<button
  class="a"
>
  2
</button>
<button
  class="b"
>
  1
</button>
```
## Change
```
INSERT: .a + .b
UPDATE: .b::text " " => "1"
```

# Update
```js
container.querySelector("button.b").click();
```
```html
<span>
  1
</span>
<button
  class="a"
>
  2
</button>
<button
  class="b"
>
  2
</button>
```
## Change
```
UPDATE: .b::text "1" => "2"
```
