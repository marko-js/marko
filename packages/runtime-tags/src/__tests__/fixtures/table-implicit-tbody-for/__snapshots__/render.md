# Render
```html
<table>
  <tbody>
    <tr>
      <td>
        a
      </td>
    </tr>
    <tr>
      <td>
        b
      </td>
    </tr>
  </tbody>
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
  <tbody />
</table>
<button>
  toggle
</button>
```
## Change
```
REMOVE: table > tbody > :is(tr, tr)
```

# Update
```js
document.querySelector("button").click();
```
```html
<table>
  <tbody>
    <tr>
      <td>
        c
      </td>
    </tr>
  </tbody>
</table>
<button>
  toggle
</button>
```
## Change
```
INSERT: table > tbody > tr
```
