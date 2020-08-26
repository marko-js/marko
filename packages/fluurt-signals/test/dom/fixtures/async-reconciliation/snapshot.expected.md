# Render {"label":"number"}
```html

```

# Mutations
```
inserted #text0
```


# Render "ASYNC"
```html
<button
  id="a"
>
  0
</button>
<button
  id="b"
>
  0
</button>
number0
```

# Mutations
```
removed #text in 
inserted button0, button1, #text2, #text3
inserted button0/#text0
inserted button1/#text0
#text2: "" => "number"
#text3: "" => "0"
```


# Render 
container.querySelector("#a").click();

```html
<button
  id="a"
>
  0
</button>
<button
  id="b"
>
  0
</button>
number0
```

# Mutations
```

```


# Render 
container.querySelector("#b").click();

```html
<button
  id="a"
>
  0
</button>
<button
  id="b"
>
  0
</button>
number0
```

# Mutations
```

```


# Render "ASYNC"
```html
<button
  id="a"
>
  1
</button>
<button
  id="b"
>
  0
</button>
number1
```

# Mutations
```
removed #text in button0
inserted button0/#text0
#text3: "0" => "1"
```


# Render {"label":"num"}
```html
<button
  id="a"
>
  1
</button>
<button
  id="b"
>
  0
</button>
num1
```

# Mutations
```
#text2: "number" => "num"
```


# Render {"label":"count"}
```html
<button
  id="a"
>
  1
</button>
<button
  id="b"
>
  0
</button>
count1
```

# Mutations
```
#text2: "num" => "count"
```


# Render "ASYNC"
```html
<button
  id="a"
>
  1
</button>
<button
  id="b"
>
  2
</button>
count3
```

# Mutations
```
removed #text in button1
inserted button1/#text0
#text3: "1" => "3"
```