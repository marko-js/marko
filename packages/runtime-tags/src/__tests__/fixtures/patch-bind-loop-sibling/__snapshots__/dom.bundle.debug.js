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
_resumed["__tests__/tags/store.marko_0/_return"] = $_return;
var store_default = /*@__PURE__*/ _template("__tests__/tags/store.marko", "", "", $setup$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__count = /*@__PURE__*/ _fill_let_change("__tests__/template.marko0", "count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $if_content__store_set = /*@__PURE__*/ _init_closure_get("__tests__/template.marko_3_store_set#8/init", "store_set", ($scope) => $if_content__count($scope, 0, $scope._._.store_set), ($scope) => $scope._._);
const $if_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__count($scope, +$scope.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__store_set($scope);
	$if_content__setup__script($scope);
};
const $for_content2__if = /*@__PURE__*/ _if("#text/0", "<span>Seen <!></span><button>+</button>", "Db%l ", $if_content__setup);
const $for_content2__input_show = /*@__PURE__*/ _closure_get("input_show", ($scope) => $for_content2__if($scope, $scope._._.input_show && $scope["#LoopKey"] === $scope._["#LoopKey"] ? 0 : 1), ($scope) => $scope._._);
const $for_content2__setup = $for_content2__input_show;
const $for_content__store = _var_resume("__tests__/template.marko_1_store#6/var", ($scope, store) => {
	$for_content__store_last($scope, store?.last);
	$for_content__store_set($scope, store?.set);
});
const $for_content__store_last = ($scope, store_last) => _text($scope["#text/3"], store_last);
const $for_content__store_set__closure = /*@__PURE__*/ _closure($if_content__store_set);
const $for_content__store_set = /*@__PURE__*/ _const("store_set", $for_content__store_set__closure);
const $for_content__for = /*@__PURE__*/ _for_of("#text/4", "<!><!><!>", "b%", $for_content2__setup);
const $for_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $for_content__store);
	$setup$1($scope["#childScope/0"]);
	$for_content__for($scope, [["y", "x"], (n) => n]);
};
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p><!>:<!></p><!><!>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&D%c%l%c`)(""), $for_content__setup);
function $setup($scope) {
	$for($scope, [["x", "y"], (n) => n]);
}
const $input = ($scope, input) => $input_show($scope, input.show);
const $input_show__closure = /*@__PURE__*/ _closure($for_content2__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
