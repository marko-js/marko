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
  title="b"
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
UPDATE: em:nth-of-type(1)[title] null => "b"
UPDATE: em:nth-of-type(1)::text " " => "title"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em
  title="b"
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
```html
<em
  title="c"
>
  title
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em[title] "b" => "c"
```

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
  title="e"
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
UPDATE: em[title] null => "e"
UPDATE: em::text " " => "title"
```
