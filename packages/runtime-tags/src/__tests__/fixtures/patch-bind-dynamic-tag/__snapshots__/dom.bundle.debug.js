// tags/child.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $if_content__count = /*@__PURE__*/ _fill_let_change("__tests__/tags/child.marko1", "count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $if_content__input_on = /*@__PURE__*/ _fill_join("__tests__/tags/child.marko0", "input_on", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__count($scope, 0, $scope._.input_on)));
const $if_content__setup__script = _script("__tests__/tags/child.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__count($scope, +$scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_on._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<span>Seen <!></span><button>+</button>", "Db%l ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_on($scope, input.on);
};
const $input_on = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko0", "input_on", $if_content__input_on);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, "b%c", 0, $input$1);

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
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}<p> </p>${_w1}<!>`)("", $template$2);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&D l/${_w1}&b`)("", "b%c");
const $store = _var_resume("__tests__/template.marko_0_store#7/var", ($scope, store) => {
	$store_last($scope, store?.last);
	$store_set($scope, store?.set);
});
const $store_last = ($scope, store_last) => _text($scope["#text/2"], store_last);
const $store_set = ($scope, store_set) => $input_on($scope["#childScope/3"], store_set);
function $setup($scope) {
	_var($scope, "#childScope/0", $store);
	$setup$1($scope["#childScope/0"]);
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/3"], input_show);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
