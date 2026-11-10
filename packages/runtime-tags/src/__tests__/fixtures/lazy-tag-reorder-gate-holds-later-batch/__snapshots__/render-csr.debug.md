# Render

# Update
```html
<button
  class="first"
>
  first:0
</button>
<button
  class="held"
>
  held:0
</button>
```
## Change
```
INSERT: .first
INSERT: .first + .held
```

# Update
```html
<button
  class="first"
>
  first:0
</button>
loading
```
## Change
```
INSERT: .first + ::text("loading")
REMOVE: ::text + button
```

# Update
```html
<button
  class="first"
>
  first:0
</button>
loading
<button
  class="streamed"
>
  streamed:0
</button>
```
## Change
```
INSERT: ::text + .streamed
```

# Update
```html
<button
  class="first"
>
  first:0
</button>
<button
  class="held"
>
  held:0
</button>
done
<button
  class="streamed"
>
  streamed:0
</button>
```
## Change
```
INSERT: .first + :is(.held, ::text("done"))
REMOVE: ::text + ::text("loading")
```

# Update
```js
document.querySelector(".held").click();
```
```html
<button
  class="first"
>
  first:0
</button>
<button
  class="held"
>
  held:1
</button>
done
<button
  class="streamed"
>
  streamed:0
</button>
```
## Change
```
UPDATE: .held::text@5 "0" => "1"
```

# Update
```js
document.querySelector(".streamed").click();
```
```html
<button
  class="first"
>
  first:0
</button>
<button
  class="held"
>
  held:1
</button>
done
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
