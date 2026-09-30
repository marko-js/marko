# Render
```html
<div
  id="tags-api"
>
  tags
</div>
<button
  data-count="0"
  data-marko="{\"onclick\":\"handleClick _0 false\"}"
  id="class-api"
>
  click
</button>
```

# Update `click("#class-api")`
```html
<div
  id="tags-api"
>
  tags
</div>
<button
  data-count="1"
  data-marko="{\"onclick\":\"handleClick _0 false\"}"
  id="class-api"
>
  click
</button>
```
## Change
```
UPDATE: #class-api[data-count] "0" => "1"
```

# Update `click("#class-api")`
```html
<div
  id="tags-api"
>
  tags
</div>
<button
  data-count="2"
  data-marko="{\"onclick\":\"handleClick _0 false\"}"
  id="class-api"
>
  click
</button>
```
## Change
```
UPDATE: #class-api[data-count] "1" => "2"
```
