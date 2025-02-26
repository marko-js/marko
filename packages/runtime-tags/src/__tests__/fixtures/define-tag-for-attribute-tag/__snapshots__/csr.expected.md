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
INSERT div/span
REMOVE span after div/span
```

# Render
```js
container.querySelector("button").click();
```
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
UPDATE div[class] "selected" => null
INSERT div/span
REMOVE span after div/span
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
INSERT div/span
REMOVE span after div/span
```