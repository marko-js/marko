# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  plain
</button>
<section
  title="w-b"
>
  <b>
    body
  </b>
</section>
<i
  title="w-b"
/>
<p
  title="w-b"
>
  body
</p>
```
## Change
```
INSERT: button, section, i, p
UPDATE: section[title] null => "w-b"
INSERT: section > b
UPDATE: i[title] null => "w-b"
UPDATE: p[title] null => "w-b"
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  plain
</button>
<section
  title="w-c"
>
  <b>
    body
  </b>
</section>
<i
  title="w-c"
/>
<p
  title="w-c"
>
  body
</p>
```
## Change
```
UPDATE: section[title] "w-b" => "w-c"
UPDATE: i[title] "w-b" => "w-c"
UPDATE: p[title] "w-b" => "w-c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  plain
</button>
<section
  title="p-c"
/>
<i
  title="p-c"
/>
<p
  title="p-c"
>
  body
</p>
```
## Change
```
UPDATE: section[title] "w-c" => "p-c"
REMOVE: section > b
UPDATE: i[title] "w-c" => "p-c"
UPDATE: p[title] "w-c" => "p-c"
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  plain
</button>
<section
  title="p-d"
/>
<i
  title="p-d"
/>
<p
  title="p-d"
>
  body
</p>
```
## Change
```
UPDATE: section[title] "p-c" => "p-d"
UPDATE: i[title] "p-c" => "p-d"
UPDATE: p[title] "p-c" => "p-d"
```
