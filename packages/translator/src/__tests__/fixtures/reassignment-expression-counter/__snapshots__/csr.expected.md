# Render {}
```html
<button
  id="addTwo"
>
  0
</button>
<button
  id="triple"
>
  0
</button>
<button
  id="cube"
>
  0
</button>
```

# Mutations
```
inserted button0, button1, button2
```


# Render 
container.querySelector("#addTwo").click();

```html
<button
  id="addTwo"
>
  2
</button>
<button
  id="triple"
>
  2
</button>
<button
  id="cube"
>
  2
</button>
```

# Mutations
```
button0/#text0: "0" => "2"
button1/#text0: "0" => "2"
button2/#text0: "0" => "2"
```


# Render 
container.querySelector("#triple").click();

```html
<button
  id="addTwo"
>
  6
</button>
<button
  id="triple"
>
  6
</button>
<button
  id="cube"
>
  6
</button>
```

# Mutations
```
button0/#text0: "2" => "6"
button1/#text0: "2" => "6"
button2/#text0: "2" => "6"
```


# Render 
container.querySelector("#cube").click();

```html
<button
  id="addTwo"
>
  216
</button>
<button
  id="triple"
>
  216
</button>
<button
  id="cube"
>
  216
</button>
```

# Mutations
```
button0/#text0: "6" => "216"
button1/#text0: "6" => "216"
button2/#text0: "6" => "216"
```