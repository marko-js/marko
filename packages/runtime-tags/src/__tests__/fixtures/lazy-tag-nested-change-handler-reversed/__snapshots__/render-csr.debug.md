# Render
```html
<button
  class="page"
>
  page:0
</button>
```

# Update
```html
<button
  class="page"
>
  page:0
</button>
<span>
  child:0:0
</span>
```
## Change
```
INSERT: .page + span
```

# Update
```html
<button
  class="page"
>
  page:0
</button>
<span>
  child:0:0
</span>
<button
  class="grand-child"
>
  grand-child:0
</button>
```
## Change
```
INSERT: span + .grand-child
```

# Update
```js
document.querySelector(".grand-child").click();
```
```html
<button
  class="page"
>
  page:0
</button>
<span>
  child:0:1
</span>
<button
  class="grand-child"
>
  grand-child:1
</button>
```
## Change
```
UPDATE: span::text@8 "0" => "1"
UPDATE: .grand-child::text@12 "0" => "1"
```

# Update
```js
document.querySelector(".page").click();
```
```html
<button
  class="page"
>
  page:1
</button>
<span>
  child:1:1
</span>
<button
  class="grand-child"
>
  grand-child:1
</button>
```
## Change
```
UPDATE: .page::text@5 "0" => "1"
UPDATE: span::text@6 "0" => "1"
```
