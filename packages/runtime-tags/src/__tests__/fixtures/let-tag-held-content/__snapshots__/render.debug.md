# Render
```html
<div
  class="foo"
>
  default
</div>
<button />
```

# Update
```html
<div
  class="foo"
>
  Div
</div>
<button />
```
## Change
```
REMOVE: .foo::text("default")
INSERT: .foo::text("Div")
```

# Update
```js
document.querySelector("button").click();
```
```html
<span
  class="foo"
>
  Div
</span>
<button />
```
## Change
```
REMOVE: .foo
INSERT: .foo
UPDATE: .foo[class] null => "foo"
INSERT: .foo::text("Div")
```
