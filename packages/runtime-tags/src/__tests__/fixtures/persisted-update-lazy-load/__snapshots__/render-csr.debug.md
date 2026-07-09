# Render `{"title":"First","label":"alpha","$global":{"persisted":true}}`
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

# Update `{"title":"Second","label":"beta","$global":{"persisted":true}}`
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

# Update `{"title":"Second","label":"beta","$global":{"persisted":true}}`

# Update
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
  beta hit 0
</button>
```
## Change
```
INSERT: .count + .panel
```

# Update
```js
container.querySelector("button.panel").click();
```
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
  beta hit 1
</button>
```
## Change
```
UPDATE: .panel::text@9 "0" => "1"
```

# Update `{"title":"Third","label":"gamma","$global":{"persisted":true}}`
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
  beta hit 1
</button>
```
## Change
```
UPDATE: h1::text "Second" => "Third"
```

# Update `{"title":"Third","label":"gamma","$global":{"persisted":true}}`

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
  gamma hit 2
</button>
```
## Change
```
UPDATE: .panel::text@0 "beta" => "gamma"
UPDATE: .panel::text@10 "1" => "2"
```
