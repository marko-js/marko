# Render
```html
loading
```

# Update
```html
<button
  class="reordered"
>
  reordered:0
</button>
```
## Change
```
INSERT: .reordered::text("reordered:")
INSERT: .reordered::text@0 + ::text("0")
REMOVE: ::text("loading")
INSERT: .reordered
```

# Update
```html
<button
  class="reordered"
>
  reordered:0
</button>
<button
  class="streamed"
>
  streamed:0
</button>
```
## Change
```
INSERT: .reordered + .streamed
INSERT: .streamed::text("streamed:")
INSERT: .streamed::text@0 + ::text("0")
```

# Update
```js
container.querySelector(".reordered").click();
```
```html
<button
  class="reordered"
>
  reordered:1
</button>
<button
  class="streamed"
>
  streamed:0
</button>
```
## Change
```
UPDATE: .reordered::text@10 "0" => "1"
```

# Update
```js
container.querySelector(".streamed").click();
```
```html
<button
  class="reordered"
>
  reordered:1
</button>
<button
  class="streamed"
>
  streamed:2
</button>
```
## Change
```
UPDATE: .streamed::text@9 "0" => "2"
```
