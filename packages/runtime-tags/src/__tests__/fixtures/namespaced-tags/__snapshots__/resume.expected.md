# Render `{"value":"<a href=#></a>"}`

```html
<html>
  <head />
  <body>
    <div>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
        <!--M_*1 #text/1-->
        <a
          href="#bar"
          ns="http://www.w3.org/2000/svg"
        >
          Hi
        </a>
        <!--M_|1 #text/2 2-->
      </svg>
      <math>
        <a
          href="#"
          ns="http://www.w3.org/1998/Math/MathML"
        />
        <!--M_*1 #text/3-->
        <a
          href="#bar"
          ns="http://www.w3.org/1998/Math/MathML"
        >
          Hi
        </a>
        <!--M_|1 #text/4 4-->
      </math>
      <div>
        <a
          href="#"
          ns="http://www.w3.org/1999/xhtml"
        />
        <!--M_*7 #text/0-->
      </div>
      <!--M_|1 #text/5 6-->
      <button
        class="toggle-parent"
      >
        Toggle Parent
      </button>
      <!--M_*1 #button/6-->
      <button
        class="toggle-child"
      >
        Toggle Child
      </button>
      <!--M_*1 #button/7-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.d={input_value:"\x3Ca href=#&gt;\x3C/a&gt;",Parent:"div",Child:"a","ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"a","ConditionalScope:#text/4":_.b={},"ConditionalRenderer:#text/4":"a","ClosureScopes:input_value":_.f=new Set,"ConditionalScope:#text/5":_.c={},"ConditionalRenderer:#text/5":"div"},2:_.a,4:_.b,6:_.c,7:_.g={_:_.d,"ClosureSignalIndex:input_value":0,"#ClosestBranchId":6}},(_.f).add(_.g),_.e),1,"__tests__/template.marko_0_Parent_Child",1,"__tests__/template.marko_0_Child",1,"__tests__/template.marko_0_Parent"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/svg/a0[ns] null => "http://www.w3.org/2000/svg"
UPDATE html/body/div/svg/a1[ns] null => "http://www.w3.org/2000/svg"
UPDATE html/body/div/math/a0[ns] null => "http://www.w3.org/1998/Math/MathML"
UPDATE html/body/div/math/a1[ns] null => "http://www.w3.org/1998/Math/MathML"
UPDATE html/body/div/div/a[ns] null => "http://www.w3.org/1999/xhtml"
```

# Render
```js
container.querySelector(".toggle-parent").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
        <!--M_*1 #text/1-->
        <a
          href="#bar"
          ns="http://www.w3.org/2000/svg"
        >
          Hi
        </a>
        <!--M_|1 #text/2 2-->
      </svg>
      <math>
        <a
          href="#"
          ns="http://www.w3.org/1998/Math/MathML"
        />
        <!--M_*1 #text/3-->
        <a
          href="#bar"
          ns="http://www.w3.org/1998/Math/MathML"
        >
          Hi
        </a>
        <!--M_|1 #text/4 4-->
      </math>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
      </svg>
      <!--M_|1 #text/5 6-->
      <button
        class="toggle-parent"
      >
        Toggle Parent
      </button>
      <!--M_*1 #button/6-->
      <button
        class="toggle-child"
      >
        Toggle Child
      </button>
      <!--M_*1 #button/7-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.d={input_value:"\x3Ca href=#&gt;\x3C/a&gt;",Parent:"div",Child:"a","ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"a","ConditionalScope:#text/4":_.b={},"ConditionalRenderer:#text/4":"a","ClosureScopes:input_value":_.f=new Set,"ConditionalScope:#text/5":_.c={},"ConditionalRenderer:#text/5":"div"},2:_.a,4:_.b,6:_.c,7:_.g={_:_.d,"ClosureSignalIndex:input_value":0,"#ClosestBranchId":6}},(_.f).add(_.g),_.e),1,"__tests__/template.marko_0_Parent_Child",1,"__tests__/template.marko_0_Child",1,"__tests__/template.marko_0_Parent"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/svg1
REMOVE div after html/body/div/svg1
INSERT #text
INSERT html/body/div/svg1/a
REMOVE #text after html/body/div/svg1/a
UPDATE html/body/div/svg1/a[ns] null => "http://www.w3.org/2000/svg"
```

