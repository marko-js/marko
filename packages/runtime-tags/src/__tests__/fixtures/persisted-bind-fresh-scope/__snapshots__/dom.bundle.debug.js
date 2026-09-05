// tags/store.marko
const $template$1 = "";
const $walks$1 = "";
const $last = /*@__PURE__*/ _fill_let("__tests__/tags/store.marko0", "last/0", ($scope) => _return($scope, {
	last: $scope.last,
	set: $_return($scope)
}));
function $setup$1($scope) {
	$last($scope, 0);
}
const $_return = ($scope) => function(next) {
	$last($scope, next);
};
_resume("__tests__/tags/store.marko_0/_return", $_return);
var store_default = /*@__PURE__*/ _template("__tests__/tags/store.marko", "", "", $setup$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__store = _var_resume("__tests__/template.marko_1_store#5/var", ($scope, store) => {
	$if_content__store_last($scope, store?.last);
	$if_content__store_set($scope, store?.set);
});
const $if_content__store_last = ($scope, store_last) => _text($scope["#text/2"], store_last);
const $if_content__count = /*@__PURE__*/ _fill_let_change("__tests__/template.marko0", "count/8", ($scope) => _text($scope["#text/3"], $scope.count));
const $if_content__store_set = ($scope, store_set) => $if_content__count($scope, 0, store_set);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/4"], "click", function() {
	$if_content__count($scope, +$scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $if_content__store);
	$setup$1($scope["#childScope/0"]);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><span>Seen <!></span><button>+</button>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&D lDb%l b`)(""), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
