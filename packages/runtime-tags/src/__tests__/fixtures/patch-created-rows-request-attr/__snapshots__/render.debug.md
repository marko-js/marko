# Render `{"show":false,"label":"a"}`
```html
<h1>
  Rows reading a request value
</h1>
```

# Update `{"show":true,"label":"b"}`
```html
<h1>
  Rows reading a request value
</h1>
<button>
  x
</button>
<div
  title="b"
>
  1
</div>
```
## Change
```
INSERT: h1 + :is(button, div)
UPDATE: div[title] null => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<h1>
  Rows reading a request value
</h1>
<button>
  x
</button>
<div
  title="c"
>
  1
</div>
```
## Change
```
UPDATE: div[title] "b" => "c"
```
