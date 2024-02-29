# Render {}
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
inserted div0
```


# Render 
container.querySelector("#count").click()

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
div0/button2/#text0: "0" => "1"
```


# Render 
container.querySelector("#count").click()

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
div0/button2/#text0: "1" => "2"
```


# Render 
container.querySelector("#inner").click()

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
inserted div0/#text2
removed button after div0/#text2
```


# Render 
container.querySelector("#inner").click()

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
inserted div0/button2
removed #text after div0/button2
div0/button2/#text0: " " => "2"
```


# Render 
container.querySelector("#count").click()

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
div0/button2/#text0: "2" => "3"
```


# Render 
container.querySelector("#outer").click()

```html
<div>
  <button
    id="outer"
  />
</div>
```

# Mutations
```
inserted div0/#text1
removed button after div0/#text1
removed button after div0/#text1
removed #comment after div0/#text1
```


# Render 
container.querySelector("#outer").click()

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
inserted div0/button1
inserted #text
inserted div0/#comment3
removed #text after div0/#comment3
inserted div0/button2
removed #text after div0/button2
div0/button2/#text0: " " => "3"
```


# Render 
container.querySelector("#count").click()

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
div0/button2/#text0: "3" => "4"
```