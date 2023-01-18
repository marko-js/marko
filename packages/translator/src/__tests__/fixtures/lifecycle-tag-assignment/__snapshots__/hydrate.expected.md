# Render {}
```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        0
        <!--M#0 0-->
      </span>
      , was=
      <!---->
      false
      <!--M#0 1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M#0 2-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("#increment")?.click();

```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        1
        <!--M#0 0-->
      </span>
      , was=
      <!---->
      0
      <!--M#0 1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M#0 2-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/span1/#text0: "0" => "1"
#document/html0/body1/div0/#text4: "false" => "0"
```


# Render 
container.querySelector("#increment")?.click();

```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        2
        <!--M#0 0-->
      </span>
      , was=
      <!---->
      0
      <!--M#0 1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M#0 2-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/span1/#text0: "1" => "2"
```


# Render "ASYNC"
```html
<html>
  <head />
  <body>
    <div>
      x=
      <span>
        2
        <!--M#0 0-->
      </span>
      , was=
      <!---->
      1
      <!--M#0 1-->
    </div>
    <button
      id="increment"
    >
      Increment
    </button>
    <!--M#0 2-->
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{3:0}}),[0,"packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/#text4: "0" => "1"
```