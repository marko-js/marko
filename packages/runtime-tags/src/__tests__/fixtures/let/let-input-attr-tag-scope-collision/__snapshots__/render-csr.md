# Render `{"submitLabel":"Install","open":true}`
```html
<div>
  <button>
    Install
  </button>
  <span />
</div>
```

# Update `{"submitLabel":"Save","open":true}`
```html
<div>
  <button>
    Save
  </button>
  <span />
</div>
```
## Change
```
UPDATE: div > button::text "Install" => "Save"
```

# Update `{"submitLabel":"Save","open":false}`
