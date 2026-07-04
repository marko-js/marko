# Render `{"$global":{"persisted":true,"search":[{"category":"beta"}]}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<div
  class="chips"
>
  <span
    class="chip"
  >
    alpha
  </span>
  <span
    class="chip chip--active"
  >
    beta
  </span>
  <span
    class="chip"
  >
    gamma
  </span>
</div>
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 1
</button>
<div
  class="chips"
>
  <span
    class="chip"
  >
    alpha
  </span>
  <span
    class="chip chip--active"
  >
    beta
  </span>
  <span
    class="chip"
  >
    gamma
  </span>
</div>
```
## Change
```
UPDATE: .count::text@8 "0" => "1"
```

# Update `{"$global":{"persisted":true,"search":[{"category":"gamma"}]}}`
```html
<button
  class="count"
>
  clicked 1
</button>
<div
  class="chips"
>
  <span
    class="chip"
  >
    alpha
  </span>
  <span
    class="chip"
  >
    beta
  </span>
  <span
    class="chip chip--active"
  >
    gamma
  </span>
</div>
```
## Change
```
UPDATE: .chips > span:nth-of-type(2)[class] "chip chip--active" => "chip"
UPDATE: .chip.chip--active[class] "chip" => "chip chip--active"
```

# Update
```js
container.querySelector("button.count").click();
```
```html
<button
  class="count"
>
  clicked 2
</button>
<div
  class="chips"
>
  <span
    class="chip"
  >
    alpha
  </span>
  <span
    class="chip"
  >
    beta
  </span>
  <span
    class="chip chip--active"
  >
    gamma
  </span>
</div>
```
## Change
```
UPDATE: .count::text@8 "1" => "2"
```
