# Render {}
```html
<html>
  <head />
  <body>
    <div>
      <button>
        0
        <!--M_*0 #text/1-->
      </button>
      <!--M_*0 #button/0-->
      <!--0 + 0 = 0-->
      <!--M_*0 #comment/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{count:0}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko_0_count"];M._.d=1;M._.w()
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
        <!--M_*0 #text/1-->
      </button>
      <!--M_*0 #button/0-->
      <!--1 + 1 = 2-->
      <!--M_*0 #comment/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{count:0}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko_0_count"];M._.d=1;M._.w()
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
        <!--M_*0 #text/1-->
      </button>
      <!--M_*0 #button/0-->
      <!--2 + 2 = 4-->
      <!--M_*0 #comment/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{count:0}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko_0_count"];M._.d=1;M._.w()
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
        <!--M_*0 #text/1-->
      </button>
      <!--M_*0 #button/0-->
      <!--3 + 3 = 6-->
      <!--M_*0 #comment/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{count:0}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko_0_count"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button0/#text0: "2" => "3"
#document/html0/body1/div0/#comment2: "2 + 2 = 4" => "3 + 3 = 6"
```