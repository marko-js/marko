# Render `{"label":"a"}`
```html
<p>
  a
</p>
<div
  title="a"
/>
<button>
  0
</button>
```

# Update
```js
document.querySelector("div").click();
```
## Console
```
LOG "clicked a"
```

# Update `{"label":"b"}`
```html
<p>
  b
</p>
<div
  title="b"
/>
<button>
  0
</button>
```
## Change
```
UPDATE: p::text "a" => "b"
UPDATE: div[title] "a" => "b"
```

# Update
```js
document.querySelector("div").click();
```
## Console
```
LOG "clicked b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  b
</p>
<div
  title="b"
/>
<em>
  b
</em>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
INSERT: div + em
UPDATE: em::text " " => "b"
```

# Update `{"label":"c"}`
```html
<p>
  c
</p>
<div
  title="c"
/>
<em>
  c
</em>
<button>
  1
</button>
```
## Change
```
UPDATE: p::text "b" => "c"
UPDATE: div[title] "b" => "c"
UPDATE: em::text "b" => "c"
```

# Update
```js
document.querySelector("div").click();
```
## Console
```
LOG "clicked c"
```
