# Render `{"title":"First","label":"alpha","warn":false,"$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<button
  class="count"
>
  clicked 0
</button>
<button
  class="panel"
>
  alpha hit 0
</button>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<h1>
  First
</h1>
<button
  class="count"
>
  clicked 1
</button>
<button
  class="panel"
>
  alpha hit 0
</button>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"title":"Second","label":"beta","warn":false,"$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<button
  class="count"
>
  clicked 1
</button>
<button
  class="panel"
>
  alpha hit 0
</button>
```
## Change
```
UPDATE: h1::text "First" => "Second"
```

# Update `{"title":"Third","label":"gamma","warn":true,"$global":{"persisted":true}}`
```html
<h1>
  Third
</h1>
<button
  class="count"
>
  clicked 1
</button>
<button
  class="panel"
>
  alpha hit 0
</button>
```
## Change
```
UPDATE: h1::text "Second" => "Third"
```

# Update
```html
<h1>
  Third
</h1>
<button
  class="count"
>
  clicked 1
</button>
<button
  class="panel"
>
  gamma hit 0
</button>
<p
  class="warn"
>
  heads up
</p>
```
## Change
```
UPDATE: .panel::text@0 "alpha" => "gamma"
INSERT: .panel + .warn
```

# Update
```js
document.querySelector("button.panel").click();
```
```html
<h1>
  Third
</h1>
<button
  class="count"
>
  clicked 1
</button>
<button
  class="panel"
>
  gamma hit 1
</button>
<p
  class="warn"
>
  heads up
</p>
```
## Change
```
UPDATE: .panel::text@10 "0" => "1"
```

# Update update frame 1 of 2

# Update `{"title":"Fourth","label":"delta","warn":false,"$global":{"persisted":true}}`
```html
<h1>
  Fourth
</h1>
<button
  class="count"
>
  clicked 1
</button>
<button
  class="panel"
>
  delta hit 1
</button>
```
## Change
```
UPDATE: h1::text "Third" => "Fourth"
UPDATE: .panel::text@0 "gamma" => "delta"
REMOVE: .panel + p
```

# Update
```js
document.querySelector("button.panel").click();
```
```html
<h1>
  Fourth
</h1>
<button
  class="count"
>
  clicked 1
</button>
<button
  class="panel"
>
  delta hit 2
</button>
```
## Change
```
UPDATE: .panel::text@10 "1" => "2"
```
