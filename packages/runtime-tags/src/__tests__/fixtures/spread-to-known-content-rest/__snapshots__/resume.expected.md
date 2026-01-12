# Render
```html
<html>
  <head />
  <body>
    <div
      id="content-missing"
    >
      <p
        class="foo"
      />
      <!--M_*3 #p/0-->
    </div>
    <div
      id="content-undefined"
    >
      <p
        class="foo"
      />
      <!--M_*6 #p/0-->
    </div>
    <div
      id="content-set"
    >
      <p
        class="foo"
      >
        Hello World
      </p>
      <!--M_*9 #p/0-->
    </div>
    <div
      id="dynamic"
    >
      <p
        class="bar"
      >
        Hello World
      </p>
      <!--M_*12 #p/0-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, 2,
        {
          input_class: "foo",
          rest:
          {}
        }, 2,
        {
          input_class: "foo",
          rest:
          {}
        }, 2,
        {
          "BranchScopes:#p/0":
          {},
          "ConditionalRenderer:#p/0": "__tests__/template.marko_1_content",
          input_class: "foo",
          rest: _.a = {
            content: _.d = {}
          }
        }, 2,
        {
          "BranchScopes:#p/0":
          {},
          "ConditionalRenderer:#p/0": "__tests__/template.marko_2_content",
          input_class: "bar",
          rest: _.b = {}
        }], _.a.content = _._[
          "__tests__/template.marko_1_content"
          ](_.d), _.b.content = _._[
          "__tests__/template.marko_2_content"
          ](_.d), _.c),
        "__tests__/tags/child.marko_0_input_class_rest 3 6 9 12"
      ];
      M._.w()
    </script>
  </body>
</html>
```
