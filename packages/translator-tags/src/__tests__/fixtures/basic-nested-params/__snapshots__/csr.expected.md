# Render {}
```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      1.2
    </div>
  </div>
</div>
```

# Mutations
```
inserted button0, div1
```


# Render 
container.querySelector("button").click()

```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      2.2
    </div>
  </div>
</div>
```

# Mutations
```
div1/div0/div0/#text0: "1" => "2"
```


# Render 
container.querySelector("button").click()

```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      3.2
    </div>
  </div>
</div>
```

# Mutations
```
div1/div0/div0/#text0: "2" => "3"
```


# Render 
container.querySelector("button").click()

```html
<button>
  Inc
</button>
<div>
  <div>
    <div>
      4.2
    </div>
  </div>
</div>
```

# Mutations
```
div1/div0/div0/#text0: "3" => "4"
```