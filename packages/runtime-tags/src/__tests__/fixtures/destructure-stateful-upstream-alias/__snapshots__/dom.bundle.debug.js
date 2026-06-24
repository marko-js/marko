// tags/store.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $list$1 = /*@__PURE__*/ _let("list/3", ($scope) => _return($scope, {
	list: $scope.list,
	listChange: $_return($scope),
	clear: $_return2($scope)
}));
const $input_value = $list$1;
const $input = ($scope, input) => $input_value($scope, input.value);
function $_return2($scope) {
	return function() {
		$list$1($scope, []);
	};
}
function $_return($scope) {
	return function(v) {
		$list$1($scope, v);
	};
}
_resume("__tests__/tags/store.marko_0/_return2", $_return2);
_resume("__tests__/tags/store.marko_0/_return", $_return);
var store_default = /*@__PURE__*/ _template("__tests__/tags/store.marko", "", "", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>Clear</button><ul></ul>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& b b`)("");
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $store = _var_resume("__tests__/template.marko_0_store/var", ($scope, store) => {
	$list($scope, store.list);
	$clear($scope, store.clear);
});
const $for = /*@__PURE__*/ _for_of("#ul/3", "<li> </li>", "D l", 0, $for_content__$params);
const $list = ($scope, list) => $for($scope, [list]);
const $clear__script = _script("__tests__/template.marko_0_clear", ($scope) => _on($scope["#button/2"], "click", $scope.clear));
const $clear = /*@__PURE__*/ _const("clear", $clear__script);
function $setup($scope) {
	_var($scope, "#childScope/0", $store);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_value($scope["#childScope/0"], ["Learn Marko", "Make a Website"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
