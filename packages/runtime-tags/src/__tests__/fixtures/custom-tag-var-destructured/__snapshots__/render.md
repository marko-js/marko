# Render
```html
<span>
  child:1
</span>
<button
  class="inc"
>
  inc
</button>
<button
  class="assign"
>
  assign
</button>
<div>
  1:fallback
</div>
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<span>
  child:2
</span>
<button
  class="inc"
>
  inc
</button>
<button
  class="assign"
>
  assign
</button>
<div>
  2:fallback
</div>
```
## Change
```
UPDATE: div::text@0 "1" => "2"
UPDATE: span::text@6 "1" => "2"
```

# Update
```js
container.querySelector("button.assign").click();
```
```html
<span>
  child:12
</span>
<button
  class="inc"
>
  inc
</button>
<button
  class="assign"
>
  assign
</button>
<div>
  12:fallback
</div>
```
## Change
```
UPDATE: div::text@0 "2" => "12"
UPDATE: span::text@6 "2" => "12"
```

# Update
```js
container.querySelector("button.inc").click();
```
```html
<span>
  child:13
</span>
<button
  class="inc"
>
  inc
</button>
<button
  class="assign"
>
  assign
</button>
<div>
  13:fallback
</div>
```
## Change
```
UPDATE: div::text@0 "12" => "13"
UPDATE: span::text@6 "12" => "13"
```
