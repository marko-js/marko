# Write
  <div><!M#0 1><button><!M#1 1>0</button></div><script>(M$h=[]).push((b,s)=>({1:{2:0}}),["packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko_0_clickCount",1,])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <div>
      <!--M#0 1-->
      <button>
        <!--M#1 1-->
        0
      </button>
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{2:0}}),["packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko_0_clickCount",1,])
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
      <!--M#0 1-->
      <button>
        <!--M#1 1-->
        0
      </button>
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{2:0}}),["packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko_0_clickCount",1,])
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
      <!--M#0 1-->
      <button>
        <!--M#1 1-->
        1
      </button>
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({1:{2:0}}),["packages/translator/src/__tests__/fixtures/basic-component/components/counter.marko_0_clickCount",1,])
    </script>
  </body>
</html>
```

# Mutations
```
html0/body1/div0/button1/#text1: "0" => "1"
```