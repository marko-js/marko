# Render
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 0
```

# Update `click("button.inc")`
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 1
```
## Change
```
UPDATE: ::text@13 "0" => "1"
```

# Update `click("button.toggle")`
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
```
## Change
```
REMOVE: .toggle + ::text("The count is ")
REMOVE: .toggle + ::text("1")
```

# Update `click("button.inc")`

# Update `click("button.toggle")`
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 2
```
## Change
```
INSERT: .toggle + :is(::text("The count is "), ::text("2"))
UPDATE: ::text@13 "" => "2"
```

# Update `click("button.inc")`
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 3
```
## Change
```
UPDATE: ::text@13 "2" => "3"
```
