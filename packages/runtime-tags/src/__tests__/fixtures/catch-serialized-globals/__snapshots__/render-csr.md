# Render `{"$global":{"settings":{"message":"a globals message long enough to dedup"},"serializedGlobals":["settings"]}}`

# Update
```html
<button>
  ERROR!
</button>
```
## Change
```
INSERT: button
UPDATE: button::text " " => "ERROR!"
```

# Update `click("button")`
```html
<button>
  a globals message long enough to dedup
</button>
```
## Change
```
UPDATE: button::text "ERROR!" => "a globals message long enough to dedup"
```
