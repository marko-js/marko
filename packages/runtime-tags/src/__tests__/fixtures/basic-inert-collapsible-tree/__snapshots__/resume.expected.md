# Render `{"comments":[{"text":"Hello World","comments":[{"text":"testing 123"}]},{"text":"Goodbye World"}]}`

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
          <!--M_*3 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*3 #text/3-->
        </button>
        <!--M_*3 #button/2-->
        <ul>
          <li
            id="c-0-0"
          >
            <span>
              testing 123
              <!--M_*6 #text/1-->
            </span>
            <button>
              [-]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
            <!--M_|6 #text/4-->
          </li>
          <!--M_*6 #li/0-->
          <!--M_=5 #ul/0 6-->
        </ul>
        <!--M_|3 #text/4 4-->
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*8 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*8 #text/3-->
        </button>
        <!--M_*8 #button/2-->
        <!--M_|8 #text/4-->
      </li>
      <!--M_*8 #li/0-->
      <!--M_=2 #ul/0 8 3-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:{"#childScope/0":_.g={"#ul/0(":new Map(_.a=[[0,_.e={comment_comments:[{text:"testing 123"}],i:0,id:"c-0",open:!0,"#text/4(":_._["__tests__/tags/comments.marko_2_renderer"],"#text/4!":_.f={"#childScope/0":_.c={input_path:"c-0","#ul/0(":new Map(_.b=[[0,_.d={i:0,id:"c-0-0",open:!0}]])}}}],[1,_.h={i:1,id:"c-1",open:!0}]])}},2:_.g,3:_.e,4:_.f,5:_.c,6:_.d,8:_.h},_.d._=_.c,_.f._=_.e,_.e._=_.h._=_.g,_.i),6,"__tests__/tags/comments.marko_1_open",3,"__tests__/tags/comments.marko_1_open",8,"__tests__/tags/comments.marko_1_open",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector(`#c-${id} > button`).click();
```
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
          <!--M_*3 #text/1-->
        </span>
        <button>
          [+]
          <!--M_*3 #text/3-->
        </button>
        <!--M_*3 #button/2-->
        <ul>
          <li
            id="c-0-0"
          >
            <span>
              testing 123
              <!--M_*6 #text/1-->
            </span>
            <button>
              [-]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
            <!--M_|6 #text/4-->
          </li>
          <!--M_*6 #li/0-->
          <!--M_=5 #ul/0 6-->
        </ul>
        <!--M_|3 #text/4 4-->
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*8 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*8 #text/3-->
        </button>
        <!--M_*8 #button/2-->
        <!--M_|8 #text/4-->
      </li>
      <!--M_*8 #li/0-->
      <!--M_=2 #ul/0 8 3-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:{"#childScope/0":_.g={"#ul/0(":new Map(_.a=[[0,_.e={comment_comments:[{text:"testing 123"}],i:0,id:"c-0",open:!0,"#text/4(":_._["__tests__/tags/comments.marko_2_renderer"],"#text/4!":_.f={"#childScope/0":_.c={input_path:"c-0","#ul/0(":new Map(_.b=[[0,_.d={i:0,id:"c-0-0",open:!0}]])}}}],[1,_.h={i:1,id:"c-1",open:!0}]])}},2:_.g,3:_.e,4:_.f,5:_.c,6:_.d,8:_.h},_.d._=_.c,_.f._=_.e,_.e._=_.h._=_.g,_.i),6,"__tests__/tags/comments.marko_1_open",3,"__tests__/tags/comments.marko_1_open",8,"__tests__/tags/comments.marko_1_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul/li0[hidden] null => ""
UPDATE html/body/ul/li0/button/#text "[-]" => "[+]"
```

# Render
```js
container.querySelector(`#c-${id} > button`).click();
```
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
          <!--M_*3 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*3 #text/3-->
        </button>
        <!--M_*3 #button/2-->
        <ul>
          <li
            id="c-0-0"
          >
            <span>
              testing 123
              <!--M_*6 #text/1-->
            </span>
            <button>
              [-]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
            <!--M_|6 #text/4-->
          </li>
          <!--M_*6 #li/0-->
          <!--M_=5 #ul/0 6-->
        </ul>
        <!--M_|3 #text/4 4-->
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*8 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*8 #text/3-->
        </button>
        <!--M_*8 #button/2-->
        <!--M_|8 #text/4-->
      </li>
      <!--M_*8 #li/0-->
      <!--M_=2 #ul/0 8 3-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:{"#childScope/0":_.g={"#ul/0(":new Map(_.a=[[0,_.e={comment_comments:[{text:"testing 123"}],i:0,id:"c-0",open:!0,"#text/4(":_._["__tests__/tags/comments.marko_2_renderer"],"#text/4!":_.f={"#childScope/0":_.c={input_path:"c-0","#ul/0(":new Map(_.b=[[0,_.d={i:0,id:"c-0-0",open:!0}]])}}}],[1,_.h={i:1,id:"c-1",open:!0}]])}},2:_.g,3:_.e,4:_.f,5:_.c,6:_.d,8:_.h},_.d._=_.c,_.f._=_.e,_.e._=_.h._=_.g,_.i),6,"__tests__/tags/comments.marko_1_open",3,"__tests__/tags/comments.marko_1_open",8,"__tests__/tags/comments.marko_1_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul/li0[hidden] "" => null
UPDATE html/body/ul/li0/button/#text "[+]" => "[-]"
```

