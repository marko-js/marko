# Render
```html
<div
  class="bad"
>
  moved by the parser
</div>
<table>
  <tbody>
    <tr>
      <td>
        ok
      </td>
    </tr>
  </tbody>
</table>
```
## Console
```
ERROR "Invalid HTML structure. The browser will not build the DOM this markup describes, so hydration will not match:\n  `<div>` is not allowed in `<tbody>` and the HTML parser moves or drops it.\n  at packages/runtime-tags/src/__tests__/fixtures/html-structure-invalid-div-in-table/template.marko:3:5"
```
