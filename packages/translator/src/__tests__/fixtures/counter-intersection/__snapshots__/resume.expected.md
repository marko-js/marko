# Render {}
```html
<html>
  <head />
  <body>
    <div>
      <button
        class="a"
      >
        0
        <!--M#0 #text/1-->
      </button>
      <!--M#0 #button/0-->
       + 
      <button
        class="b"
      >
        0
        <!--M#0 #text/3-->
      </button>
      <!--M#0 #button/2-->
       = 
      <!---->
      0
      <!--M#0 #text/4-->
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{a:0,b:0}}),[0,"packages/translator/src/__tests__/fixtures/counter-intersection/template.marko_0",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button.a").click()

```html
<html>
  <head />
  <body>
    <div>
      <button
        class="a"
      >
        10
        <!--M#0 #text/1-->
      </button>
      <!--M#0 #button/0-->
       + 
      <button
        class="b"
      >
        0
        <!--M#0 #text/3-->
      </button>
      <!--M#0 #button/2-->
       = 
      <!---->
      10
      <!--M#0 #text/4-->
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{a:0,b:0}}),[0,"packages/translator/src/__tests__/fixtures/counter-intersection/template.marko_0",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button0/#text0: "0" => "10"
#document/html0/body1/div0/#text7: "0" => "10"
```


# Render 
container.querySelector("button.b").click()

```html
<html>
  <head />
  <body>
    <div>
      <button
        class="a"
      >
        10
        <!--M#0 #text/1-->
      </button>
      <!--M#0 #button/0-->
       + 
      <button
        class="b"
      >
        5
        <!--M#0 #text/3-->
      </button>
      <!--M#0 #button/2-->
       = 
      <!---->
      15
      <!--M#0 #text/4-->
    </div>
    <script>
      (M$h=[]).push((b,s)=&gt;({0:{a:0,b:0}}),[0,"packages/translator/src/__tests__/fixtures/counter-intersection/template.marko_0",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button3/#text0: "0" => "5"
#document/html0/body1/div0/#text7: "10" => "15"
```