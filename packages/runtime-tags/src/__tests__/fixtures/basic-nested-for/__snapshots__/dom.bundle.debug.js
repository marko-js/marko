// tags/child.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $name = ($scope, name) => _text($scope["#text/0"], name);
const $input = ($scope, input) => $name($scope, input.name);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = "<button>Push</button><!><!>";
const $walks = " b%c";
const $for_content2__outer__OR__inner = /* @__PURE__ */ _or(3, ($scope) => $name($scope["#childScope/0"], `${$scope._.outer}.${$scope.inner}`));
const $for_content2__outer = /* @__PURE__ */ _for_closure("#text/0", $for_content2__outer__OR__inner);
const $for_content2__setup = ($scope) => {
	$for_content2__outer._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $for_content2__inner = /* @__PURE__ */ _const("inner", $for_content2__outer__OR__inner);
const $for_content2__$params = ($scope, $params3) => $for_content2__inner($scope, $params3[0]);
const $for_content__for = /* @__PURE__ */ _for_of("#text/0", $template$1, /* @__PURE__ */ ((_w0) => `/${_w0}&`)("D l"), $for_content2__setup, $for_content2__$params);
const $for_content__items = /* @__PURE__ */ _for_closure("#text/1", ($scope) => $for_content__for($scope, [$scope._.items]));
const $for_content__setup = $for_content__items;
const $for_content__$params = ($scope, $params2) => $for_content__outer($scope, $params2[0]);
const $for_content__outer = /* @__PURE__ */ _const("outer", $for_content2__outer);
const $for = /* @__PURE__ */ _for_of("#text/1", "<!><!><!>", "b%c", $for_content__setup, $for_content__$params);
const $items = /* @__PURE__ */ _let("items/2", ($scope) => {
	$for($scope, [$scope.items]);
	$for_content__items($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, $scope.items?.length]);
}));
function $setup($scope) {
	$items($scope, [0, 1]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
