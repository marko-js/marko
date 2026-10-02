# Render

# Update
```html
<button
  class="parent"
>
  parent:0
</button>
```
## Change
```
INSERT: .parent
UPDATE: .parent::text@0 "" => "parent"
UPDATE: .parent::text@7 "" => "0"
```

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
INSERT: .parent + .nested
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
