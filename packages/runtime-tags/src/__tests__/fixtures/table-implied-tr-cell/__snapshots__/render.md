# Render
```html
<table>
  <tbody>
    <tr>
      <td>
        <button>
          0
        </button>
      </td>
    </tr>
  </tbody>
</table>
<table>
  <tbody>
    <tr>
      <td>
        0
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
      <td>
        <button>
          1
        </button>
      </td>
    </tr>
  </tbody>
</table>
<table>
  <tbody>
    <tr>
      <td>
        1
      </td>
    </tr>
  </tbody>
</table>
```
## Change
```
UPDATE: table:nth-of-type(1) > tbody > tr > td > button::text "0" => "1"
UPDATE: table:nth-of-type(2) > tbody > tr > td::text "0" => "1"
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
        <button>
          2
        </button>
      </td>
    </tr>
  </tbody>
</table>
<table>
  <tbody>
    <tr>
      <td>
        2
      </td>
    </tr>
  </tbody>
</table>
```
## Change
```
UPDATE: table:nth-of-type(1) > tbody > tr > td > button::text "1" => "2"
UPDATE: table:nth-of-type(2) > tbody > tr > td::text "1" => "2"
```