# Render
```js
container.querySelector(`#c-${id} > button`).click();
```
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
          <!--M_*3 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*3 #text/3-->
        </button>
        <!--M_*3 #button/2-->
        <ul>
          <li
            hidden=""
            id="c-0-0"
          >
            <span>
              testing 123
              <!--M_*6 #text/1-->
            </span>
            <button>
              [+]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
            <!--M_|6 #text/4-->
          </li>
          <!--M_*6 #li/0-->
          <!--M_=5 #ul/0 6-->
        </ul>
        <!--M_|3 #text/4 4-->
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*8 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*8 #text/3-->
        </button>
        <!--M_*8 #button/2-->
        <!--M_|8 #text/4-->
      </li>
      <!--M_*8 #li/0-->
      <!--M_=2 #ul/0 8 3-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:{"#childScope/0":_.g={"#ul/0(":new Map(_.a=[[0,_.e={comment_comments:[{text:"testing 123"}],i:0,id:"c-0",open:!0,"#text/4(":_._["__tests__/tags/comments.marko_2_renderer"],"#text/4!":_.f={"#childScope/0":_.c={input_path:"c-0","#ul/0(":new Map(_.b=[[0,_.d={i:0,id:"c-0-0",open:!0}]])}}}],[1,_.h={i:1,id:"c-1",open:!0}]])}},2:_.g,3:_.e,4:_.f,5:_.c,6:_.d,8:_.h},_.d._=_.c,_.f._=_.e,_.e._=_.h._=_.g,_.i),6,"__tests__/tags/comments.marko_1_open",3,"__tests__/tags/comments.marko_1_open",8,"__tests__/tags/comments.marko_1_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul/li0/ul/li[hidden] null => ""
UPDATE html/body/ul/li0/ul/li/button/#text "[-]" => "[+]"
```

# Render
```js
container.querySelector(`#c-${id} > button`).click();
```
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
          <!--M_*3 #text/1-->
        </span>
        <button>
          [-]
          <!--M_*3 #text/3-->
        </button>
        <!--M_*3 #button/2-->
        <ul>
          <li
            hidden=""
            id="c-0-0"
          >
            <span>
              testing 123
              <!--M_*6 #text/1-->
            </span>
            <button>
              [+]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
            <!--M_|6 #text/4-->
          </li>
          <!--M_*6 #li/0-->
          <!--M_=5 #ul/0 6-->
        </ul>
        <!--M_|3 #text/4 4-->
      </li>
      <!--M_*3 #li/0-->
      <li
        hidden=""
        id="c-1"
      >
        <span>
          Goodbye World
          <!--M_*8 #text/1-->
        </span>
        <button>
          [+]
          <!--M_*8 #text/3-->
        </button>
        <!--M_*8 #button/2-->
        <!--M_|8 #text/4-->
      </li>
      <!--M_*8 #li/0-->
      <!--M_=2 #ul/0 8 3-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:{"#childScope/0":_.g={"#ul/0(":new Map(_.a=[[0,_.e={comment_comments:[{text:"testing 123"}],i:0,id:"c-0",open:!0,"#text/4(":_._["__tests__/tags/comments.marko_2_renderer"],"#text/4!":_.f={"#childScope/0":_.c={input_path:"c-0","#ul/0(":new Map(_.b=[[0,_.d={i:0,id:"c-0-0",open:!0}]])}}}],[1,_.h={i:1,id:"c-1",open:!0}]])}},2:_.g,3:_.e,4:_.f,5:_.c,6:_.d,8:_.h},_.d._=_.c,_.f._=_.e,_.e._=_.h._=_.g,_.i),6,"__tests__/tags/comments.marko_1_open",3,"__tests__/tags/comments.marko_1_open",8,"__tests__/tags/comments.marko_1_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul/li1[hidden] null => ""
UPDATE html/body/ul/li1/button/#text "[-]" => "[+]"
```