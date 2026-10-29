# Render `{"tag":"input","label":"a"}`
```html
<input
  title="a"
/>
```

# Update `{"tag":"input","label":"b"}`
```html
<input
  title="b"
/>
```
## Change
```
UPDATE: input[title] "a" => "b"
```

# Update `{"tag":"br","label":"c"}`
```html
<input
  title="c"
/>
```
## Change
```
UPDATE: input[title] "b" => "c"
```
