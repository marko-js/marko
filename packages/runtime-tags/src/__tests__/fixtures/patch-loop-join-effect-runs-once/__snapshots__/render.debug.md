# Render `{"items":["p","q"]}`
```html
<p>
  m0p
</p>
<p>
  m0q
</p>
<button>
  +
</button>
```
## Console
```
LOG "run" "pm0"
LOG "run" "qm0"
```

# Update `{"items":["r","q"]}`
```html
<p>
  m0r
</p>
<p>
  m0q
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "m0p" => "m0r"
```
## Console
```
LOG "run" "rm0"
```
