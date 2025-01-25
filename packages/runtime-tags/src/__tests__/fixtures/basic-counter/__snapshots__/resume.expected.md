# Render
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
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button").click();
```
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
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
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
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
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
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{clickCount:0}}),0,"__tests__/template.marko_0_clickCount",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button/#text "2" => "3"
```