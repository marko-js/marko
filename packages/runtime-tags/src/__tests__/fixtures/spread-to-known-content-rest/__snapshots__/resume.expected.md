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
      M._.r = [_ =&gt; (_.e = [0, 2,
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
          "BranchScopes:#p/0": _.b = {},
          "ConditionalRenderer:#p/0": "__tests__/template.marko_1_content",
          input_class: "foo",
          rest: _.a = {
            content: _.f = {}
          }
        }, _.b, 1,
        {
          "BranchScopes:#p/0": _.d = {},
          "ConditionalRenderer:#p/0": "__tests__/template.marko_2_content",
          input_class: "bar",
          rest: _.c = {}
        }, _.d], _.a.content = _._[
          "__tests__/template.marko_1_content"
          ](_.f), _.c.content = _._[
          "__tests__/template.marko_2_content"
          ](_.f), _.e),
        "__tests__/tags/child.marko_0_input_class_rest 3 6 9 12"
      ];
      M._.w()
    </script>
  </body>
</html>
```
