# Render `{"t":"text","v":"a","attrs":{"type":"text","value":"a"},"rest":{"value":"a"}}`
```html
<input
  class="a"
  type="text"
  value="a"
/>
<input
  class="b"
  type="text"
  value="a"
/>
<input
  class="c"
  type="text"
  value="a"
/>
<input
  class="d"
  type="text"
  value="a"
/>
<input
  class="e"
  type="text"
  value="a"
/>
<input
  class="f"
  type="text"
  value="a"
/>
<input
  class="g"
  type="text"
  value="a"
/>
<input
  class="h"
  type="text"
  value="s"
/>
<input
  class="i"
  type="text"
/>
```

# Update `{"t":"checkbox","v":"x","attrs":{"type":"checkbox","value":"x"},"rest":{"value":"x"}}`
```html
<input
  class="a"
  type="checkbox"
  value="x"
/>
<input
  class="b"
  type="checkbox"
  value="x"
/>
<input
  class="c"
  type="checkbox"
  value="x"
/>
<input
  class="d"
  type="checkbox"
  value="x"
/>
<input
  class="e"
  type="checkbox"
  value="x"
/>
<input
  class="f"
  type="checkbox"
  value="x"
/>
<input
  class="g"
  type="checkbox"
  value="x"
/>
<input
  class="h"
  type="checkbox"
  value="s"
/>
<input
  class="i"
  type="checkbox"
/>
```
## Change
```
UPDATE: .h[type] "text" => "checkbox"
UPDATE: .h[value] "s" => "s"
UPDATE: .i[type] "text" => "checkbox"
UPDATE: .b[type] "text" => "checkbox"
UPDATE: .b[value] "a" => "x"
UPDATE: .b[value] "a" => "x"
UPDATE: .a[type] "text" => "checkbox"
UPDATE: .a[value] "a" => "x"
UPDATE: .a[value] "a" => "x"
UPDATE: .c[type] "text" => "checkbox"
UPDATE: .c[value] "a" => "x"
UPDATE: .c[value] "a" => "x"
UPDATE: .f[type] "text" => "checkbox"
UPDATE: .f[value] "a" => "x"
UPDATE: .f[value] "a" => "x"
UPDATE: .e[type] "text" => "checkbox"
UPDATE: .e[value] "a" => "x"
UPDATE: .e[value] "a" => "x"
UPDATE: .d[type] "text" => "checkbox"
UPDATE: .d[value] "a" => "x"
UPDATE: .d[value] "a" => "x"
UPDATE: .g[type] "text" => "checkbox"
UPDATE: .g[value] "a" => "x"
UPDATE: .g[value] "a" => "x"
```

# Update `{"t":"text","v":"y","attrs":{"type":"text","value":"y"},"rest":{"value":"y"}}`
```html
<input
  class="a"
  type="text"
  value="y"
/>
<input
  class="b"
  type="text"
  value="y"
/>
<input
  class="c"
  type="text"
  value="y"
/>
<input
  class="d"
  type="text"
  value="y"
/>
<input
  class="e"
  type="text"
  value="y"
/>
<input
  class="f"
  type="text"
  value="y"
/>
<input
  class="g"
  type="text"
  value="y"
/>
<input
  class="h"
  type="text"
  value="s"
/>
<input
  class="i"
  type="text"
/>
```
## Change
```
UPDATE: .h[type] "checkbox" => "text"
UPDATE: .i[type] "checkbox" => "text"
UPDATE: .b[value] "x" => "y"
UPDATE: .b[type] "checkbox" => "text"
UPDATE: .a[value] "x" => "y"
UPDATE: .a[type] "checkbox" => "text"
UPDATE: .c[value] "x" => "y"
UPDATE: .c[type] "checkbox" => "text"
UPDATE: .f[value] "x" => "y"
UPDATE: .f[type] "checkbox" => "text"
UPDATE: .e[value] "x" => "y"
UPDATE: .e[type] "checkbox" => "text"
UPDATE: .d[value] "x" => "y"
UPDATE: .d[type] "checkbox" => "text"
UPDATE: .g[value] "x" => "y"
UPDATE: .g[type] "checkbox" => "text"
```

# Update
```js
for (const input of document.querySelectorAll("input")) {
input.value = "typed";
}
```

# Update `{"t":"checkbox","v":"y","attrs":{"type":"checkbox","value":"y"},"rest":{"value":"y"}}`
```html
<input
  class="a"
  type="checkbox"
  value="y"
/>
<input
  class="b"
  type="checkbox"
  value="y"
/>
<input
  class="c"
  type="checkbox"
  value="y"
/>
<input
  class="d"
  type="checkbox"
  value="y"
/>
<input
  class="e"
  type="checkbox"
  value="y"
/>
<input
  class="f"
  type="checkbox"
  value="y"
/>
<input
  class="g"
  type="checkbox"
  value="y"
/>
<input
  class="h"
  type="checkbox"
  value="s"
/>
<input
  class="i"
  type="checkbox"
/>
```
## Change
```
UPDATE: .h[type] "text" => "checkbox"
UPDATE: .h[value] "s" => "s"
UPDATE: .h[value] "typed" => "s"
UPDATE: .i[type] "text" => "checkbox"
UPDATE: .i[value] null => null
UPDATE: .i[value] "typed" => null
UPDATE: .b[type] "text" => "checkbox"
UPDATE: .b[value] "y" => "y"
UPDATE: .b[value] "typed" => "y"
UPDATE: .a[type] "text" => "checkbox"
UPDATE: .a[value] "y" => "y"
UPDATE: .a[value] "typed" => "y"
UPDATE: .c[type] "text" => "checkbox"
UPDATE: .c[value] "y" => "y"
UPDATE: .c[value] "typed" => "y"
UPDATE: .f[type] "text" => "checkbox"
UPDATE: .f[value] "y" => "y"
UPDATE: .f[value] "typed" => "y"
UPDATE: .e[type] "text" => "checkbox"
UPDATE: .e[value] "y" => "y"
UPDATE: .e[value] "typed" => "y"
UPDATE: .d[type] "text" => "checkbox"
UPDATE: .d[value] "y" => "y"
UPDATE: .d[value] "typed" => "y"
UPDATE: .g[type] "text" => "checkbox"
UPDATE: .g[value] "y" => "y"
UPDATE: .g[value] "typed" => "y"
```
