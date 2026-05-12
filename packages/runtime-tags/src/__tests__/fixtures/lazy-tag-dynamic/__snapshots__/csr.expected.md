# Render
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<!---->
```

# Mutations
```
INSERT button0, button1, #text, #comment
```

# Render ASYNC
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<div>
  x: 1
</div>
<!---->
```

# Mutations
```
INSERT div
REMOVE #text after div
UPDATE div/#text0 "" => "x"
UPDATE div/#text2 "" => "1"
```

# Render
```js
container.querySelector(".inc").click();
```
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<div>
  x: 2
</div>
<!---->
```

# Mutations
```
UPDATE div/#text2 "1" => "2"
```

# Render
```js
container.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<!---->
```

# Mutations
```
INSERT #text
REMOVE div after #text
```

# Render
```js
container.querySelector(".toggle").click();
```
```html
<button
  class="toggle"
>
  Toggle
</button>
<button
  class="inc"
>
  Inc
</button>
<div>
  x: 2
</div>
<!---->
```

# Mutations
```
INSERT #text
REMOVE #text after #text
INSERT div
REMOVE #text after div
UPDATE div/#text0 "" => "x"
UPDATE div/#text2 "" => "2"
```