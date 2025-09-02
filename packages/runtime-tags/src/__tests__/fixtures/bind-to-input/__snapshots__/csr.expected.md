# Render
```html
<button
  data-internal="0"
  id="controlled"
>
  0
</button>
<button
  data-internal="0"
  id="uncontrolled"
>
  0
</button>
```

# Mutations
```
INSERT button0, button1
```

# Render
```js
container.querySelector("#controlled").click();
```
```html
<button
  data-internal="1"
  id="controlled"
>
  1
</button>
<button
  data-internal="0"
  id="uncontrolled"
>
  1
</button>
```

# Mutations
```
UPDATE button0[data-internal] "0" => "1"
UPDATE button0/#text "0" => "1"
UPDATE button1/#text "0" => "1"
```

# Render
```js
container.querySelector("#uncontrolled").click();
```
```html
<button
  data-internal="1"
  id="controlled"
>
  1
</button>
<button
  data-internal="1"
  id="uncontrolled"
>
  1
</button>
```

# Mutations
```
UPDATE button1[data-internal] "0" => "1"
```

# Render
```js
container.querySelector("#controlled").click();
```
```html
<button
  data-internal="2"
  id="controlled"
>
  2
</button>
<button
  data-internal="1"
  id="uncontrolled"
>
  2
</button>
```

# Mutations
```
UPDATE button0[data-internal] "1" => "2"
UPDATE button0/#text "1" => "2"
UPDATE button1/#text "1" => "2"
```

# Render
```js
container.querySelector("#uncontrolled").click();
```
```html
<button
  data-internal="2"
  id="controlled"
>
  2
</button>
<button
  data-internal="2"
  id="uncontrolled"
>
  2
</button>
```

# Mutations
```
UPDATE button1[data-internal] "1" => "2"
```

# Render
```js
container.querySelector("#controlled").click();
```
```html
<button
  data-internal="3"
  id="controlled"
>
  3
</button>
<button
  data-internal="2"
  id="uncontrolled"
>
  3
</button>
```

# Mutations
```
UPDATE button0[data-internal] "2" => "3"
UPDATE button0/#text "2" => "3"
UPDATE button1/#text "2" => "3"
```

# Render
```js
container.querySelector("#uncontrolled").click();
```
```html
<button
  data-internal="3"
  id="controlled"
>
  3
</button>
<button
  data-internal="3"
  id="uncontrolled"
>
  3
</button>
```

# Mutations
```
UPDATE button1[data-internal] "2" => "3"
```