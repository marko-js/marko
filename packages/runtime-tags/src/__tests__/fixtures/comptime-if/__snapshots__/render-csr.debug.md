# Render `{"rows":[{"name":"Widget","price":"$3"}]}`
```html
<table>
  <tbody>
    <tr>
      <td>
        Widget
      </td>
      <td>
        $3
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td
        colspan="2"
      >
        end of table
      </td>
    </tr>
  </tfoot>
</table>
```

# Update `{"rows":[{"name":"Widget","price":"$3"},{"name":"Gizmo","price":"$5"}]}`
```html
<table>
  <tbody>
    <tr>
      <td>
        Widget
      </td>
      <td>
        $3
      </td>
    </tr>
    <tr>
      <td>
        Gizmo
      </td>
      <td>
        $5
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td
        colspan="2"
      >
        end of table
      </td>
    </tr>
  </tfoot>
</table>
```
## Change
```
INSERT: table > tbody > tr:nth-of-type(1) + tr
INSERT: table > tbody > tr:nth-of-type(2) > td
INSERT: table > tbody > tr:nth-of-type(2) > td:nth-of-type(1) + td
UPDATE: table > tbody > tr:nth-of-type(2) > td:nth-of-type(1)::text " " => "Gizmo"
UPDATE: table > tbody > tr:nth-of-type(2) > td:nth-of-type(2)::text " " => "$5"
```
