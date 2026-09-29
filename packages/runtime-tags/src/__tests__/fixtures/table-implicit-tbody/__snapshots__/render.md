# Render
```html
<table>
  <tbody>
    <tr
      class="rows-1"
    >
      <th>
        1 rows
      </th>
    </tr>
    <tr>
      <td>
        a
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>
        a
      </td>
    </tr>
  </tfoot>
</table>
<button>
  add
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<table>
  <tbody>
    <tr
      class="rows-2"
    >
      <th>
        2 rows
      </th>
    </tr>
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
  <tfoot>
    <tr>
      <td>
        a+b
      </td>
    </tr>
  </tfoot>
</table>
<button>
  add
</button>
```
## Change
```
UPDATE: table > tfoot > tr > td::text "a" => "a+b"
UPDATE: .rows-2[class] "rows-1" => "rows-2"
UPDATE: .rows-2 > th::text@0 "1" => "2"
INSERT: table > tbody > tr:nth-of-type(2) + tr
```
