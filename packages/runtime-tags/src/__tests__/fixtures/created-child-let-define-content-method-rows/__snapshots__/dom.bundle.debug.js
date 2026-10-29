// tags/outer.marko
const $template$1 = "<button>clear</button><section><!></section>";
const $walks$1 = " bD%l";
const $value = /*@__PURE__*/ _let("value/5", ($scope) => $value_content($scope, $scope.value?.content));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $value_content = /*@__PURE__*/ _const("value_content", ($scope) => $dynamicTag($scope, $scope.value_content));
const $input_data = $value;
const $setup__script$1 = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, {});
}));
const $setup$1 = $setup__script$1;
const $input$1 = ($scope, input) => $input_data($scope, input.data);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<button>make</button><!><!>";
const $walks = " b%c";
const $for_content__api__OR__i = /*@__PURE__*/ _or(3, ($scope) => $input_data($scope["#childScope/0"], $scope._.api.make($scope.i)));
const $for_content__api = /*@__PURE__*/ _for_closure("#text/1", $for_content__api__OR__i);
const $for_content__setup = ($scope) => {
	$for_content__api._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $for_content__i = /*@__PURE__*/ _const("i", $for_content__api__OR__i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $Body_content__input_label = /*@__PURE__*/ _closure_get("input_label/9", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:4/subscribe");
const $Body_content__setup = $Body_content__input_label;
const $Body_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $Body_content__setup);
const $Body = ($scope, Body) => $Body_content2($scope, Body?.content);
const $api2 = /*@__PURE__*/ _const("api");
const $Body_content2 = /*@__PURE__*/ _const("Body_content", ($scope) => $api2($scope, { make: $api($scope) }));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.api.make(0);
}));
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $input_show = ($scope, input_show) => $for($scope, [input_show ? [1, 2] : [1]]);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($Body_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $api = ($scope) => function(i) {
	return {
		content: $scope.Body_content,
		i
	};
};
_resumed["__tests__/template.marko_0/api"] = $api;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
