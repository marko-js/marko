// template.marko
const $template = "<!><!><button>show</button>";
const $walks = "b%b b";
const $await_content__setup = ($scope) => _text($scope["#text/1"], $scope._._["#LoopKey"]);
const $await_content__$params = ($scope, value) => _text($scope["#text/0"], value);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!>:<!>", "%c%", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__item = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__await_promise($scope, resolveAfter($scope._.item, 1)));
const $if_content__setup = ($scope) => {
	$if_content__item._($scope);
	$await_content($scope);
};
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.show ? 0 : 1), 3);
const $for_content__setup = $for_content__show;
const $for_content__item = /*@__PURE__*/ _const("item");
const $for_content__$params = $for_content__item;
const $show = /*@__PURE__*/ _let("show/2", $for_content__show);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$for($scope, [["a", "b"]]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
