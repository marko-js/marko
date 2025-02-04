# Render
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    0
  </button>
  <!---->
</div>
```

# Mutations
```
INSERT div
```

# Render
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    1
  </button>
  <!---->
</div>
```

# Mutations
```
UPDATE div/button2/#text "0" => "1"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    2
  </button>
  <!---->
</div>
```

# Mutations
```
UPDATE div/button2/#text "1" => "2"
```

# Render
```js
container.querySelector("#inner").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <!---->
</div>
```

# Mutations
```
INSERT div/#text
REMOVE button after div/button1
```

# Render
```js
container.querySelector("#inner").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    2
  </button>
  <!---->
</div>
```

# Mutations
```
INSERT div/button2
REMOVE #text after div/button1
UPDATE div/button2/#text " " => "2"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    3
  </button>
  <!---->
</div>
```

# Mutations
```
UPDATE div/button2/#text "2" => "3"
```

# Render
```js
container.querySelector("#outer").click();
```
```html
<div>
  <button
    id="outer"
  />
</div>
```

# Mutations
```
INSERT div/#text
REMOVE button after div/button
REMOVE button after div/button
REMOVE #comment after div/button
```

# Render
```js
container.querySelector("#outer").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    3
  </button>
  <!---->
</div>
```

# Mutations
```
INSERT div/button1, #text, div/#comment
REMOVE #text after div/button0
INSERT div/button2
REMOVE #text after div/button1
UPDATE div/button2/#text " " => "3"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    4
  </button>
  <!---->
</div>
```

# Mutations
```
UPDATE div/button2/#text "3" => "4"
```