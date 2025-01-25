# Render
```html
<button
  class="inc-child"
>
  1
</button>
<button
  class="inc-parent"
>
  1
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
INSERT button0, button1, button2
```

# Render
```js
container.querySelector("button.inc-child").click();
```
```html
<button
  class="inc-child"
>
  2
</button>
<button
  class="inc-parent"
>
  2
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
UPDATE button0/#text "1" => "2"
UPDATE button1/#text "1" => "2"
```

# Render
```js
container.querySelector("button.inc-parent").click();
```
```html
<button
  class="inc-child"
>
  3
</button>
<button
  class="inc-parent"
>
  3
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
UPDATE button0/#text "2" => "3"
UPDATE button1/#text "2" => "3"
```

# Render
```js
container.querySelector("button.reset").click();
```
```html
<button
  class="inc-child"
>
  0
</button>
<button
  class="inc-parent"
>
  0
</button>
<button
  class="reset"
>
  reset
</button>
```

# Mutations
```
UPDATE button0/#text "3" => "0"
UPDATE button1/#text "3" => "0"
```