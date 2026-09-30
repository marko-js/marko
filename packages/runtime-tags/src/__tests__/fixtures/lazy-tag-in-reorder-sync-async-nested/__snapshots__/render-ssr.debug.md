# Render
```html
<button
  class="main"
>
  main:0
</button>
loading
```

# Update
```html
<button
  class="main"
>
  main:0
</button>
loading
```
## Change
```
INSERT: t > button:nth-of-type(1)::text("reordered:")
INSERT: t > button:nth-of-type(1)::text@0 + ::text("0")
INSERT: t > button:nth-of-type(2)::text("reordered-async:")
INSERT: t > button:nth-of-type(2)::text@0 + ::text("0")
```

# Update
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="reordered"
>
  reordered:0
</button>
<button
  class="reordered-async"
>
  reordered-async:0
</button>
<button
  class="reordered-async-nested"
>
  reordered-async-nested:0
</button>
```
## Change
```
INSERT: .reordered-async-nested::text("reordered-async-nested:")
INSERT: .reordered-async-nested::text@0 + ::text("0")
REMOVE: ::text("loading")
INSERT: .main + :is(.reordered, .reordered-async, .reordered-async-nested)
```

# Update
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="reordered"
>
  reordered:0
</button>
<button
  class="reordered-async"
>
  reordered-async:0
</button>
<button
  class="reordered-async-nested"
>
  reordered-async-nested:0
</button>
<button
  class="streamed"
>
  streamed:0
</button>
```
## Change
```
INSERT: .reordered-async-nested + .streamed
INSERT: .streamed::text("streamed:")
INSERT: .streamed::text@0 + ::text("0")
```

# Update
```js
document.querySelector(`.${label}`).click();
```
```html
<button
  class="main"
>
  main:1
</button>
<button
  class="reordered"
>
  reordered:0
</button>
<button
  class="reordered-async"
>
  reordered-async:0
</button>
<button
  class="reordered-async-nested"
>
  reordered-async-nested:0
</button>
<button
  class="streamed"
>
  streamed:0
</button>
```
## Change
```
UPDATE: .main::text@5 "0" => "1"
```

# Update
```js
document.querySelector(`.${label}`).click();
```
```html
<button
  class="main"
>
  main:1
</button>
<button
  class="reordered"
>
  reordered:1
</button>
<button
  class="reordered-async"
>
  reordered-async:0
</button>
<button
  class="reordered-async-nested"
>
  reordered-async-nested:0
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
document.querySelector(`.${label}`).click();
```
```html
<button
  class="main"
>
  main:1
</button>
<button
  class="reordered"
>
  reordered:1
</button>
<button
  class="reordered-async"
>
  reordered-async:1
</button>
<button
  class="reordered-async-nested"
>
  reordered-async-nested:0
</button>
<button
  class="streamed"
>
  streamed:0
</button>
```
## Change
```
UPDATE: .reordered-async::text@16 "0" => "1"
```

# Update
```js
document.querySelector(`.${label}`).click();
```
```html
<button
  class="main"
>
  main:1
</button>
<button
  class="reordered"
>
  reordered:1
</button>
<button
  class="reordered-async"
>
  reordered-async:1
</button>
<button
  class="reordered-async-nested"
>
  reordered-async-nested:1
</button>
<button
  class="streamed"
>
  streamed:0
</button>
```
## Change
```
UPDATE: .reordered-async-nested::text@23 "0" => "1"
```

# Update
```js
document.querySelector(`.${label}`).click();
```
```html
<button
  class="main"
>
  main:1
</button>
<button
  class="reordered"
>
  reordered:1
</button>
<button
  class="reordered-async"
>
  reordered-async:1
</button>
<button
  class="reordered-async-nested"
>
  reordered-async-nested:1
</button>
<button
  class="streamed"
>
  streamed:1
</button>
```
## Change
```
UPDATE: .streamed::text@9 "0" => "1"
```
