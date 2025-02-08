# Render
```html
<table>
  <tbody />
</table>
<button>
  Toggle
</button>
```

# Mutations
```
INSERT table, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<table>
  <tbody>
    <tr>
      <td>
        Hi
      </td>
    </tr>
  </tbody>
</table>
<button>
  Toggle
</button>
```

# Mutations
```
INSERT table/tbody/tr
```

# Render
```js
container.querySelector("button").click();
```
```html
<table>
  <tbody />
</table>
<button>
  Toggle
</button>
```

# Mutations
```
REMOVE tr in table/tbody
```

# Render
```js
container.querySelector("button").click();
```
```html
<table>
  <tbody>
    <tr>
      <td>
        Hi
      </td>
    </tr>
  </tbody>
</table>
<button>
  Toggle
</button>
```

# Mutations
```
INSERT table/tbody/tr
```