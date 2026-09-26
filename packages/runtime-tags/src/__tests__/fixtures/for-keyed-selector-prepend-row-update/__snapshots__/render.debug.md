# Render
```html
<button
  class="prepend"
/>
<button
  class="row1"
>
  0:false
</button>
<button
  class="row2"
>
  0:false
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
  1:true
</button>
<button
  class="row2"
>
  0:false
</button>
```
## Change
```
UPDATE: .row1::text "0:false" => "1:true"
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
  0:false
</button>
<button
  class="row1"
>
  1:true
</button>
<button
  class="row2"
>
  0:false
</button>
```
## Change
```
INSERT: .prepend + .row0
UPDATE: .row0[class] null => "row0"
UPDATE: .row0::text " " => "0:false"
```

# Update
```js
document.querySelector("button.row2").click();
```
```html
<button
  class="prepend"
/>
<button
  class="row0"
>
  0:false
</button>
<button
  class="row1"
>
  1:false
</button>
<button
  class="row2"
>
  1:true
</button>
```
## Change
```
UPDATE: .row1::text "1:true" => "1:false"
UPDATE: .row2::text "0:false" => "1:true"
```
