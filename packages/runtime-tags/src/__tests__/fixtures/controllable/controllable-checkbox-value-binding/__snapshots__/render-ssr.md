# Render `{"checkboxType":"checkbox","hiddenType":"hidden"}`
```html
<input
  type="checkbox"
  value="a"
/>
<input
  type="hidden"
  value="b"
/>
```
## Console
```
ERROR "`valueChange` cannot be used on a `type=\"checkbox\"` `<input>` — user interaction can never change its `value`. Bind `checked` or `checkedValue` instead."
ERROR "`valueChange` cannot be used on a `type=\"hidden\"` `<input>` — user interaction can never change its `value`."
```
