# Render {}
```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 0
```

# Mutations
```
inserted button0, button1, #text2, #text3
```


# Render 
container.querySelector("button.inc").click();

```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 1
```

# Mutations
```
#text3: "0" => "1"
```


# Render 
container.querySelector("button.toggle").click();

```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
```

# Mutations
```
inserted #text2
removed #text after #text2
removed #text after #text2
```


# Render 
container.querySelector("button.inc").click();

```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
```

# Mutations
```

```


# Render 
container.querySelector("button.toggle").click();

```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 2
```

# Mutations
```
inserted #text2
inserted #text3
removed #text after #text3
#text3: "" => "2"
```


# Render 
container.querySelector("button.inc").click();

```html
<button
  class="inc"
/>
<button
  class="toggle"
/>
The count is 3
```

# Mutations
```
#text3: "2" => "3"
```