# Render
```js
container.querySelector(".toggle-parent").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
        <!--M_*1 #text/1-->
        <a
          href="#bar"
          ns="http://www.w3.org/2000/svg"
        >
          Hi
        </a>
        <!--M_|1 #text/2 2-->
      </svg>
      <math>
        <a
          href="#"
          ns="http://www.w3.org/1998/Math/MathML"
        />
        <!--M_*1 #text/3-->
        <a
          href="#bar"
          ns="http://www.w3.org/1998/Math/MathML"
        >
          Hi
        </a>
        <!--M_|1 #text/4 4-->
      </math>
      <div>
        <a
          href="#"
          ns="http://www.w3.org/1999/xhtml"
        />
      </div>
      <!--M_|1 #text/5 6-->
      <button
        class="toggle-parent"
      >
        Toggle Parent
      </button>
      <!--M_*1 #button/6-->
      <button
        class="toggle-child"
      >
        Toggle Child
      </button>
      <!--M_*1 #button/7-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.d={input_value:"\x3Ca href=#&gt;\x3C/a&gt;",Parent:"div",Child:"a","ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"a","ConditionalScope:#text/4":_.b={},"ConditionalRenderer:#text/4":"a","ClosureScopes:input_value":_.f=new Set,"ConditionalScope:#text/5":_.c={},"ConditionalRenderer:#text/5":"div"},2:_.a,4:_.b,6:_.c,7:_.g={_:_.d,"ClosureSignalIndex:input_value":0,"#ClosestBranchId":6}},(_.f).add(_.g),_.e),1,"__tests__/template.marko_0_Parent_Child",1,"__tests__/template.marko_0_Child",1,"__tests__/template.marko_0_Parent"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/div
REMOVE svg after html/body/div/div
INSERT #text
INSERT html/body/div/div/a
REMOVE #text after html/body/div/div/a
UPDATE html/body/div/div/a[ns] null => "http://www.w3.org/1999/xhtml"
```

# Render
```js
container.querySelector(".toggle-parent").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
        <!--M_*1 #text/1-->
        <a
          href="#bar"
          ns="http://www.w3.org/2000/svg"
        >
          Hi
        </a>
        <!--M_|1 #text/2 2-->
      </svg>
      <math>
        <a
          href="#"
          ns="http://www.w3.org/1998/Math/MathML"
        />
        <!--M_*1 #text/3-->
        <a
          href="#bar"
          ns="http://www.w3.org/1998/Math/MathML"
        >
          Hi
        </a>
        <!--M_|1 #text/4 4-->
      </math>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
      </svg>
      <!--M_|1 #text/5 6-->
      <button
        class="toggle-parent"
      >
        Toggle Parent
      </button>
      <!--M_*1 #button/6-->
      <button
        class="toggle-child"
      >
        Toggle Child
      </button>
      <!--M_*1 #button/7-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.d={input_value:"\x3Ca href=#&gt;\x3C/a&gt;",Parent:"div",Child:"a","ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"a","ConditionalScope:#text/4":_.b={},"ConditionalRenderer:#text/4":"a","ClosureScopes:input_value":_.f=new Set,"ConditionalScope:#text/5":_.c={},"ConditionalRenderer:#text/5":"div"},2:_.a,4:_.b,6:_.c,7:_.g={_:_.d,"ClosureSignalIndex:input_value":0,"#ClosestBranchId":6}},(_.f).add(_.g),_.e),1,"__tests__/template.marko_0_Parent_Child",1,"__tests__/template.marko_0_Child",1,"__tests__/template.marko_0_Parent"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/svg1
REMOVE div after html/body/div/svg1
INSERT #text
INSERT html/body/div/svg1/a
REMOVE #text after html/body/div/svg1/a
UPDATE html/body/div/svg1/a[ns] null => "http://www.w3.org/2000/svg"
```

# Render
```js
container.querySelector(".toggle-child").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
        <!--M_*1 #text/1-->
        Hi
        <!--M_|1 #text/2 2-->
      </svg>
      <math>
        <a
          href="#"
          ns="http://www.w3.org/1998/Math/MathML"
        />
        <!--M_*1 #text/3-->
        Hi
        <!--M_|1 #text/4 4-->
      </math>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
      </svg>
      <!--M_|1 #text/5 6-->
      <button
        class="toggle-parent"
      >
        Toggle Parent
      </button>
      <!--M_*1 #button/6-->
      <button
        class="toggle-child"
      >
        Toggle Child
      </button>
      <!--M_*1 #button/7-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.d={input_value:"\x3Ca href=#&gt;\x3C/a&gt;",Parent:"div",Child:"a","ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"a","ConditionalScope:#text/4":_.b={},"ConditionalRenderer:#text/4":"a","ClosureScopes:input_value":_.f=new Set,"ConditionalScope:#text/5":_.c={},"ConditionalRenderer:#text/5":"div"},2:_.a,4:_.b,6:_.c,7:_.g={_:_.d,"ClosureSignalIndex:input_value":0,"#ClosestBranchId":6}},(_.f).add(_.g),_.e),1,"__tests__/template.marko_0_Parent_Child",1,"__tests__/template.marko_0_Child",1,"__tests__/template.marko_0_Parent"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/svg0/#text
REMOVE a after html/body/div/svg0/#text
INSERT html/body/div/math/#text
REMOVE a after html/body/div/math/#text
```

