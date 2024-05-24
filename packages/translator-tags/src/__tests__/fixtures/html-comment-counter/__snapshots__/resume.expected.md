# Render {}
```html
<html>
  <head />
  <body>
    <div>
      <button>
        0
        <!--M*0 #text/1-->
      </button>
      <!--M*0 #button/0-->
      <!--0 + 0 = 0-->
      <!--M*0 #comment/2-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{count:0}}),[0,"packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <button>
        1
        <!--M*0 #text/1-->
      </button>
      <!--M*0 #button/0-->
      <!--1 + 1 = 2-->
      <!--M*0 #comment/2-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{count:0}}),[0,"packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button0/#text0: "0" => "1"
#document/html0/body1/div0/#comment2: "0 + 0 = 0" => "1 + 1 = 2"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <button>
        2
        <!--M*0 #text/1-->
      </button>
      <!--M*0 #button/0-->
      <!--2 + 2 = 4-->
      <!--M*0 #comment/2-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{count:0}}),[0,"packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button0/#text0: "1" => "2"
#document/html0/body1/div0/#comment2: "1 + 1 = 2" => "2 + 2 = 4"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      <button>
        3
        <!--M*0 #text/1-->
      </button>
      <!--M*0 #button/0-->
      <!--3 + 3 = 6-->
      <!--M*0 #comment/2-->
    </div>
    <script>
      (M$h=[]).push(_=&gt;(_.a={0:{count:0}}),[0,"packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko_0_count",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button0/#text0: "2" => "3"
#document/html0/body1/div0/#comment2: "2 + 2 = 4" => "3 + 3 = 6"
```