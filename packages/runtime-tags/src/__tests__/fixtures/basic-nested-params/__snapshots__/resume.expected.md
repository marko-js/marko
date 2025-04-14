# Render
```html
<html>
  <head />
  <body>
    <button>
      Inc
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[3-->
      <div>
        <!--M_[5-->
        <div>
          1
          <!--M_*5 #text/0-->
          .
          <!---->
          2
          <!--M_*5 #text/1-->
        </div>
        <!--M_]4 #text/0-->
      </div>
      <!--M_]2 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,_.a={x:1,y:2,"ClosureScopes:y":_.h=new Set,"#childScope/1":_.e={"ConditionalScope:#text/0":_.b={outer:1,"ClosureScopes:outer":_.g=new Set,"#childScope/0":_.d={"ConditionalScope:#text/0":_.c={"ClosureSignalIndex:outer":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_2_renderer"},"ClosureSignalIndex:y":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"}},_.e,_.b,_.d,_.c],_.b._=_.a,_.c._=_.b,_.d.content=_._["__tests__/template.marko_2_renderer"](_.b),_.e.content=_._["__tests__/template.marko_1_renderer"](_.a),(_.g).add(_.c),(_.h).add(_.b),_.f),"__tests__/template.marko_0_x",1];M._.w()
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
    <button>
      Inc
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[3-->
      <div>
        <!--M_[5-->
        <div>
          2
          <!--M_*5 #text/0-->
          .
          <!---->
          2
          <!--M_*5 #text/1-->
        </div>
        <!--M_]4 #text/0-->
      </div>
      <!--M_]2 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,_.a={x:1,y:2,"ClosureScopes:y":_.h=new Set,"#childScope/1":_.e={"ConditionalScope:#text/0":_.b={outer:1,"ClosureScopes:outer":_.g=new Set,"#childScope/0":_.d={"ConditionalScope:#text/0":_.c={"ClosureSignalIndex:outer":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_2_renderer"},"ClosureSignalIndex:y":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"}},_.e,_.b,_.d,_.c],_.b._=_.a,_.c._=_.b,_.d.content=_._["__tests__/template.marko_2_renderer"](_.b),_.e.content=_._["__tests__/template.marko_1_renderer"](_.a),(_.g).add(_.c),(_.h).add(_.b),_.f),"__tests__/template.marko_0_x",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/div/div/#text0 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      Inc
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[3-->
      <div>
        <!--M_[5-->
        <div>
          3
          <!--M_*5 #text/0-->
          .
          <!---->
          2
          <!--M_*5 #text/1-->
        </div>
        <!--M_]4 #text/0-->
      </div>
      <!--M_]2 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,_.a={x:1,y:2,"ClosureScopes:y":_.h=new Set,"#childScope/1":_.e={"ConditionalScope:#text/0":_.b={outer:1,"ClosureScopes:outer":_.g=new Set,"#childScope/0":_.d={"ConditionalScope:#text/0":_.c={"ClosureSignalIndex:outer":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_2_renderer"},"ClosureSignalIndex:y":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"}},_.e,_.b,_.d,_.c],_.b._=_.a,_.c._=_.b,_.d.content=_._["__tests__/template.marko_2_renderer"](_.b),_.e.content=_._["__tests__/template.marko_1_renderer"](_.a),(_.g).add(_.c),(_.h).add(_.b),_.f),"__tests__/template.marko_0_x",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/div/div/#text0 "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <button>
      Inc
    </button>
    <!--M_*1 #button/0-->
    <div>
      <!--M_[3-->
      <div>
        <!--M_[5-->
        <div>
          4
          <!--M_*5 #text/0-->
          .
          <!---->
          2
          <!--M_*5 #text/1-->
        </div>
        <!--M_]4 #text/0-->
      </div>
      <!--M_]2 #text/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,_.a={x:1,y:2,"ClosureScopes:y":_.h=new Set,"#childScope/1":_.e={"ConditionalScope:#text/0":_.b={outer:1,"ClosureScopes:outer":_.g=new Set,"#childScope/0":_.d={"ConditionalScope:#text/0":_.c={"ClosureSignalIndex:outer":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_2_renderer"},"ClosureSignalIndex:y":0},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"}},_.e,_.b,_.d,_.c],_.b._=_.a,_.c._=_.b,_.d.content=_._["__tests__/template.marko_2_renderer"](_.b),_.e.content=_._["__tests__/template.marko_1_renderer"](_.a),(_.g).add(_.c),(_.h).add(_.b),_.f),"__tests__/template.marko_0_x",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/div/div/#text0 "3" => "4"
```