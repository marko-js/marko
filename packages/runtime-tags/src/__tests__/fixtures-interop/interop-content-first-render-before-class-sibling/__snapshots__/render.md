# Render
```html
<button
  id="class"
>
  show
</button>
<button
  class="thing"
>
  thing 0
</button>
```

# Update
```js
(document.querySelector(".thing")).click();
```
```html
<button
  id="class"
>
  show
</button>
<button
  class="thing"
>
  thing 1
</button>
```
## Change
```
UPDATE: .thing::text@6 "0" => "1"
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  show
</button>
<div>
  Content
</div>
<button
  class="thing"
>
  thing 1
</button>
```
## Change
```
INSERT: #class + div
INSERT: div::text("Content")
```

# Update
```js
(document.querySelector(".thing")).click();
```
```html
<button
  id="class"
>
  show
</button>
<div>
  Content
</div>
<button
  class="thing"
>
  thing 2
</button>
```
## Change
```
UPDATE: .thing::text@6 "1" => "2"
```
