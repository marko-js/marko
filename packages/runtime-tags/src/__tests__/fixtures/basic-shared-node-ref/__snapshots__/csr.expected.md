# Render
```html
<ul>
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
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="reverse"
>
  Reverse
</button>
```

# Mutations
```
INSERT ul, button0, button1
```

# Render
```js
container.querySelector("#toggle").click();
```
```html
<ul
  hidden=""
>
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
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="reverse"
>
  Reverse
</button>
```

# Mutations
```
UPDATE ul[hidden] null => ""
```

# Render
```js
container.querySelector("#toggle").click();
```
```html
<ul>
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
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="reverse"
>
  Reverse
</button>
```

# Mutations
```
UPDATE ul[hidden] "" => null
```

# Render
```js
container.querySelector("#reverse").click();
```
```html
<ul>
  <li>
    3
  </li>
  <li>
    2
  </li>
  <li>
    1
  </li>
</ul>
<button
  id="toggle"
>
  Toggle
</button>
<button
  id="reverse"
>
  Reverse
</button>
```

# Mutations
```
REMOVE ul/li1 after ul/li2
INSERT ul/li1
REMOVE ul/li0 after ul/li2
INSERT ul/li0
```