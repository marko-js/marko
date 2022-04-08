# Write
  <div><!M#0 0><button><!M#1 0>0</button></div><script>(M$h=[]).push((b,s)=>({"0":[,,,,0]}),["packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko_0_clickCount",0,])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div>
      <!--M#0 0-->
      <button>
        <!--M#1 0-->
        0
      </button>
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({"0":[,,,,0]}),["packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko_0_clickCount",0,])
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
inserted html0/body1/div0/#comment0
inserted html0/body1/div0/button1
inserted html0/body1/div0/button1/#comment0
inserted html0/body1/div0/button1/#text1
inserted html0/body1/script1
inserted html0/body1/script1/#text0
```


# Render "Hydrate"
```html
<html>
  <head />
  <body>
    <div>
      <!--M#0 0-->
      <button>
        <!--M#1 0-->
        0
      </button>
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({"0":[,,,,0]}),["packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko_0_clickCount",0,])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click();

```html
<html>
  <head />
  <body>
    <div>
      <!--M#0 0-->
      <button>
        <!--M#1 0-->
        1
      </button>
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({"0":[,,,,0]}),["packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko_0_clickCount",0,])
    </script>
  </body>
</html>
```

# Mutations
```
html0/body1/div0/button1/#text1: "0" => "1"
```


# Render 
container.querySelector("button").click();

```html
<html>
  <head />
  <body>
    <div>
      <!--M#0 0-->
      <button>
        <!--M#1 0-->
        2
      </button>
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({"0":[,,,,0]}),["packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko_0_clickCount",0,])
    </script>
  </body>
</html>
```

# Mutations
```
html0/body1/div0/button1/#text1: "1" => "2"
```


# Render 
container.querySelector("button").click();

```html
<html>
  <head />
  <body>
    <div>
      <!--M#0 0-->
      <button>
        <!--M#1 0-->
        3
      </button>
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({"0":[,,,,0]}),["packages/translator/src/__tests__/fixtures/basic-unused-ref/template.marko_0_clickCount",0,])
    </script>
  </body>
</html>
```

# Mutations
```
html0/body1/div0/button1/#text1: "2" => "3"
```