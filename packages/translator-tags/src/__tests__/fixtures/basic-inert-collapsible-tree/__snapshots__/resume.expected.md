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
            <!--M_|5 #text/4 -->
          </li>
          <!--M_*5 #li/0-->
          <!--M_|4 #ul/0 5-->
        </ul>
        <!--M_*4 #ul/0-->
        <!--M_|2 #text/4 3-->
      </li>
      <!--M_*2 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*6 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*6 #text/3-->
        </button>
        <!--M_*6 #button/2-->
        <!--M_|6 #text/4 -->
      </li>
      <!--M_*6 #li/0-->
      <!--M_|1 #ul/0 2,6-->
    </ul>
    <!--M_*1 #ul/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.m={0:{"#childScope/0":_.j={input:{comments:[_.b={text:"Hello World",comments:_.d=[_.f={text:"testing 123"}]},_.k={text:"Goodbye World"}]},"#ul/0(":new Map(_.a=[[0,_.c={comment:_.b,id:"c-0",open:!0,"#text/4!":_.i={"#childScope/0":_.g={input:{comments:_.d,path:"c-0"},"#ul/0(":new Map(_.e=[[0,_.h={comment:_.f,id:"c-0-0",open:!0}]])}}}],[1,_.l={comment:_.k,id:"c-1",open:!0}]])}},1:_.j,2:_.c,3:_.i,4:_.g,5:_.h,6:_.l},_.c["#text/4("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer"](_.c),_.h._=_.g,_.i._=_.c,_.c._=_.l._=_.j,_.m),5,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",2,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",6,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",0];M._.w()
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
            <!--M_|5 #text/4 -->
          </li>
          <!--M_*5 #li/0-->
          <!--M_|4 #ul/0 5-->
        </ul>
        <!--M_*4 #ul/0-->
        <!--M_|2 #text/4 3-->
      </li>
      <!--M_*2 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*6 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*6 #text/3-->
        </button>
        <!--M_*6 #button/2-->
        <!--M_|6 #text/4 -->
      </li>
      <!--M_*6 #li/0-->
      <!--M_|1 #ul/0 2,6-->
    </ul>
    <!--M_*1 #ul/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.m={0:{"#childScope/0":_.j={input:{comments:[_.b={text:"Hello World",comments:_.d=[_.f={text:"testing 123"}]},_.k={text:"Goodbye World"}]},"#ul/0(":new Map(_.a=[[0,_.c={comment:_.b,id:"c-0",open:!0,"#text/4!":_.i={"#childScope/0":_.g={input:{comments:_.d,path:"c-0"},"#ul/0(":new Map(_.e=[[0,_.h={comment:_.f,id:"c-0-0",open:!0}]])}}}],[1,_.l={comment:_.k,id:"c-1",open:!0}]])}},1:_.j,2:_.c,3:_.i,4:_.g,5:_.h,6:_.l},_.c["#text/4("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer"](_.c),_.h._=_.g,_.i._=_.c,_.c._=_.l._=_.j,_.m),5,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",2,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",6,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",0];M._.w()
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
            <!--M_|5 #text/4 -->
          </li>
          <!--M_*5 #li/0-->
          <!--M_|4 #ul/0 5-->
        </ul>
        <!--M_*4 #ul/0-->
        <!--M_|2 #text/4 3-->
      </li>
      <!--M_*2 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*6 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*6 #text/3-->
        </button>
        <!--M_*6 #button/2-->
        <!--M_|6 #text/4 -->
      </li>
      <!--M_*6 #li/0-->
      <!--M_|1 #ul/0 2,6-->
    </ul>
    <!--M_*1 #ul/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.m={0:{"#childScope/0":_.j={input:{comments:[_.b={text:"Hello World",comments:_.d=[_.f={text:"testing 123"}]},_.k={text:"Goodbye World"}]},"#ul/0(":new Map(_.a=[[0,_.c={comment:_.b,id:"c-0",open:!0,"#text/4!":_.i={"#childScope/0":_.g={input:{comments:_.d,path:"c-0"},"#ul/0(":new Map(_.e=[[0,_.h={comment:_.f,id:"c-0-0",open:!0}]])}}}],[1,_.l={comment:_.k,id:"c-1",open:!0}]])}},1:_.j,2:_.c,3:_.i,4:_.g,5:_.h,6:_.l},_.c["#text/4("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer"](_.c),_.h._=_.g,_.i._=_.c,_.c._=_.l._=_.j,_.m),5,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",2,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",6,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",0];M._.w()
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
            <!--M_|5 #text/4 -->
          </li>
          <!--M_*5 #li/0-->
          <!--M_|4 #ul/0 5-->
        </ul>
        <!--M_*4 #ul/0-->
        <!--M_|2 #text/4 3-->
      </li>
      <!--M_*2 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*6 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*6 #text/3-->
        </button>
        <!--M_*6 #button/2-->
        <!--M_|6 #text/4 -->
      </li>
      <!--M_*6 #li/0-->
      <!--M_|1 #ul/0 2,6-->
    </ul>
    <!--M_*1 #ul/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.m={0:{"#childScope/0":_.j={input:{comments:[_.b={text:"Hello World",comments:_.d=[_.f={text:"testing 123"}]},_.k={text:"Goodbye World"}]},"#ul/0(":new Map(_.a=[[0,_.c={comment:_.b,id:"c-0",open:!0,"#text/4!":_.i={"#childScope/0":_.g={input:{comments:_.d,path:"c-0"},"#ul/0(":new Map(_.e=[[0,_.h={comment:_.f,id:"c-0-0",open:!0}]])}}}],[1,_.l={comment:_.k,id:"c-1",open:!0}]])}},1:_.j,2:_.c,3:_.i,4:_.g,5:_.h,6:_.l},_.c["#text/4("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer"](_.c),_.h._=_.g,_.i._=_.c,_.c._=_.l._=_.j,_.m),5,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",2,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",6,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",0];M._.w()
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
            <!--M_|5 #text/4 -->
          </li>
          <!--M_*5 #li/0-->
          <!--M_|4 #ul/0 5-->
        </ul>
        <!--M_*4 #ul/0-->
        <!--M_|2 #text/4 3-->
      </li>
      <!--M_*2 #li/0-->
      <li
        hidden=""
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*6 #text/1-->
        </span>
        <button>
          [+]
          <!--M_*6 #text/3-->
        </button>
        <!--M_*6 #button/2-->
        <!--M_|6 #text/4 -->
      </li>
      <!--M_*6 #li/0-->
      <!--M_|1 #ul/0 2,6-->
    </ul>
    <!--M_*1 #ul/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.m={0:{"#childScope/0":_.j={input:{comments:[_.b={text:"Hello World",comments:_.d=[_.f={text:"testing 123"}]},_.k={text:"Goodbye World"}]},"#ul/0(":new Map(_.a=[[0,_.c={comment:_.b,id:"c-0",open:!0,"#text/4!":_.i={"#childScope/0":_.g={input:{comments:_.d,path:"c-0"},"#ul/0(":new Map(_.e=[[0,_.h={comment:_.f,id:"c-0-0",open:!0}]])}}}],[1,_.l={comment:_.k,id:"c-1",open:!0}]])}},1:_.j,2:_.c,3:_.i,4:_.g,5:_.h,6:_.l},_.c["#text/4("]=_._["packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_2_renderer"](_.c),_.h._=_.g,_.i._=_.c,_.c._=_.l._=_.j,_.m),5,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",2,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",6,"packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/ul0/li2: attr(hidden) null => ""
#document/html0/body1/ul0/li2/button1/#text0: "[-]" => "[+]"
```