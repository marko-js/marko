# Render
```html
<div />
<div />
<button>
  Update
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  0
</div>
<div>
  Dylan
</div>
<button>
  Update
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "" => "0"
UPDATE: div:nth-of-type(2)::text "" => "Dylan"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  1
</div>
<div>
  Michael
</div>
<button>
  Update
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "0" => "1"
UPDATE: div:nth-of-type(2)::text "Dylan" => "Michael"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  2
</div>
<div>
  Ryan
</div>
<button>
  Update
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "1" => "2"
UPDATE: div:nth-of-type(2)::text "Michael" => "Ryan"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  3
</div>
<div>
  Luke
</div>
<button>
  Update
</button>
```
## Change
```
UPDATE: div:nth-of-type(1)::text "2" => "3"
UPDATE: div:nth-of-type(2)::text "Ryan" => "Luke"
```

# Update
```js
container.querySelector("button").click();
```
