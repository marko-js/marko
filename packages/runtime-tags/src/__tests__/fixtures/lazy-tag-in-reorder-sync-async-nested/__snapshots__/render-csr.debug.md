# Render

# Update
```html
<button
  class="main"
>
  main:0
</button>
```
## Change
```
INSERT: .main
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
INSERT: .main + ::text("loading")
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
INSERT: .main + :is(.reordered, .reordered-async, .reordered-async-nested)
REMOVE: .reordered-async-nested + ::text("loading")
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
