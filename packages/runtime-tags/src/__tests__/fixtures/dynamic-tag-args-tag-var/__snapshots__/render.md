# Render
```html
<button>
  Count: 1
</button>
<div>
  Child: 1
</div>
<div>
  Parent: 1
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 2
</button>
<div>
  Child: 2
</div>
<div>
  Parent: 2
</div>
```
## Change
```
UPDATE: button::text@7 "1" => "2"
UPDATE: div:nth-of-type(1)::text@7 "1" => "2"
UPDATE: div:nth-of-type(2)::text@8 "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 3
</button>
<div>
  Child: 3
</div>
<div>
  Parent: 3
</div>
```
## Change
```
UPDATE: button::text@7 "2" => "3"
UPDATE: div:nth-of-type(1)::text@7 "2" => "3"
UPDATE: div:nth-of-type(2)::text@8 "2" => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 4
</button>
<div>
  Child: 4
</div>
<div>
  Parent: 4
</div>
```
## Change
```
UPDATE: button::text@7 "3" => "4"
UPDATE: div:nth-of-type(1)::text@7 "3" => "4"
UPDATE: div:nth-of-type(2)::text@8 "3" => "4"
```
