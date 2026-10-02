// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $if_content__input_value = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.value));
const $if_content__setup = ($scope) => {
	$if_content__input_value._($scope);
	$if_content__input_valueChange._($scope);
	$if_content__rest._($scope);
};
const $if_content__input_valueChange__script = _script("__tests__/tags/child.marko_1_$valueChange#0:4", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope._.$valueChange($scope._.value + 1);
}));
const $if_content__input_valueChange = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_valueChange__script);
const $if_content__rest__script = _script("__tests__/tags/child.marko_1_rest#0:5", ($scope) => _attrs_script($scope, "#button/0"));
const $if_content__rest = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_attrs_partial($scope, "#button/0", $scope._.rest, { "on-click": 1 });
	$if_content__rest__script($scope);
});
const $if = /*@__PURE__*/ _if("#text/0", "<button> </button>", " D ", $if_content__setup);
function $setup$1($scope) {
	$if($scope, true ? 0 : 1);
}
const $input = ($scope, input) => {
	$rest($scope, (({ value, valueChange, ...rest }) => rest)(input));
	$value($scope, input.value);
	$valueChange2($scope, input.valueChange);
};
const $rest = /*@__PURE__*/ _const("rest", $if_content__rest);
const $value = /*@__PURE__*/ _const("value", $if_content__input_value);
const $valueChange2 = /*@__PURE__*/ _const("$valueChange", $if_content__input_valueChange);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<em> </em>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)("b%c");
const $v = /*@__PURE__*/ _let("v/2", ($scope) => {
	$value($scope["#childScope/0"], $scope.v);
	_text($scope["#text/1"], $scope.v);
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$valueChange2($scope["#childScope/0"], $valueChange($scope));
	$rest($scope["#childScope/0"], { class: "c" });
	$v($scope, 1);
}
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
