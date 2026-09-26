// tags/counter.marko
const $template$1 = "";
const $walks$1 = "";
const $n = /*@__PURE__*/ _let(0, ($scope) => _return($scope, {
	n: $scope.a,
	set: $_return($scope)
}));
function $setup($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed.b0 = $_return;
var counter_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("b", "", "", $setup));

// tags/forward.marko
const $template = "<!><!><!>";
const $walks = "b1c";
_dynamic_tag_var_resume(0);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0, 0, () => $api$1);
const $api$1 = _var_resume("c0", /*@__PURE__*/ _const(5, ($scope) => _return($scope, $scope.f)));
const $input_as = ($scope, input_as) => $dynamicTag$1($scope, input_as || counter_default);
const $input = ($scope, input) => $input_as($scope, input.as);
var forward_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("c", $template, "b1c", 0, $input));

// template.marko
_dynamic_tag_var_resume(0);
const $if_content__clicks = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$if_content__clicks($scope, +$scope.c + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__clicks($scope, 0);
	$if_content__setup__script($scope);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, 0, () => $api);
const $Tag = /*@__PURE__*/ _let(4, ($scope) => $dynamicTag($scope, $scope.e));
const $setup__script = _script("a2", ($scope) => _on($scope.d, "click", function() {
	$Tag($scope, $scope.e === counter_default ? forward_default : counter_default);
}));
const $if = /*@__PURE__*/ _if(2, "<button class=inner> </button>", " D ", $if_content__setup);
const $api = _var_resume("a0", ($scope, api) => $if($scope, api ? 0 : 1));
