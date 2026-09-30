# Render
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<span>
  0
</span>
```

# Update `click("button.inc")`
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<span>
  1
</span>
```
## Change
```
UPDATE: span::text "0" => "1"
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
REMOVE: .toggle + span
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
<span>
  2
</span>
```
## Change
```
INSERT: .toggle + span
UPDATE: span::text " " => "2"
```

# Update `click("button.inc")`
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
<span>
  3
</span>
```
## Change
```
UPDATE: span::text "2" => "3"
```
