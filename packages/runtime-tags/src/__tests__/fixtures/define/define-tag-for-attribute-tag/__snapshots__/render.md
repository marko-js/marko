# Render
```html
<div>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```

# Update `click("button")`
```html
<div
  class="selected"
>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```
## Change
```
UPDATE: .selected[class] null => "selected"
```

# Update `click("button")`
```html
<div
  class=""
>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```
## Change
```
UPDATE: div[class] "selected" => ""
```

# Update `click("button")`
```html
<div
  class="selected"
>
  <span>
    The thing
  </span>
</div>
<button>
  Toggle
</button>
```
## Change
```
UPDATE: .selected[class] "" => "selected"
```
