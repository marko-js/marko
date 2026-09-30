# Render
```html
<button
  id="change"
>
  change
</button>
<meta
  content="a"
  name="description"
/>
<meta
  content="fixed"
  name="static"
/>
```

# Update `click("#change")`
```html
<button
  id="change"
>
  change
</button>
<meta
  content="a!"
  name="description"
/>
<meta
  content="fixed"
  name="static"
/>
```
## Change
```
UPDATE: meta:nth-of-type(1)[content] "a" => "a!"
```
