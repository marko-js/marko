# Render {}
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