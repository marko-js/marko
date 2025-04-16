# Render
```html
<div>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```

# Mutations
```
INSERT div, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<div
  class="selected"
>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```

# Mutations
```
UPDATE div[class] null => "selected"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div
  class=""
>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```

# Mutations
```
UPDATE div[class] "selected" => ""
```

# Render
```js
container.querySelector("button").click();
```
```html
<div
  class="selected"
>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```

# Mutations
```
UPDATE div[class] "" => "selected"
```