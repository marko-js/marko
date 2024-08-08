# Render {}
```html
<html>
  <head />
  <body>
    <div>
      {"foo":1,"bar":2}
      <!--M_*0 #text/0-->
    </div>
    <button>
      1
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{x:1}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko_0_x"];M._.d=1;M._.w()
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
      {"foo":1,"bar":3}
      <!--M_*0 #text/0-->
    </div>
    <button>
      2
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{x:1}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko_0_x"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button1/#text0: "1" => "2"
#document/html0/body1/div0/#text0: "{\"foo\":1,\"bar\":2}" => "{\"foo\":1,\"bar\":3}"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      {"foo":1,"bar":4}
      <!--M_*0 #text/0-->
    </div>
    <button>
      3
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{x:1}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko_0_x"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button1/#text0: "2" => "3"
#document/html0/body1/div0/#text0: "{\"foo\":1,\"bar\":3}" => "{\"foo\":1,\"bar\":4}"
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <div>
      {"foo":1,"bar":5}
      <!--M_*0 #text/0-->
    </div>
    <button>
      4
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.s=[_=&gt;(_.a={0:{x:1}})];M._.e=[0,"packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko_0_x"];M._.d=1;M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button1/#text0: "3" => "4"
#document/html0/body1/div0/#text0: "{\"foo\":1,\"bar\":4}" => "{\"foo\":1,\"bar\":5}"
```