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

# Mutations
```
INSERT button, div0, div1, div2
```

# Render
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

# Mutations
```
UPDATE div2[id] "baz" => "cM_1"
UPDATE div1[id] "cM_0" => "bar"
```

# Render
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

# Mutations
```
UPDATE div2[id] "cM_1" => "baz"
UPDATE div1[id] "bar" => "cM_2"
```