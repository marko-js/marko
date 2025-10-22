# Render
```html
<button />
<ul
  class="attached"
>
  <li>
    0
  </li>
  <li>
    1
  </li>
</ul>
```

# Mutations
```
INSERT button, ul
UPDATE ul[class] null => "attached"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<ul
  class="attached"
>
  <li>
    0
  </li>
  <li>
    1
  </li>
  <li>
    2
  </li>
</ul>
```

# Mutations
```
INSERT ul/li2
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<ul
  class="attached"
>
  <li>
    0
  </li>
  <li>
    1
  </li>
  <li>
    2
  </li>
  <li>
    3
  </li>
</ul>
```

# Mutations
```
INSERT ul/li3
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<ul
  class="attached"
>
  <li>
    0
  </li>
  <li>
    1
  </li>
  <li>
    2
  </li>
  <li>
    3
  </li>
  <li>
    4
  </li>
</ul>
```

# Mutations
```
INSERT ul/li4
```