# Render {"comments":[{"text":"Hello World","comments":[{"text":"testing 123"}]},{"text":"Goodbye World"}]}
```html
<html>
  <head />
  <body>
    <ul>
      <li
        id="c-0"
      >
        <span>
          Hello World
          <!--M_*2 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*2 #text/3-->
        </button>
        <!--M_*2 #button/2-->
        <ul>
          <li
            id="c-0-0"
          >
            <span>
              testing 123
              <!--M_*5 #text/1-->
            </span>
            <button>
              [-]
              <!--M_*5 #text/3-->
            </button>
            <!--M_*5 #button/2-->
            <!--M_|5 #text/4-->
          </li>
          <!--M_*5 #li/0-->
          <!--M_$5-->
          <!--M_|4 #ul/0 5-->
        </ul>
        <!--M_*4 #ul/0-->
        <!--M_$3-->
        <!--M_|2 #text/4 3-->
      </li>
      <!--M_*2 #li/0-->
      <!--M_$2-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*7 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
        <!--M_|7 #text/4-->
      </li>
      <!--M_*7 #li/0-->
      <!--M_$7-->
      <!--M_|1 #ul/0 7 2-->
    </ul>
    <!--M_*1 #ul/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:{"#childScope/0":_.g={"#ul/0(":new Map(_.a=[[0,_.e={comment_comments:[{text:"testing 123"}],i:0,id:"c-0",open:!0,"#text/4(":_._["__tests__/tags/comments.marko_2_renderer"],"#text/4!":_.f={"#childScope/0":_.c={input_path:"c-0","#ul/0(":new Map(_.b=[[0,_.d={i:0,id:"c-0-0",open:!0}]])}}}],[1,_.h={i:1,id:"c-1",open:!0}]])}},1:_.g,2:_.e,3:_.f,4:_.c,5:_.d,7:_.h},_.d._=_.c,_.f._=_.e,_.e._=_.h._=_.g,_.i),5,"__tests__/tags/comments.marko_1_open",2,"__tests__/tags/comments.marko_1_open",7,"__tests__/tags/comments.marko_1_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector(`#c-${id} > button`).click()

```html
<html>
  <head />
  <body>
    <ul>
      <li
        hidden=""
        id="c-0"
      >
        <span>
          Hello World
          <!--M_*2 #text/1-->
        </span>
        <button>
          [+]
          <!--M_*2 #text/3-->
        </button>
        <!--M_*2 #button/2-->
        <ul>
          <li
            id="c-0-0"
          >
            <span>
              testing 123
              <!--M_*5 #text/1-->
            </span>
            <button>
              [-]
              <!--M_*5 #text/3-->
            </button>
            <!--M_*5 #button/2-->
            <!--M_|5 #text/4-->
          </li>
          <!--M_*5 #li/0-->
          <!--M_$5-->
          <!--M_|4 #ul/0 5-->
        </ul>
        <!--M_*4 #ul/0-->
        <!--M_$3-->
        <!--M_|2 #text/4 3-->
      </li>
      <!--M_*2 #li/0-->
      <!--M_$2-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*7 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
        <!--M_|7 #text/4-->
      </li>
      <!--M_*7 #li/0-->
      <!--M_$7-->
      <!--M_|1 #ul/0 7 2-->
    </ul>
    <!--M_*1 #ul/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:{"#childScope/0":_.g={"#ul/0(":new Map(_.a=[[0,_.e={comment_comments:[{text:"testing 123"}],i:0,id:"c-0",open:!0,"#text/4(":_._["__tests__/tags/comments.marko_2_renderer"],"#text/4!":_.f={"#childScope/0":_.c={input_path:"c-0","#ul/0(":new Map(_.b=[[0,_.d={i:0,id:"c-0-0",open:!0}]])}}}],[1,_.h={i:1,id:"c-1",open:!0}]])}},1:_.g,2:_.e,3:_.f,4:_.c,5:_.d,7:_.h},_.d._=_.c,_.f._=_.e,_.e._=_.h._=_.g,_.i),5,"__tests__/tags/comments.marko_1_open",2,"__tests__/tags/comments.marko_1_open",7,"__tests__/tags/comments.marko_1_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/ul0/li0: attr(hidden) null => ""
#document/html0/body1/ul0/li0/button1/#text0: "[-]" => "[+]"
```


# Render 
container.querySelector(`#c-${id} > button`).click()

```html
<html>
  <head />
  <body>
    <ul>
      <li
        id="c-0"
      >
        <span>
          Hello World
          <!--M_*2 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*2 #text/3-->
        </button>
        <!--M_*2 #button/2-->
        <ul>
          <li
            id="c-0-0"
          >
            <span>
              testing 123
              <!--M_*5 #text/1-->
            </span>
            <button>
              [-]
              <!--M_*5 #text/3-->
            </button>
            <!--M_*5 #button/2-->
            <!--M_|5 #text/4-->
          </li>
          <!--M_*5 #li/0-->
          <!--M_$5-->
          <!--M_|4 #ul/0 5-->
        </ul>
        <!--M_*4 #ul/0-->
        <!--M_$3-->
        <!--M_|2 #text/4 3-->
      </li>
      <!--M_*2 #li/0-->
      <!--M_$2-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*7 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
        <!--M_|7 #text/4-->
      </li>
      <!--M_*7 #li/0-->
      <!--M_$7-->
      <!--M_|1 #ul/0 7 2-->
    </ul>
    <!--M_*1 #ul/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:{"#childScope/0":_.g={"#ul/0(":new Map(_.a=[[0,_.e={comment_comments:[{text:"testing 123"}],i:0,id:"c-0",open:!0,"#text/4(":_._["__tests__/tags/comments.marko_2_renderer"],"#text/4!":_.f={"#childScope/0":_.c={input_path:"c-0","#ul/0(":new Map(_.b=[[0,_.d={i:0,id:"c-0-0",open:!0}]])}}}],[1,_.h={i:1,id:"c-1",open:!0}]])}},1:_.g,2:_.e,3:_.f,4:_.c,5:_.d,7:_.h},_.d._=_.c,_.f._=_.e,_.e._=_.h._=_.g,_.i),5,"__tests__/tags/comments.marko_1_open",2,"__tests__/tags/comments.marko_1_open",7,"__tests__/tags/comments.marko_1_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/ul0/li0: attr(hidden) "" => null
#document/html0/body1/ul0/li0/button1/#text0: "[+]" => "[-]"
```


