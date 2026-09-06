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
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<main><h1> </h1><p>Last <!></p><!></main>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&E lDb%l%l`)("");
const $if_content__count = /*@__PURE__*/ _fill_let_change("__tests__/template.marko0", "count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $if_content__store_set = /*@__PURE__*/ _init_if_closure("__tests__/template.marko_1_store_set#11/init", "#text/4", 0, ($scope) => $if_content__count($scope, 0, $scope._.store_set));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__count($scope, +$scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__store_set._($scope);
	$if_content__setup__script($scope);
};
const $store = _var_resume("__tests__/template.marko_0_store#9/var", ($scope, store) => {
	$store_last($scope, store?.last);
	$store_set($scope, store?.set);
});
const $store_last = ($scope, store_last) => _text($scope["#text/3"], store_last);
const $store_set = /*@__PURE__*/ _const("store_set", $if_content__store_set);
function $setup($scope) {
	_var($scope, "#childScope/0", $store);
	$setup$1($scope["#childScope/0"]);
}
const $input_title = ($scope, input_title) => _text($scope["#text/2"], input_title);
const $if = /*@__PURE__*/ _if("#text/4", "<span>Seen <!></span><button>+</button>", "Db%l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
