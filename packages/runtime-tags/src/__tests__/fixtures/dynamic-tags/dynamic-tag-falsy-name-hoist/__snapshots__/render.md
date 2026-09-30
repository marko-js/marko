# Render `{"tag":null}`
```html
<input />
<button
  class="check"
/>
<button
  class="toggle"
/>
<output />
```

# Update `click(".check")`
```html
<input />
<button
  class="check"
/>
<button
  class="toggle"
/>
<output>
  true/1
</output>
```
## Change
```
UPDATE: output::text "" => "true/1"
```

# Update `click(".toggle")`
```html
<div>
  <input />
</div>
<button
  class="check"
/>
<button
  class="toggle"
/>
<output>
  true/1
</output>
```
## Change
```
INSERT: div
REMOVE: div + input
INSERT: div > input
```

# Update `click(".check")`

# Update `click(".toggle")`
```html
<input />
<button
  class="check"
/>
<button
  class="toggle"
/>
<output>
  true/1
</output>
```
## Change
```
INSERT: input
REMOVE: input + div
```

# Update `click(".check")`
