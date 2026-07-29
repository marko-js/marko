# Render `{"label":"first","$global":{"persisted":true}}`
```html
<div
  class="target"
  data-label="first"
>
  effect saw first
</div>
<p
  class="static"
>
  page body
</p>
```

# Update `{"label":"second","$global":{"persisted":true}}`
```html
<div
  class="target"
  data-label="second"
>
  effect saw second
</div>
<p
  class="static"
>
  page body
</p>
```
## Change
```
UPDATE: .target[data-label] "first" => "second"
REMOVE: .target::text("effect saw first")
INSERT: .target::text("effect saw second")
```

# Update update frame 1 of 2

# Update `{"label":"third","$global":{"persisted":true}}`
```html
<div
  class="target"
  data-label="third"
>
  effect saw third
</div>
<p
  class="static"
>
  page body
</p>
```
## Change
```
UPDATE: .target[data-label] "second" => "third"
REMOVE: .target::text("effect saw second")
INSERT: .target::text("effect saw third")
```
