# Render
```html
<table>
  <tbody>
    <tr>
      <th>
        <button>
          0
        </button>
      </th>
    </tr>
    <tr>
      <td>
        foot
      </td>
    </tr>
  </tbody>
</table>
```

# Update
```js
document.querySelector("button").click();
```
```html
<table>
  <tbody>
    <tr>
      <th>
        <button>
          1
        </button>
      </th>
    </tr>
    <tr>
      <td>
        foot
      </td>
    </tr>
  </tbody>
</table>
```
## Change
```
UPDATE: table > tbody > tr:nth-of-type(1) > th > button::text "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<table>
  <tbody>
    <tr>
      <th>
        <button>
          2
        </button>
      </th>
    </tr>
    <tr>
      <td>
        foot
      </td>
    </tr>
  </tbody>
</table>
```
## Change
```
UPDATE: table > tbody > tr:nth-of-type(1) > th > button::text "1" => "2"
```
