# Render `{"theme":"light","accent":{"color":"red"},"on":true}`
```html
<div
  class="light"
>
  <p
    style="color:red"
  >
    content
  </p>
  <span
    class="base compact"
    style="color:red;margin:0"
  >
    badge
  </span>
</div>
```

# Update `{"theme":["dark",{"compact":true}],"accent":{"color":"red"},"on":true}`
```html
<div
  class="dark compact"
>
  <p
    style="color:red"
  >
    content
  </p>
  <span
    class="base compact"
    style="color:red;margin:0"
  >
    badge
  </span>
</div>
```
## Change
```
UPDATE: .dark.compact[class] "light" => "dark compact"
```

# Update `{"theme":["dark",{"compact":false}],"on":false}`
```html
<div
  class="dark"
>
  <p>
    content
  </p>
  <span
    class="base"
    style="margin:0"
  >
    badge
  </span>
</div>
```
## Change
```
UPDATE: .dark[class] "dark compact" => "dark"
UPDATE: .dark > p[style] "color:red" => null
UPDATE: .base[class] "base compact" => "base"
UPDATE: .base[style] "color:red;margin:0" => "margin:0"
```

# Update `{"accent":"color:blue","on":true}`
```html
<div>
  <p
    style="color:blue"
  >
    content
  </p>
  <span
    class="base compact"
    style="color:blue;margin:0"
  >
    badge
  </span>
</div>
```
## Change
```
UPDATE: div[class] "dark" => null
UPDATE: div > p[style] null => "color:blue"
UPDATE: .base.compact[class] "base" => "base compact"
UPDATE: .base.compact[style] "margin:0" => "color:blue;margin:0"
```
