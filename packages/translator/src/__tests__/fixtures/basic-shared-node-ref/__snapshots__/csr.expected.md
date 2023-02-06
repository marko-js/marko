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
ul0: attr(hidden) null => ""
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
ul0: attr(hidden) "" => null
```


# Render 
container.querySelector("#reverse").click();

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
removed ul0/li1 after ul0/li2
inserted ul0/li1
removed ul0/li0 after ul0/li2
inserted ul0/li0
```