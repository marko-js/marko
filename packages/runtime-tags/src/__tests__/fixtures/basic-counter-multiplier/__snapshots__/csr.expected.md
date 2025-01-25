# Render
```html
<button
  id="multiplier"
>
  increase multiplier (1)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  0
</div>
```

# Mutations
```
INSERT button0, button1, div
```

# Render
```js
container.querySelector("button#count").click();
```
```html
<button
  id="multiplier"
>
  increase multiplier (1)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  1
</div>
```

# Mutations
```
UPDATE div/#text "0" => "1"
```

# Render
```js
container.querySelector("button#count").click();
```
```html
<button
  id="multiplier"
>
  increase multiplier (1)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  2
</div>
```

# Mutations
```
UPDATE div/#text "1" => "2"
```

# Render
```js
container.querySelector("button#multiplier").click();
```
```html
<button
  id="multiplier"
>
  increase multiplier (2)
</button>
<button
  id="count"
>
  increase count
</button>
<div>
  4
</div>
```

# Mutations
```
UPDATE button0/#text1 "1" => "2"
UPDATE div/#text "2" => "4"
```