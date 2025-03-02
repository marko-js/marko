# Render
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M_*2 #text/0-->
       
      <!---->
      1
      <!--M_*2 #text/1-->
    </div>
    <button>
      1
      <!--M_*2 #text/3-->
    </button>
    <!--M_*2 #button/2-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{"#text/0!":_.a={y:1},"#text/0(":"__tests__/template.marko_1_renderer"},2:_.a}),2,"__tests__/template.marko_1_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M_*2 #text/0-->
       
      <!---->
      2
      <!--M_*2 #text/1-->
    </div>
    <button>
      2
      <!--M_*2 #text/3-->
    </button>
    <!--M_*2 #button/2-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{"#text/0!":_.a={y:1},"#text/0(":"__tests__/template.marko_1_renderer"},2:_.a}),2,"__tests__/template.marko_1_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text3 "1" => "2"
UPDATE html/body/button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M_*2 #text/0-->
       
      <!---->
      3
      <!--M_*2 #text/1-->
    </div>
    <button>
      3
      <!--M_*2 #text/3-->
    </button>
    <!--M_*2 #button/2-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{"#text/0!":_.a={y:1},"#text/0(":"__tests__/template.marko_1_renderer"},2:_.a}),2,"__tests__/template.marko_1_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text3 "2" => "3"
UPDATE html/body/button/#text "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div>
      Hello 
      <!---->
      Ryan
      <!--M_*2 #text/0-->
       
      <!---->
      4
      <!--M_*2 #text/1-->
    </div>
    <button>
      4
      <!--M_*2 #text/3-->
    </button>
    <!--M_*2 #button/2-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={1:{"#text/0!":_.a={y:1},"#text/0(":"__tests__/template.marko_1_renderer"},2:_.a}),2,"__tests__/template.marko_1_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/#text3 "3" => "4"
UPDATE html/body/button/#text "3" => "4"
```