# Render
```js
container.querySelector(".toggle-child").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
        <!--M_*1 #text/1-->
        <a
          href="#bar"
          ns="http://www.w3.org/2000/svg"
        >
          Hi
        </a>
        <!--M_|1 #text/2 2-->
      </svg>
      <math>
        <a
          href="#"
          ns="http://www.w3.org/1998/Math/MathML"
        />
        <!--M_*1 #text/3-->
        <a
          href="#bar"
          ns="http://www.w3.org/1998/Math/MathML"
        >
          Hi
        </a>
        <!--M_|1 #text/4 4-->
      </math>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
      </svg>
      <!--M_|1 #text/5 6-->
      <button
        class="toggle-parent"
      >
        Toggle Parent
      </button>
      <!--M_*1 #button/6-->
      <button
        class="toggle-child"
      >
        Toggle Child
      </button>
      <!--M_*1 #button/7-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.d={input_value:"\x3Ca href=#&gt;\x3C/a&gt;",Parent:"div",Child:"a","ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"a","ConditionalScope:#text/4":_.b={},"ConditionalRenderer:#text/4":"a","ClosureScopes:input_value":_.f=new Set,"ConditionalScope:#text/5":_.c={},"ConditionalRenderer:#text/5":"div"},2:_.a,4:_.b,6:_.c,7:_.g={_:_.d,"ClosureSignalIndex:input_value":0,"#ClosestBranchId":6}},(_.f).add(_.g),_.e),1,"__tests__/template.marko_0_Parent_Child",1,"__tests__/template.marko_0_Child",1,"__tests__/template.marko_0_Parent"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/svg0/a1
REMOVE #text after html/body/div/svg0/a1
INSERT html/body/div/svg0/a1/#text
UPDATE html/body/div/svg0/a1[href] null => "#bar"
INSERT html/body/div/math/a1
REMOVE #text after html/body/div/math/a1
INSERT html/body/div/math/a1/#text
UPDATE html/body/div/math/a1[href] null => "#bar"
UPDATE html/body/div/svg0/a1[ns] null => "http://www.w3.org/2000/svg"
UPDATE html/body/div/math/a1[ns] null => "http://www.w3.org/1998/Math/MathML"
```

# Render
```js
container.querySelector(".toggle-child").click();
```
```html
<html>
  <head />
  <body>
    <div>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
        <!--M_*1 #text/1-->
        Hi
        <!--M_|1 #text/2 2-->
      </svg>
      <math>
        <a
          href="#"
          ns="http://www.w3.org/1998/Math/MathML"
        />
        <!--M_*1 #text/3-->
        Hi
        <!--M_|1 #text/4 4-->
      </math>
      <svg>
        <a
          href="#"
          ns="http://www.w3.org/2000/svg"
        />
      </svg>
      <!--M_|1 #text/5 6-->
      <button
        class="toggle-parent"
      >
        Toggle Parent
      </button>
      <!--M_*1 #button/6-->
      <button
        class="toggle-child"
      >
        Toggle Child
      </button>
      <!--M_*1 #button/7-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:_.d={input_value:"\x3Ca href=#&gt;\x3C/a&gt;",Parent:"div",Child:"a","ConditionalScope:#text/2":_.a={},"ConditionalRenderer:#text/2":"a","ConditionalScope:#text/4":_.b={},"ConditionalRenderer:#text/4":"a","ClosureScopes:input_value":_.f=new Set,"ConditionalScope:#text/5":_.c={},"ConditionalRenderer:#text/5":"div"},2:_.a,4:_.b,6:_.c,7:_.g={_:_.d,"ClosureSignalIndex:input_value":0,"#ClosestBranchId":6}},(_.f).add(_.g),_.e),1,"__tests__/template.marko_0_Parent_Child",1,"__tests__/template.marko_0_Child",1,"__tests__/template.marko_0_Parent"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/svg0/#text
REMOVE a after html/body/div/svg0/#text
INSERT html/body/div/math/#text
REMOVE a after html/body/div/math/#text
```