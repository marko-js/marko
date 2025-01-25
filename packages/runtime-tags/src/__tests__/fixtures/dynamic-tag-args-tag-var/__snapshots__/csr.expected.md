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

# Mutations
```
INSERT button, div0, div1
```

# Render
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

# Mutations
```
UPDATE button/#text1 "1" => "2"
UPDATE div0/#text1 "1" => "2"
UPDATE div1/#text1 "1" => "2"
```

# Render
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

# Mutations
```
UPDATE button/#text1 "2" => "3"
UPDATE div0/#text1 "2" => "3"
UPDATE div1/#text1 "2" => "3"
```

# Render
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

# Mutations
```
UPDATE button/#text1 "3" => "4"
UPDATE div0/#text1 "3" => "4"
UPDATE div1/#text1 "3" => "4"
```