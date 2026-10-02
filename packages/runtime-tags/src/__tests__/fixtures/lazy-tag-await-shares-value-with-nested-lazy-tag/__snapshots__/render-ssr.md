# Render

# Update
```html
<button
  class="parent"
>
  parent:0
</button>
<button
  class="nested"
>
  nested:0
</button>
```
## Change
```
INSERT: .parent
INSERT: .parent::text("parent:")
INSERT: .parent::text@0 + ::text("0")
INSERT: .parent + .nested
INSERT: .nested::text("nested:")
INSERT: .nested::text@0 + ::text("0")
```

# Update
```js
document.querySelector(`.${name}`).click();
```
```html
<button
  class="parent"
>
  parent:1
</button>
<button
  class="nested"
>
  nested:0
</button>
```
## Change
```
UPDATE: .parent::text@7 "0" => "1"
```

# Update
```js
document.querySelector(`.${name}`).click();
```
```html
<button
  class="parent"
>
  parent:1
</button>
<button
  class="nested"
>
  nested:1
</button>
```
## Change
```
UPDATE: .nested::text@7 "0" => "1"
```
