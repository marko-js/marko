# Write
  <div id=ref></div><!M#0 0><button id=increment>Increment</button><script>(M$h=[]).push((b,s)=>({0:{1:0}}),["packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x",0,])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    />
    <!--M#0 0-->
    <button
      id="increment"
    >
      Increment
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{1:0}}),["packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x",0,])
    </script>
  </body>
</html>
```

# Mutations
```
inserted html0
inserted html0/head0
inserted html0/body1
inserted html0/body1/div0
inserted html0/body1/#comment1
inserted html0/body1/button2
inserted html0/body1/button2/#text0
inserted html0/body1/script3
inserted html0/body1/script3/#text0
```


# Render "Hydrate"
```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      Mount 0
    </div>
    <!--M#0 0-->
    <button
      id="increment"
    >
      Increment
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{1:0}}),["packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x",0,])
    </script>
  </body>
</html>
```

# Mutations
```
inserted html0/body1/div0/#text0
```


# Render 
container.querySelector("#increment")?.click();

```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      Update 1
    </div>
    <!--M#0 0-->
    <button
      id="increment"
    >
      Increment
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{1:0}}),["packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x",0,])
    </script>
  </body>
</html>
```

# Mutations
```
removed  in html0/body1/div0
inserted html0/body1/div0/#text0
```


# Render 
container.querySelector("#increment")?.click();

```html
<html>
  <head />
  <body>
    <div
      id="ref"
    >
      Update 2
    </div>
    <!--M#0 0-->
    <button
      id="increment"
    >
      Increment
    </button>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{1:0}}),["packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x",0,])
    </script>
  </body>
</html>
```

# Mutations
```
removed  in html0/body1/div0
inserted html0/body1/div0/#text0
```