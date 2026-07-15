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
```

# Update
```js
container.querySelector("button.count").click();
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
```
## Change
```
UPDATE: h1::text "First" => "Second"
```

# Update `{"title":"Second","label":"beta","warn":false,"$global":{"persisted":true}}`

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
```
## Change
```
UPDATE: h1::text "Second" => "Third"
```

# Update `{"title":"Third","label":"gamma","warn":true,"$global":{"persisted":true}}`

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
INSERT: .count + :is(.panel, .warn)
```

# Update
```js
container.querySelector("button.panel").click();
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
UPDATE: h1::text "Third" => "Fourth"
```

# Update `{"title":"Fourth","label":"delta","warn":false,"$global":{"persisted":true}}`

# Update
```js
container.querySelector("button.panel").click();
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
UPDATE: .panel::text@0 "gamma" => "delta"
REMOVE: .panel + p
UPDATE: .panel::text@10 "1" => "2"
```
