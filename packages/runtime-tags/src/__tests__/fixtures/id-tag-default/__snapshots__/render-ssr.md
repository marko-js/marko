# Render
```html
<button>
  toggle
</button>
<div
  id="foo"
>
  foo
</div>
<div
  id="sM_1"
>
  bar
</div>
<div
  id="baz"
>
  baz
</div>
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
  id="foo"
>
  foo
</div>
<div
  id="bar"
>
  bar
</div>
<div
  id="cM_0"
>
  baz
</div>
```
## Change
```
UPDATE: #bar[id] "sM_1" => "bar"
UPDATE: #cM_0[id] "baz" => "cM_0"
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
  id="foo"
>
  foo
</div>
<div
  id="cM_1"
>
  bar
</div>
<div
  id="baz"
>
  baz
</div>
```
## Change
```
UPDATE: #cM_1[id] "bar" => "cM_1"
UPDATE: #baz[id] "cM_0" => "baz"
```
