# Render `{"title":"First","label":"alpha","show":true,"$global":{"persisted":true}}`
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

# Update `{"title":"Second","label":"beta","show":true,"$global":{"persisted":true}}`
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
  alpha hit 1
</button>
```
## Change
```
UPDATE: .panel::text@10 "0" => "1"
```

# Update `{"title":"Third","label":"gamma","show":true,"$global":{"persisted":true}}`
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
  alpha hit 1
</button>
```
## Change
```
UPDATE: h1::text "Second" => "Third"
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
  alpha hit 2
</button>
```
## Change
```
UPDATE: .panel::text@10 "1" => "2"
```
