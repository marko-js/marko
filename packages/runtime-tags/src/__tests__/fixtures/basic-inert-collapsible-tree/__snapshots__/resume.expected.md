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
            </span>
            <button>
              [-]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
          </li>
          <!--M_*6 #li/0-->
          <!--M_=5 #ul/0 6-->
        </ul>
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
      </li>
      <!--M_*7 #li/0-->
      <!--M_=2 #ul/0 7 3-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,1,{"LoopScopeMap:#ul/0":new Map(_.a=[[0,_.b={open:!0}],[1,_.e={open:!0}]])},_.b,1,{"LoopScopeMap:#ul/0":new Map(_.c=[[0,_.d={open:!0}]])},_.d,_.e]),6,"__tests__/tags/comments.marko_1_open",3,"__tests__/tags/comments.marko_1_open",7,"__tests__/tags/comments.marko_1_open"];M._.w()
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
            </span>
            <button>
              [-]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
          </li>
          <!--M_*6 #li/0-->
          <!--M_=5 #ul/0 6-->
        </ul>
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
      </li>
      <!--M_*7 #li/0-->
      <!--M_=2 #ul/0 7 3-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,1,{"LoopScopeMap:#ul/0":new Map(_.a=[[0,_.b={open:!0}],[1,_.e={open:!0}]])},_.b,1,{"LoopScopeMap:#ul/0":new Map(_.c=[[0,_.d={open:!0}]])},_.d,_.e]),6,"__tests__/tags/comments.marko_1_open",3,"__tests__/tags/comments.marko_1_open",7,"__tests__/tags/comments.marko_1_open"];M._.w()
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
            </span>
            <button>
              [-]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
          </li>
          <!--M_*6 #li/0-->
          <!--M_=5 #ul/0 6-->
        </ul>
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
      </li>
      <!--M_*7 #li/0-->
      <!--M_=2 #ul/0 7 3-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,1,{"LoopScopeMap:#ul/0":new Map(_.a=[[0,_.b={open:!0}],[1,_.e={open:!0}]])},_.b,1,{"LoopScopeMap:#ul/0":new Map(_.c=[[0,_.d={open:!0}]])},_.d,_.e]),6,"__tests__/tags/comments.marko_1_open",3,"__tests__/tags/comments.marko_1_open",7,"__tests__/tags/comments.marko_1_open"];M._.w()
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
            </span>
            <button>
              [+]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
          </li>
          <!--M_*6 #li/0-->
          <!--M_=5 #ul/0 6-->
        </ul>
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
      </li>
      <!--M_*7 #li/0-->
      <!--M_=2 #ul/0 7 3-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,1,{"LoopScopeMap:#ul/0":new Map(_.a=[[0,_.b={open:!0}],[1,_.e={open:!0}]])},_.b,1,{"LoopScopeMap:#ul/0":new Map(_.c=[[0,_.d={open:!0}]])},_.d,_.e]),6,"__tests__/tags/comments.marko_1_open",3,"__tests__/tags/comments.marko_1_open",7,"__tests__/tags/comments.marko_1_open"];M._.w()
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
            </span>
            <button>
              [+]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
          </li>
          <!--M_*6 #li/0-->
          <!--M_=5 #ul/0 6-->
        </ul>
      </li>
      <!--M_*3 #li/0-->
      <li
        hidden=""
        id="c-1"
      >
        <span>
          Goodbye World
        </span>
        <button>
          [+]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
      </li>
      <!--M_*7 #li/0-->
      <!--M_=2 #ul/0 7 3-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.f=[0,1,{"LoopScopeMap:#ul/0":new Map(_.a=[[0,_.b={open:!0}],[1,_.e={open:!0}]])},_.b,1,{"LoopScopeMap:#ul/0":new Map(_.c=[[0,_.d={open:!0}]])},_.d,_.e]),6,"__tests__/tags/comments.marko_1_open",3,"__tests__/tags/comments.marko_1_open",7,"__tests__/tags/comments.marko_1_open"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul/li1[hidden] null => ""
UPDATE html/body/ul/li1/button/#text "[-]" => "[+]"
```