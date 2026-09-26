# Render
```html
<button
  class="prepend"
/>
<button
  class="row1"
>
  0:n0
</button>
<button
  class="row2"
>
  0:n0
</button>
```

# Update
```js
document.querySelector("button.row1").click();
```
```html
<button
  class="prepend"
/>
<button
  class="row1"
>
  1:n1
</button>
<button
  class="row2"
>
  0:n1
</button>
```
## Change
```
UPDATE: .row1::text "0:n0" => "1:n1"
UPDATE: .row2::text "0:n0" => "0:n1"
```

# Update
```js
document.querySelector("button.prepend").click();
```
```html
<button
  class="prepend"
/>
<button
  class="row0"
>
  0:n1
</button>
<button
  class="row1"
>
  1:n1
</button>
<button
  class="row2"
>
  0:n1
</button>
```
## Change
```
INSERT: .prepend + .row0
UPDATE: .row0[class] null => "row0"
UPDATE: .row0::text " " => "0:n1"
```

# Update
```js
document.querySelector("button.row1").click();
```
```html
<button
  class="prepend"
/>
<button
  class="row0"
>
  0:n2
</button>
<button
  class="row1"
>
  2:n2
</button>
<button
  class="row2"
>
  0:n2
</button>
```
## Change
```
UPDATE: .row1::text "1:n1" => "2:n2"
UPDATE: .row2::text "0:n1" => "0:n2"
UPDATE: .row0::text "0:n1" => "0:n2"
```
