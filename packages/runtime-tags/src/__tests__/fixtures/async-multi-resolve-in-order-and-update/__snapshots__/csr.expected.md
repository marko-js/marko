# Render
```html
<button>
  increment
</button>
<p>
  1 * 2 = 
</p>
<p>
  2 * 2 = 
</p>
<p>
  3 * 2 = 
</p>
<p>
  4 * 2 = 
</p>
<p>
  5 * 2 = 
</p>
```

# Mutations
```
INSERT button, p0, p1, p2, p3, p4
```

# Render ASYNC
```html
<button>
  increment
</button>
<p>
  1 * 2 = 2
</p>
<p>
  2 * 2 = 4
</p>
<p>
  3 * 2 = 6
</p>
<p>
  4 * 2 = 8
</p>
<p>
  5 * 2 = 10
</p>
```

# Mutations
```
INSERT p0/#text3
REMOVE #text after p0/#text3
UPDATE p0/#text3 " " => "2"
INSERT p4/#text3
REMOVE #text after p4/#text3
UPDATE p4/#text3 " " => "10"
INSERT p3/#text3
REMOVE #text after p3/#text3
UPDATE p3/#text3 " " => "8"
INSERT p2/#text3
REMOVE #text after p2/#text3
UPDATE p2/#text3 " " => "6"
INSERT p1/#text3
REMOVE #text after p1/#text3
UPDATE p1/#text3 " " => "4"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  increment
</button>
<p>
  1 * 3 = 2
</p>
<p>
  2 * 3 = 4
</p>
<p>
  3 * 3 = 6
</p>
<p>
  4 * 3 = 8
</p>
<p>
  5 * 3 = 10
</p>
```

# Mutations
```
UPDATE p0/#text1 "2" => "3"
UPDATE p1/#text1 "2" => "3"
UPDATE p2/#text1 "2" => "3"
UPDATE p3/#text1 "2" => "3"
UPDATE p4/#text1 "2" => "3"
```

# Render ASYNC
```html
<button>
  increment
</button>
<p>
  1 * 3 = 
</p>
<p>
  2 * 3 = 
</p>
<p>
  3 * 3 = 
</p>
<p>
  4 * 3 = 
</p>
<p>
  5 * 3 = 
</p>
```

# Mutations
```
INSERT p0/#text3
REMOVE #document-fragment/#text after p0/#text3
INSERT p1/#text3
REMOVE #document-fragment/#text after p1/#text3
INSERT p2/#text3
REMOVE #document-fragment/#text after p2/#text3
INSERT p3/#text3
REMOVE #document-fragment/#text after p3/#text3
INSERT p4/#text3
REMOVE #document-fragment/#text after p4/#text3
```

# Render ASYNC
```html
<button>
  increment
</button>
<p>
  1 * 3 = 3
</p>
<p>
  2 * 3 = 6
</p>
<p>
  3 * 3 = 9
</p>
<p>
  4 * 3 = 12
</p>
<p>
  5 * 3 = 15
</p>
```

# Mutations
```
REMOVE #text after p0/#text2
INSERT p0/#text3
REMOVE #text after p4/#text2
INSERT p4/#text3
REMOVE #text after p3/#text2
INSERT p3/#text3
REMOVE #text after p2/#text2
INSERT p2/#text3
REMOVE #text after p1/#text2
INSERT p1/#text3
```