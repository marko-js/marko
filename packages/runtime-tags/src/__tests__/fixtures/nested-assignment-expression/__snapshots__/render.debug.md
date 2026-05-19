# Render
```html
<button>
  0
</button>
used to be
<span>
  0
</span>
which should be the same as
<span>
  0
</span>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
used to be
<span>
  0
</span>
which should be the same as
<span>
  0
</span>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
used to be
<span>
  1
</span>
which should be the same as
<span>
  1
</span>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: span:nth-of-type(1)::text "0" => "1"
UPDATE: span:nth-of-type(2)::text "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
used to be
<span>
  2
</span>
which should be the same as
<span>
  2
</span>
```
## Change
```
UPDATE: button::text "2" => "3"
UPDATE: span:nth-of-type(1)::text "1" => "2"
UPDATE: span:nth-of-type(2)::text "1" => "2"
```
