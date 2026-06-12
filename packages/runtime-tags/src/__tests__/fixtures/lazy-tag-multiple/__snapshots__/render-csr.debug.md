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
INSERT: button + .a
INSERT: .a + .b
```
## Console
```
LOG "loaded a"
LOG "loaded b"
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
