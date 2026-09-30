# Render `{"foo":"hello"}`
```html
<p>
  hello
</p>
<button>
  0
</button>
```

# Update `click("button")`
```html
<p>
  hello
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```
