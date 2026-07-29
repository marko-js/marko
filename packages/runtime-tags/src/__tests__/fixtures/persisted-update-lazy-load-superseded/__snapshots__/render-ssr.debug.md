# Render `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"home","label":"initial"}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<p
  class="home"
>
  initial
</p>
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="home"
>
  initial
</p>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"reject","label":"stale reject"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
```
## Change
```
REMOVE: .count + p
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"home","label":"after reject"}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<p
  class="home"
>
  after reject
</p>
```
## Change
```
INSERT: .home
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<p
  class="home"
>
  after reject
</p>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"resolve","label":"stale resolve"}}`
```html
<button
  class="count"
>
  clicked 2
</button>
```
## Change
```
REMOVE: .count + p
```

# Update `{"$global":{"persisted":true,"persistedCrossRoute":true,"view":"home","label":"after resolve"}}`
```html
<button
  class="count"
>
  clicked 2
</button>
<p
  class="home"
>
  after resolve
</p>
```
## Change
```
INSERT: .home
```

# Update
```js
document.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 3
</button>
<p
  class="home"
>
  after resolve
</p>
```
## Change
```
UPDATE: .count::text@8 "2" => "3"
```
