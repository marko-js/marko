# Render
```html
<button
  id="show"
>
  show
</button>
<button
  id="clear"
>
  clear
</button>
<div />
<div />
<div />
```

# Update `click("button#show")`
```html
<button
  id="show"
>
  show
</button>
<button
  id="clear"
>
  clear
</button>
<div />
<div>
  <span>
    first
  </span>
</div>
<div>
  <span>
    second
  </span>
</div>
```
## Change
```
INSERT: div:nth-of-type(2) > span
INSERT: div:nth-of-type(3) > span
UPDATE: div:nth-of-type(2) > span::text " " => "first"
UPDATE: div:nth-of-type(3) > span::text " " => "second"
```

# Update `click("button#clear")`
```html
<button
  id="show"
>
  show
</button>
<button
  id="clear"
>
  clear
</button>
<div>
  destroyed firstdestroyed second
</div>
```
## Change
```
REMOVE: div + div
REMOVE: div + div
INSERT: div::text("destroyed first")
INSERT: div::text@0 + ::text("destroyed second")
```
