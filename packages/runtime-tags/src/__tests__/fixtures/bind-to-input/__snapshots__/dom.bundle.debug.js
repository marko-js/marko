// tags/counter.marko
const $template$1 = "<button><!></button>";
const $walks$1 = " D%l";
const $input_content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/1");
const $x$1 = /* @__PURE__ */ _let_change("x/9", ($scope) => _attr($scope["#button/0"], "data-internal", $scope.x));
const $input_countChange__OR__input_count = /* @__PURE__ */ _or(8, ($scope) => $x$1($scope, $scope.count, $scope.$countChange));
const $countChange2 = /* @__PURE__ */ _const("$countChange", $input_countChange__OR__input_count);
const $count = /* @__PURE__ */ _const("count", $input_countChange__OR__input_count);
const $input_id = ($scope, input_id) => _attr($scope["#button/0"], "id", input_id);
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x$1($scope, $scope.x + 1);
}));
const $setup$1 = $setup__script;
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_content($scope, input.content);
	$countChange2($scope, input.countChange);
	$count($scope, input.count);
};
var counter_default = /* @__PURE__ */ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks$1);
const $counter_content2__x = /* @__PURE__ */ _closure_get("x", ($scope) => _text($scope["#text/0"], $scope._.x));
const $counter_content2__setup = $counter_content2__x;
const $counter_content2 = /* @__PURE__ */ _content("__tests__/template.marko_2_content", " ", " b", $counter_content2__setup);
const $counter_content__x = /* @__PURE__ */ _closure_get("x", ($scope) => _text($scope["#text/0"], $scope._.x));
const $counter_content__setup = $counter_content__x;
const $counter_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", " ", " b", $counter_content__setup);
const $x__closure = /* @__PURE__ */ _closure($counter_content__x, $counter_content2__x);
const $x = /* @__PURE__ */ _let("x/2", ($scope) => {
	$count($scope["#childScope/0"], $scope.x);
	$count($scope["#childScope/1"], $scope.x);
	$x__closure($scope);
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $counter_content($scope));
	$countChange2($scope["#childScope/0"], $countChange($scope));
	$input_id($scope["#childScope/0"], "controlled");
	$setup$1($scope["#childScope/1"]);
	$input_content_direct($scope["#childScope/1"], $counter_content2($scope));
	$input_id($scope["#childScope/1"], "uncontrolled");
	$countChange2($scope["#childScope/1"]);
	$x($scope, 0);
}
function $countChange($scope) {
	return (_new_x) => {
		$x($scope, _new_x);
	};
}
_resume("__tests__/template.marko_0/countChange", $countChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
