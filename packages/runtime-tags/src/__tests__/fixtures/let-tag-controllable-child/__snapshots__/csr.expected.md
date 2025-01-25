# Render
```html
<button>
  1|1
</button>
<button>
  1|1
</button>
source=1
```

# Mutations
```
INSERT button0, button1, #text0, #text1
```

# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  2|2
</button>
<button>
  2|2
</button>
source=2
```

# Mutations
```
UPDATE #text1 "1" => "2"
UPDATE button0/#text0 "1" => "2"
UPDATE button1/#text0 "1" => "2"
UPDATE button0/#text2 "1" => "2"
UPDATE button1/#text2 "1" => "2"
```

# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  3|3
</button>
<button>
  3|3
</button>
source=3
```

# Mutations
```
UPDATE #text1 "2" => "3"
UPDATE button0/#text0 "2" => "3"
UPDATE button1/#text0 "2" => "3"
UPDATE button0/#text2 "2" => "3"
UPDATE button1/#text2 "2" => "3"
```

# Render
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  4|4
</button>
<button>
  4|4
</button>
source=4
```

# Mutations
```
UPDATE #text1 "3" => "4"
UPDATE button0/#text0 "3" => "4"
UPDATE button1/#text0 "3" => "4"
UPDATE button0/#text2 "3" => "4"
UPDATE button1/#text2 "3" => "4"
```