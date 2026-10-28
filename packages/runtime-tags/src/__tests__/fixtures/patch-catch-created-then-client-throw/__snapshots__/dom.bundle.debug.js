// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
function boom() {
	throw new Error("boom");
}
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__item_fail = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_item_fail#1:3/init", /*@__PURE__*/ _closure_get("item_fail/5", ($scope) => _text($scope["#text/1"], $scope._.item_fail ? boom() : $scope._["#LoopKey"]), 0, "__tests__/template.marko_2_item_fail#1:3/subscribe"));
const $try_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/4", ($scope) => _text($scope["#text/2"], $scope.n ? boom() : ""));
const $try_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$try_content__n($scope, +$scope.n + 1);
}));
const $try_content__setup = ($scope) => {
	$try_content__item_fail($scope);
	$try_content__n($scope, 0);
	$try_content__setup__script($scope);
};
const $for_content__try = /*@__PURE__*/ _try("#text/0", "<button><!><!></button>", " D%b%", $try_content__setup, 0, $catch_content);
const $for_content__setup = ($scope) => $for_content__try($scope);
const $for_content__$params = ($scope, $params2) => $for_content__item_fail($scope, $params2[0]?.fail);
const $for_content__item_fail__closure = /*@__PURE__*/ _closure($try_content__item_fail);
const $for_content__item_fail = /*@__PURE__*/ _const("item_fail", $for_content__item_fail__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
