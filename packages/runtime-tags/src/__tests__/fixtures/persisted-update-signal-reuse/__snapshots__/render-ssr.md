# Render `{"label":"alpha","count":3,"$global":{"persisted":true}}`
```html
<button>
  toggle
</button>
<div>
  alpha
</div>
<span>
  3 items
</span>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div
  class="alpha"
>
  alpha
</div>
<span>
  3 items
</span>
```
## Change
```
UPDATE: .alpha[class] null => "alpha"
```

# Update `{"label":"beta","count":7,"$global":{"persisted":true}}`
```html
<button>
  toggle
</button>
<div
  class="beta"
>
  beta
</div>
<span>
  7 items
</span>
```
## Change
```
UPDATE: .beta::text "alpha" => "beta"
UPDATE: span::text@0 "3" => "7"
UPDATE: .beta[class] "alpha" => "beta"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<div>
  beta
</div>
<span>
  7 items
</span>
```
## Change
```
UPDATE: div[class] "beta" => null
```
