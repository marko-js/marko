# Render {"comments":[{"text":"Hello World","comments":[{"text":"testing 123"}]},{"text":"Goodbye World"}]}
```html
<!--M#0 1-->
<html>
  <head />
  <body>
    <ul>
      <!--M#0 2-->
      <li
        id="c-0"
      >
        <span>
          <!--M#1 2-->
          Hello World
        </span>
        <!--M#2 2-->
        <button>
          <!--M#3 2-->
          [-]
        </button>
        <!--M#4 2-->
        <!--M#0 4-->
        <ul>
          <!--M#0 5-->
          <li
            id="c-0-0"
          >
            <span>
              <!--M#1 5-->
              testing 123
            </span>
            <!--M#2 5-->
            <button>
              <!--M#3 5-->
              [-]
            </button>
            <!--M#4 5-->
          </li>
        </ul>
      </li>
      <!--M#0 6-->
      <li
        id="c-1"
      >
        <span>
          <!--M#1 6-->
          Goodbye World
        </span>
        <!--M#2 6-->
        <button>
          <!--M#3 6-->
          [-]
        </button>
        <!--M#4 6-->
      </li>
    </ul>
    <script>
      (M$h=[]).push((b,s)=&gt;({2:{13:!0},5:{13:!0},6:{13:!0}}),["packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",5,"packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",2,"packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",6,])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector(`#c-${id} > button`).click();

```html
<!--M#0 1-->
<html>
  <head />
  <body>
    <ul>
      <!--M#0 2-->
      <li
        hidden="true"
        id="c-0"
      >
        <span>
          <!--M#1 2-->
          Hello World
        </span>
        <!--M#2 2-->
        <button>
          <!--M#3 2-->
          [+]
        </button>
        <!--M#4 2-->
        <!--M#0 4-->
        <ul>
          <!--M#0 5-->
          <li
            id="c-0-0"
          >
            <span>
              <!--M#1 5-->
              testing 123
            </span>
            <!--M#2 5-->
            <button>
              <!--M#3 5-->
              [-]
            </button>
            <!--M#4 5-->
          </li>
        </ul>
      </li>
      <!--M#0 6-->
      <li
        id="c-1"
      >
        <span>
          <!--M#1 6-->
          Goodbye World
        </span>
        <!--M#2 6-->
        <button>
          <!--M#3 6-->
          [-]
        </button>
        <!--M#4 6-->
      </li>
    </ul>
    <script>
      (M$h=[]).push((b,s)=&gt;({2:{13:!0},5:{13:!0},6:{13:!0}}),["packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",5,"packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",2,"packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",6,])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/ul0/li1: attr(hidden) null => "true"
#document/html1/body1/ul0/li1/button2/#text1: "[-]" => "[+]"
```


# Render 
container.querySelector(`#c-${id} > button`).click();

```html
<!--M#0 1-->
<html>
  <head />
  <body>
    <ul>
      <!--M#0 2-->
      <li
        id="c-0"
      >
        <span>
          <!--M#1 2-->
          Hello World
        </span>
        <!--M#2 2-->
        <button>
          <!--M#3 2-->
          [-]
        </button>
        <!--M#4 2-->
        <!--M#0 4-->
        <ul>
          <!--M#0 5-->
          <li
            id="c-0-0"
          >
            <span>
              <!--M#1 5-->
              testing 123
            </span>
            <!--M#2 5-->
            <button>
              <!--M#3 5-->
              [-]
            </button>
            <!--M#4 5-->
          </li>
        </ul>
      </li>
      <!--M#0 6-->
      <li
        id="c-1"
      >
        <span>
          <!--M#1 6-->
          Goodbye World
        </span>
        <!--M#2 6-->
        <button>
          <!--M#3 6-->
          [-]
        </button>
        <!--M#4 6-->
      </li>
    </ul>
    <script>
      (M$h=[]).push((b,s)=&gt;({2:{13:!0},5:{13:!0},6:{13:!0}}),["packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",5,"packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",2,"packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",6,])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/ul0/li1: attr(hidden) "true" => null
#document/html1/body1/ul0/li1/button2/#text1: "[+]" => "[-]"
```


# Render 
container.querySelector(`#c-${id} > button`).click();

```html
<!--M#0 1-->
<html>
  <head />
  <body>
    <ul>
      <!--M#0 2-->
      <li
        id="c-0"
      >
        <span>
          <!--M#1 2-->
          Hello World
        </span>
        <!--M#2 2-->
        <button>
          <!--M#3 2-->
          [-]
        </button>
        <!--M#4 2-->
        <!--M#0 4-->
        <ul>
          <!--M#0 5-->
          <li
            hidden="true"
            id="c-0-0"
          >
            <span>
              <!--M#1 5-->
              testing 123
            </span>
            <!--M#2 5-->
            <button>
              <!--M#3 5-->
              [+]
            </button>
            <!--M#4 5-->
          </li>
        </ul>
      </li>
      <!--M#0 6-->
      <li
        id="c-1"
      >
        <span>
          <!--M#1 6-->
          Goodbye World
        </span>
        <!--M#2 6-->
        <button>
          <!--M#3 6-->
          [-]
        </button>
        <!--M#4 6-->
      </li>
    </ul>
    <script>
      (M$h=[]).push((b,s)=&gt;({2:{13:!0},5:{13:!0},6:{13:!0}}),["packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",5,"packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",2,"packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",6,])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/ul0/li1/ul5/li1: attr(hidden) null => "true"
#document/html1/body1/ul0/li1/ul5/li1/button2/#text1: "[-]" => "[+]"
```


# Render 
container.querySelector(`#c-${id} > button`).click();

```html
<!--M#0 1-->
<html>
  <head />
  <body>
    <ul>
      <!--M#0 2-->
      <li
        id="c-0"
      >
        <span>
          <!--M#1 2-->
          Hello World
        </span>
        <!--M#2 2-->
        <button>
          <!--M#3 2-->
          [-]
        </button>
        <!--M#4 2-->
        <!--M#0 4-->
        <ul>
          <!--M#0 5-->
          <li
            hidden="true"
            id="c-0-0"
          >
            <span>
              <!--M#1 5-->
              testing 123
            </span>
            <!--M#2 5-->
            <button>
              <!--M#3 5-->
              [+]
            </button>
            <!--M#4 5-->
          </li>
        </ul>
      </li>
      <!--M#0 6-->
      <li
        hidden="true"
        id="c-1"
      >
        <span>
          <!--M#1 6-->
          Goodbye World
        </span>
        <!--M#2 6-->
        <button>
          <!--M#3 6-->
          [+]
        </button>
        <!--M#4 6-->
      </li>
    </ul>
    <script>
      (M$h=[]).push((b,s)=&gt;({2:{13:!0},5:{13:!0},6:{13:!0}}),["packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",5,"packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",2,"packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/components/comments.marko_1_open",6,])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html1/body1/ul0/li3: attr(hidden) null => "true"
#document/html1/body1/ul0/li3/button2/#text1: "[-]" => "[+]"
```