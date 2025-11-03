# Render
```html
<button>
  Clear
</button>
<ul>
  <li>
    Learn Marko
  </li>
  <li>
    Make a Website
  </li>
</ul>
```

# Mutations
```
INSERT button, ul
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Clear
</button>
<ul />
```

# Mutations
```
REMOVE li before li
REMOVE li in ul
```