# Render `{"name":"Marko"}`
```html
<textarea>
  [AB]Marko[!]
</textarea>
```

# Update `{"name":"Six"}`
```html
<textarea
  default-value="[AB]Six[!]"
>
  [AB]Marko[!]
</textarea>
```
## Change
```
REMOVE: textarea::text("[AB]Marko[!]")
INSERT: textarea::text("[AB]Six[!]")
```
