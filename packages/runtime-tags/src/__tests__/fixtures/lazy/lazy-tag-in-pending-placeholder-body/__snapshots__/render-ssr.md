# Render
```html
loading
```

# Update
```html
<button>
  0
</button>
<p>
  done
</p>
```
## Change
```
INSERT: p::text("done")
REMOVE: ::text("loading")
INSERT: button, p
```

# Update `click("button")`
```html
<button>
  1
</button>
<p>
  done
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
```
