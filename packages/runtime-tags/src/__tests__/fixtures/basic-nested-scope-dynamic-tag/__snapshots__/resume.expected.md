# Render
```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <!--M_[3-->
    <button>
      0
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <!--M_]2 #text/0-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={count:0,"ClosureScopes:count":_.d=new Set},{"ConditionalScope:#text/0":_.b={_:_.a,"ClosureSignalIndex:count":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},_.b],(_.d).add(_.b),_.c),3,"__tests__/template.marko_1_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment1 after html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#text
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
    <!--M_[3-->
    <button>
      1
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <!--M_]2 #text/0-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={count:0,"ClosureScopes:count":_.d=new Set},{"ConditionalScope:#text/0":_.b={_:_.a,"ClosureSignalIndex:count":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},_.b],(_.d).add(_.b),_.c),3,"__tests__/template.marko_1_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "0" => "1"
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
    <!--M_[3-->
    <button>
      2
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <!--M_]2 #text/0-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={count:0,"ClosureScopes:count":_.d=new Set},{"ConditionalScope:#text/0":_.b={_:_.a,"ClosureSignalIndex:count":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},_.b],(_.d).add(_.b),_.c),3,"__tests__/template.marko_1_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
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
    <!--M_[3-->
    <button>
      3
      <!--M_*3 #text/1-->
    </button>
    <!--M_*3 #button/0-->
    <!--M_]2 #text/0-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={count:0,"ClosureScopes:count":_.d=new Set},{"ConditionalScope:#text/0":_.b={_:_.a,"ClosureSignalIndex:count":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"},_.b],(_.d).add(_.b),_.c),3,"__tests__/template.marko_1_count"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/button/#text "2" => "3"
```