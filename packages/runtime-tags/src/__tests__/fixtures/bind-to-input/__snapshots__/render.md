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

# Update
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
## Change
```
UPDATE: #controlled[data-internal] "0" => "1"
UPDATE: #controlled::text "0" => "1"
UPDATE: #uncontrolled::text "0" => "1"
```

# Update
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
## Change
```
UPDATE: #uncontrolled[data-internal] "0" => "1"
```

# Update
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
## Change
```
UPDATE: #controlled[data-internal] "1" => "2"
UPDATE: #controlled::text "1" => "2"
UPDATE: #uncontrolled::text "1" => "2"
```

# Update
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
## Change
```
UPDATE: #uncontrolled[data-internal] "1" => "2"
```

# Update
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
## Change
```
UPDATE: #controlled[data-internal] "2" => "3"
UPDATE: #controlled::text "2" => "3"
UPDATE: #uncontrolled::text "2" => "3"
```

# Update
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
## Change
```
UPDATE: #uncontrolled[data-internal] "2" => "3"
```
