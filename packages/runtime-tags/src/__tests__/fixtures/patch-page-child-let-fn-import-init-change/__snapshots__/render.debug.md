# Render `{"alt":false,"more":false,"label":"a"}`

# Update `{"alt":false,"more":true,"label":"b"}`
## Console
```
ERROR Error: A patch renders a value of the <let> "f" other than the one the page holds: its initial value changed.
```

## Patch rejected (navigate)

# Update `{"alt":false,"more":false,"label":"c"}`

# Update `{"alt":true,"more":true,"label":"d"}`
## Console
```
ERROR Error: A patch renders a value of the <let> "f" other than the one the page holds: its initial value changed.
```

## Patch rejected (navigate)
