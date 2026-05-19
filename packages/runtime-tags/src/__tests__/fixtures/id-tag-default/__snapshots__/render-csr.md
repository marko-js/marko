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
  id="cM_0"
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
  id="cM_1"
>
  baz
</div>
```
## Change
```
UPDATE: #bar[id] "cM_0" => "bar"
UPDATE: #cM_1[id] "baz" => "cM_1"
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
  id="cM_2"
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
UPDATE: #cM_2[id] "bar" => "cM_2"
UPDATE: #baz[id] "cM_1" => "baz"
```
