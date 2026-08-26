// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
function $setup$1($scope) {
	_return($scope, "foo");
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", $setup$1);

// template.marko
const $template = "<button>Toggle</button><!><!>";
const $walks = " b%c";
const $if_content__value = ($scope, value) => $Wrapper_content__input_value($scope["#childScope/2"], value);
const $if_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $if_content__value);
	_var($scope, "#childScope/2", $if_content__wrapped);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__wrapped = _var_resume("__tests__/template.marko_2_wrapped#6/var", ($scope, wrapped) => _text($scope["#text/4"], wrapped));
const $Wrapper_content__input_value = /*@__PURE__*/ _const("input_value", ($scope) => _return($scope, $scope.input_value));
const $Wrapper_content__$params = ($scope, $params2) => $Wrapper_content__input($scope, $params2[0]);
const $Wrapper_content__input = ($scope, input) => $Wrapper_content__input_value($scope, input.value);
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<div>Value: <!></div>`)(""), /*@__PURE__*/ ((_w0) => `b0${_w0}&0&Db%l`)(""), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
