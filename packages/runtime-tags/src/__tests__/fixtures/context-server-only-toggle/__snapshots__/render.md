# Render `{"$global":{"theme":"light"}}`
```html
<button
  class="show"
>
  show
</button>
<button
  class="add"
>
  add
</button>
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  class="show"
>
  show
</button>
<button
  class="add"
>
  add
</button>
<span>
  light
</span>
```
## Change
```
INSERT: .add + span
UPDATE: span::text " " => "light"
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  class="show"
>
  show
</button>
<button
  class="add"
>
  add
</button>
```
## Change
```
REMOVE: .add + span
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  class="show"
>
  show
</button>
<button
  class="add"
>
  add
</button>
<span>
  light
</span>
```
## Change
```
INSERT: .add + span
UPDATE: span::text " " => "light"
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  class="show"
>
  show
</button>
<button
  class="add"
>
  add
</button>
<span>
  light
</span>
<span>
  light
</span>
```
## Change
```
INSERT: span:nth-of-type(1) + span
UPDATE: span:nth-of-type(2)::text " " => "light"
```

# Update
```js
container.querySelector(selector).click();
```
```html
<button
  class="show"
>
  show
</button>
<button
  class="add"
>
  add
</button>
<span>
  light
</span>
<span>
  light
</span>
<span>
  light
</span>
```
## Change
```
INSERT: span:nth-of-type(2) + span
UPDATE: span:nth-of-type(3)::text " " => "light"
```
