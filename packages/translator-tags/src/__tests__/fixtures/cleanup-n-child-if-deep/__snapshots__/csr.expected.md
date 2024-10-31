# Render {}
```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
    <div>
      Inner a
    </div>
    <span>
      Inner a
    </span>
    <p>
      Inner a
    </p>
  </div>
</div>
<!---->
```

# Mutations
```
inserted button0, button1, button2, pre3, div4, #comment5
inserted #text
removed #text in pre3
inserted #text
removed #text in pre3
inserted pre3/#text0
```


# Render 
container.querySelector("button#inner").click()

```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
  </div>
</div>
<!---->
```

# Mutations
```
inserted div4/div3/#text3
removed #text in pre3
inserted pre3/#text0
removed div after div4/div3/#text3
removed span after div4/div3/#text3
removed p after div4/div3/#text3
```


# Render 
container.querySelector("button#middle").click()

```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
</div>
<!---->
```

# Mutations
```
inserted div4/#text3
removed #text in pre3
inserted pre3/#text0
removed div after div4/#text3
```


# Render 
container.querySelector("button#outer").click()

```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!---->
```

# Mutations
```
inserted #text4
removed #text in pre3
inserted pre3/#text0
removed div after #text4
```


# Render 
container.querySelector("button#inner").click()

```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!---->
```

# Mutations
```

```


# Render 
container.querySelector("button#middle").click()

```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!---->
```

# Mutations
```

```


# Render 
container.querySelector("button#outer").click()

```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Inner mounted
Middle mounted
Outer mounted
</pre>
<div>
  <div>
    Outer a
  </div>
  <span>
    Outer a
  </span>
  <p>
    Outer a
  </p>
  <div>
    <div>
      Middle a
    </div>
    <span>
      Middle a
    </span>
    <p>
      Middle a
    </p>
    <div>
      Inner a
    </div>
    <span>
      Inner a
    </span>
    <p>
      Inner a
    </p>
  </div>
</div>
<!---->
```

# Mutations
```
inserted div4
removed #text after div4
inserted div4/div3
removed #text after div4/div3
inserted div4/div3/div3
inserted div4/div3/span4
inserted div4/div3/p5
removed #text after div4/div3/p5
removed #text in pre3
inserted #text
removed #text in pre3
inserted #text
removed #text in pre3
inserted pre3/#text0
```


# Render 
container.querySelector("button#outer").click()

```html
<button
  id="outer"
>
  Toggle Outer
</button>
<button
  id="middle"
>
  Toggle Middle
</button>
<button
  id="inner"
>
  Toggle Inner
</button>
<pre>
  
Outer mounted
Middle mounted
Inner mounted
Inner destroyed
Middle destroyed
Outer destroyed
Inner mounted
Middle mounted
Outer mounted
Inner destroyed
Middle destroyed
Outer destroyed
</pre>
<!---->
```

# Mutations
```
inserted #text4
removed #text in pre3
inserted #text
removed #text in pre3
inserted #text
removed #text in pre3
inserted pre3/#text0
removed div after #text4
```