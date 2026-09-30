# Render
```html
<textarea>
  hello
</textarea>
<span>
  hello
</span>
```

# Update `type("textarea", "w")`
```html
<textarea
  default-value="hello"
>
  w
</textarea>
<span>
  w
</span>
```
## Change
```
UPDATE: span::text "hello" => "w"
```

# Update `type("textarea", "wor")`
```html
<textarea
  default-value="hello"
>
  wor
</textarea>
<span>
  wor
</span>
```
## Change
```
UPDATE: span::text "w" => "wor"
```

# Update `type("textarea", "world")`
```html
<textarea
  default-value="hello"
>
  world
</textarea>
<span>
  world
</span>
```
## Change
```
UPDATE: span::text "wor" => "world"
```