# Render 
container.querySelector(`#c-${id} > button`).click()

```html
<html>
  <head />
  <body>
    <ul>
      <li
        id="c-0"
      >
        <span>
          Hello World
          <!--M_*2 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*2 #text/3-->
        </button>
        <!--M_*2 #button/2-->
        <ul>
          <li
            hidden=""
            id="c-0-0"
          >
            <span>
              testing 123
              <!--M_*5 #text/1-->
            </span>
            <button>
              [+]
              <!--M_*5 #text/3-->
            </button>
            <!--M_*5 #button/2-->
            <!--M_|5 #text/4-->
          </li>
          <!--M_*5 #li/0-->
          <!--M_$5-->
          <!--M_|4 #ul/0 5-->
        </ul>
        <!--M_*4 #ul/0-->
        <!--M_$3-->
        <!--M_|2 #text/4 3-->
      </li>
      <!--M_*2 #li/0-->
      <!--M_$2-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*7 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
        <!--M_|7 #text/4-->
      </li>
      <!--M_*7 #li/0-->
      <!--M_$7-->
      <!--M_|1 #ul/0 7 2-->
    </ul>
    <!--M_*1 #ul/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:{"#childScope/0":_.g={"#ul/0(":new Map(_.a=[[0,_.e={comment_comments:[{text:"testing 123"}],i:0,id:"c-0",open:!0,"#text/4(":_._["__tests__/tags/comments.marko_2_renderer"],"#text/4!":_.f={"#childScope/0":_.c={input_path:"c-0","#ul/0(":new Map(_.b=[[0,_.d={i:0,id:"c-0-0",open:!0}]])}}}],[1,_.h={i:1,id:"c-1",open:!0}]])}},1:_.g,2:_.e,3:_.f,4:_.c,5:_.d,7:_.h},_.d._=_.c,_.f._=_.e,_.e._=_.h._=_.g,_.i),5,"__tests__/tags/comments.marko_1_open",2,"__tests__/tags/comments.marko_1_open",7,"__tests__/tags/comments.marko_1_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/ul0/li0/ul3/li0: attr(hidden) null => ""
#document/html0/body1/ul0/li0/ul3/li0/button1/#text0: "[-]" => "[+]"
```


# Render 
container.querySelector(`#c-${id} > button`).click()

```html
<html>
  <head />
  <body>
    <ul>
      <li
        id="c-0"
      >
        <span>
          Hello World
          <!--M_*2 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*2 #text/3-->
        </button>
        <!--M_*2 #button/2-->
        <ul>
          <li
            hidden=""
            id="c-0-0"
          >
            <span>
              testing 123
              <!--M_*5 #text/1-->
            </span>
            <button>
              [+]
              <!--M_*5 #text/3-->
            </button>
            <!--M_*5 #button/2-->
            <!--M_|5 #text/4-->
          </li>
          <!--M_*5 #li/0-->
          <!--M_$5-->
          <!--M_|4 #ul/0 5-->
        </ul>
        <!--M_*4 #ul/0-->
        <!--M_$3-->
        <!--M_|2 #text/4 3-->
      </li>
      <!--M_*2 #li/0-->
      <!--M_$2-->
      <li
        hidden=""
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*7 #text/1-->
        </span>
        <button>
          [+]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
        <!--M_|7 #text/4-->
      </li>
      <!--M_*7 #li/0-->
      <!--M_$7-->
      <!--M_|1 #ul/0 7 2-->
    </ul>
    <!--M_*1 #ul/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={0:{"#childScope/0":_.g={"#ul/0(":new Map(_.a=[[0,_.e={comment_comments:[{text:"testing 123"}],i:0,id:"c-0",open:!0,"#text/4(":_._["__tests__/tags/comments.marko_2_renderer"],"#text/4!":_.f={"#childScope/0":_.c={input_path:"c-0","#ul/0(":new Map(_.b=[[0,_.d={i:0,id:"c-0-0",open:!0}]])}}}],[1,_.h={i:1,id:"c-1",open:!0}]])}},1:_.g,2:_.e,3:_.f,4:_.c,5:_.d,7:_.h},_.d._=_.c,_.f._=_.e,_.e._=_.h._=_.g,_.i),5,"__tests__/tags/comments.marko_1_open",2,"__tests__/tags/comments.marko_1_open",7,"__tests__/tags/comments.marko_1_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/ul0/li3: attr(hidden) null => ""
#document/html0/body1/ul0/li3/button1/#text0: "[-]" => "[+]"
```