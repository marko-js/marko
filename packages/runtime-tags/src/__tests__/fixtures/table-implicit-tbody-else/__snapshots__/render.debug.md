# Render
```html
<table>
  <caption>
    loading
  </caption>
</table>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<table>
  <tr>
    <td>
      loaded
    </td>
  </tr>
</table>
<button>
  toggle
</button>
```
## Change
```
REMOVE: table > caption
INSERT: table > tr
```

# Update
```js
document.querySelector("button").click();
```
```html
<table>
  <caption>
    loading
  </caption>
</table>
<button>
  toggle
</button>
```
## Change
```
REMOVE: table > tr
INSERT: table > caption
```
