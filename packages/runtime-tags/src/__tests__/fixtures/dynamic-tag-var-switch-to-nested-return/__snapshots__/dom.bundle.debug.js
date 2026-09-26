// tags/counter.marko
const $template$2 = "";
const $walks$2 = "";
const $n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, {
	n: $scope.n,
	set: $_return($scope)
}));
function $setup$2($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed["__tests__/tags/counter.marko_0/_return"] = $_return;
var counter_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("__tests__/tags/counter.marko", "", "", $setup$2));

// tags/forward.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b1c";
const $setup$1 = () => {};
_dynamic_tag_var_resume("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $api$1);
const $api$1 = _var_resume("__tests__/tags/forward.marko_0_api#5/var", /*@__PURE__*/ _const("api", ($scope) => _return($scope, $scope.api)));
const $input_as = ($scope, input_as) => $dynamicTag$1($scope, input_as || counter_default);
const $input = ($scope, input) => $input_as($scope, input.as);
var forward_default = /*@__PURE__*/ _template_return(/*@__PURE__*/ _template("__tests__/tags/forward.marko", $template$1, "b1c", 0, $input));

// template.marko
const $template = "<!><!><!><button class=swap>swap</button>";
const $walks = "b1b%b b";
_dynamic_tag_var_resume("#text/0");
const $if_content__clicks = /*@__PURE__*/ _let("clicks/2", ($scope) => _text($scope["#text/1"], $scope.clicks));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__clicks($scope, +$scope.clicks + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__clicks($scope, 0);
	$if_content__setup__script($scope);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $api);
const $Tag = /*@__PURE__*/ _let("Tag/4", ($scope) => $dynamicTag($scope, $scope.Tag));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$Tag($scope, $scope.Tag === counter_default ? forward_default : counter_default);
}));
function $setup($scope) {
	$Tag($scope, counter_default);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<button class=inner> </button>", " D ", $if_content__setup);
const $api = _var_resume("__tests__/template.marko_0_api#5/var", ($scope, api) => $if($scope, api ? 0 : 1));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
