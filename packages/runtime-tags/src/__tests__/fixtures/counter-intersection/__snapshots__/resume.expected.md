# Render
```html
<html>
  <head />
  <body>
    <div>
      <button
        class="a"
      >
        0
        <!--M_*0 #text/1-->
      </button>
      <!--M_*0 #button/0-->
       + 
      <button
        class="b"
      >
        0
        <!--M_*0 #text/3-->
      </button>
      <!--M_*0 #button/2-->
       = 
      <!---->
      0
      <!--M_*0 #text/4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{a:0,b:0}}),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("button.a").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        class="a"
      >
        10
        <!--M_*0 #text/1-->
      </button>
      <!--M_*0 #button/0-->
       + 
      <button
        class="b"
      >
        0
        <!--M_*0 #text/3-->
      </button>
      <!--M_*0 #button/2-->
       = 
      <!---->
      10
      <!--M_*0 #text/4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{a:0,b:0}}),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button0/#text "0" => "10"
UPDATE html/body/div/#text2 "0" => "10"
```

# Render
```js
container.querySelector("button.b").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <button
        class="a"
      >
        10
        <!--M_*0 #text/1-->
      </button>
      <!--M_*0 #button/0-->
       + 
      <button
        class="b"
      >
        5
        <!--M_*0 #text/3-->
      </button>
      <!--M_*0 #button/2-->
       = 
      <!---->
      15
      <!--M_*0 #text/4-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{a:0,b:0}}),0,"__tests__/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button1/#text "0" => "5"
UPDATE html/body/div/#text2 "10" => "15"
```