# Render {}
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

# Mutations
```
inserted button0, #text1, span2, #text3, span4
```


# Render 
container.querySelector("button").click();

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

# Mutations
```
button0/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click();

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

# Mutations
```
button0/#text0: "1" => "2"
span2/#text0: "0" => "1"
span4/#text0: "0" => "1"
```


# Render 
container.querySelector("button").click();

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

# Mutations
```
button0/#text0: "2" => "3"
span2/#text0: "1" => "2"
span4/#text0: "1" => "2"
```