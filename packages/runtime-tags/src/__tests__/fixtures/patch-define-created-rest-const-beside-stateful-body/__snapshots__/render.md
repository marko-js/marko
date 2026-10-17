# Render `{"show":false,"open":true,"label":"a"}`
```html
<em
  title="a!"
>
  title
</em>
<button>
  toggle
</button>
```

# Update `{"show":true,"open":true,"label":"b"}`
```html
<em
  title="x"
>
  title
</em>
<em
  title="b!"
>
  title
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)[title] "a!" => "b!"
INSERT: em
UPDATE: em:nth-of-type(1)[title] null => "x"
UPDATE: em:nth-of-type(1)::text " " => "title"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em
  title="x"
>
  title
</em>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em + em
```

# Update `{"show":true,"open":true,"label":"c"}`

# Update `{"show":false,"open":true,"label":"d"}`
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: em
```

# Update `{"show":true,"open":true,"label":"e"}`
```html
<em
  title="x"
>
  title
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
UPDATE: em[title] null => "x"
UPDATE: em::text " " => "title"
```
