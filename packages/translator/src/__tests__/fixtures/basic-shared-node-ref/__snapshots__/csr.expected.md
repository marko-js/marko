# Render {}
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
inserted ul0, button1, button2
```


# Render 
container.querySelector("#toggle").click();

```html
<ul
  hidden="true"
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
ul0: attr(hidden) null => "true"
```


# Render 
container.querySelector("#toggle").click();

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
ul0: attr(hidden) "true" => null
```


# Render 
container.querySelector("#reverse").click();

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

```