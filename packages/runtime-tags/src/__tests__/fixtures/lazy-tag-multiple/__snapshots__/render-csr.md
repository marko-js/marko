# Render
```html
<button>
  Inc
</button>
```

# Update
```html
<button>
  Inc
</button>
<span
  class="a"
>
   
</span>
<span
  class="b"
>
   
</span>
```
## Change
```
INSERT: button + .a
INSERT: .a + .b
```

# Update
```html
<button>
  Inc
</button>
<span
  class="a"
>
  0
</span>
<span
  class="b"
>
  0
</span>
```
## Change
```
UPDATE: .a::text " " => "0"
UPDATE: .b::text " " => "0"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<span
  class="a"
>
  1
</span>
<span
  class="b"
>
  2
</span>
```
## Change
```
UPDATE: .a::text "0" => "1"
UPDATE: .b::text "0" => "2"
```
