const $ChildB_content__walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l",
  $ChildB_content__template = "<div class=b><!> <!></div>",
  $ChildA_content__walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l",
  $ChildA_content__template = "<div class=a><!> <!></div>";
export const $template = `<!>${$ChildA_content__template}${$ChildA_content__template}${$ChildA_content__template}${$ChildB_content__template}${$ChildB_content__template}${$ChildB_content__template}<button>Increment default</button>`;
export const $walks = /* over(1), beginChild, $ChildA_content__walks, endChild, beginChild, $ChildA_content__walks, endChild, beginChild, $ChildA_content__walks, endChild, beginChild, $ChildB_content__walks, endChild, beginChild, $ChildB_content__walks, endChild, beginChild, $ChildB_content__walks, endChild, get, over(1) */`b/${$ChildA_content__walks}&/${$ChildA_content__walks}&/${$ChildA_content__walks}&/${$ChildB_content__walks}&/${$ChildB_content__walks}&/${$ChildB_content__walks}& b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $ChildB_content__$pattern = /* @__PURE__ */_._const("$pattern2", ($scope, $pattern2) => $ChildB_content__$bar($scope, $pattern2.bar));
const $ChildB_content__bar = /* @__PURE__ */_._const("bar", ($scope, bar) => _._text($scope["#text/1"], bar));
const $ChildB_content__count__OR__bar = /* @__PURE__ */_._or(11, $scope => {
  let {
    _: {
      count
    },
    $bar2
  } = $scope;
  $ChildB_content__bar($scope, void 0 !== $bar2 ? $bar2 : count + 1);
});
const $ChildB_content__$bar = /* @__PURE__ */_._const("$bar2", $ChildB_content__count__OR__bar);
const $ChildB_content__count__OR__foo = /* @__PURE__ */_._or(10, $scope => {
  let {
    _: {
      count
    },
    foo: $foo2
  } = $scope;
  $ChildB_content__$pattern($scope, void 0 !== $foo2 ? $foo2 : {
    bar: count + 2
  });
});
const $ChildB_content__count = /* @__PURE__ */_._closure_get("count", $scope => {
  $ChildB_content__count__OR__foo($scope);
  $ChildB_content__count__OR__bar($scope);
});
const $ChildB_content__foo = /* @__PURE__ */_._const("foo", ($scope, foo) => {
  _._text($scope["#text/2"], typeof foo);
  $ChildB_content__count__OR__foo($scope);
});
const $ChildB_content__input_id = /* @__PURE__ */_._const("input_id", ($scope, input_id) => _._attr($scope["#div/0"], "id", input_id));
const $ChildB_content__setup = /* @__PURE__ */_._child_setup($ChildB_content__count);
const $ChildB_content__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => $ChildB_content__input($scope, $params3[0]));
const $ChildB_content__input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $ChildB_content__input_id($scope, input.id);
  $ChildB_content__foo($scope, input.foo);
});
const $ChildA_content__$pattern = /* @__PURE__ */_._const("$pattern", ($scope, $pattern) => $ChildA_content__$bar($scope, $pattern.bar));
const $ChildA_content__bar = /* @__PURE__ */_._const("bar", ($scope, bar) => _._text($scope["#text/1"], bar));
const $ChildA_content__count__OR__bar = /* @__PURE__ */_._or(11, $scope => {
  let {
    _: {
      count
    },
    $bar
  } = $scope;
  $ChildA_content__bar($scope, void 0 !== $bar ? $bar : count + 1);
});
const $ChildA_content__$bar = /* @__PURE__ */_._const("$bar", $ChildA_content__count__OR__bar);
const $ChildA_content__count__OR__foo = /* @__PURE__ */_._or(10, $scope => {
  let {
    _: {
      count
    },
    foo: $foo
  } = $scope;
  $ChildA_content__$pattern($scope, void 0 !== $foo ? $foo : {
    bar: count + 2
  });
});
const $ChildA_content__count = /* @__PURE__ */_._closure_get("count", $scope => {
  $ChildA_content__count__OR__foo($scope);
  $ChildA_content__count__OR__bar($scope);
});
const $ChildA_content__foo = /* @__PURE__ */_._const("foo", ($scope, foo) => {
  _._text($scope["#text/2"], typeof foo);
  $ChildA_content__count__OR__foo($scope);
});
const $ChildA_content__id = /* @__PURE__ */_._const("id", ($scope, id) => _._attr($scope["#div/0"], "id", id));
const $ChildA_content__setup = /* @__PURE__ */_._child_setup($ChildA_content__count);
const $ChildA_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $ChildA_content__$temp($scope, $params2?.[0]));
const $ChildA_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => {
  $ChildA_content__id($scope, $temp.id);
  $ChildA_content__foo($scope, $temp.foo);
});
const $count__closure = /* @__PURE__ */_._closure($ChildA_content__count, $ChildB_content__count);
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/6"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/7", $scope => {
  $count__closure($scope);
  $count__script($scope);
});
export function $setup($scope) {
  $ChildA_content__setup._($scope["#childScope/0"], $scope);
  $ChildA_content__foo($scope["#childScope/0"], {
    bar: 0
  });
  $ChildA_content__id($scope["#childScope/0"], "a");
  $ChildA_content__setup._($scope["#childScope/1"], $scope);
  $ChildA_content__foo($scope["#childScope/1"], {});
  $ChildA_content__id($scope["#childScope/1"], "b");
  $ChildA_content__setup._($scope["#childScope/2"], $scope);
  $ChildA_content__id($scope["#childScope/2"], "c");
  $ChildA_content__foo($scope["#childScope/2"], void 0);
  $ChildB_content__setup._($scope["#childScope/3"], $scope);
  $ChildB_content__foo($scope["#childScope/3"], {
    bar: 0
  });
  $ChildB_content__input_id($scope["#childScope/3"], "d");
  $ChildB_content__setup._($scope["#childScope/4"], $scope);
  $ChildB_content__foo($scope["#childScope/4"], {});
  $ChildB_content__input_id($scope["#childScope/4"], "e");
  $ChildB_content__setup._($scope["#childScope/5"], $scope);
  $ChildB_content__input_id($scope["#childScope/5"], "f");
  $ChildB_content__foo($scope["#childScope/5"], void 0);
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);