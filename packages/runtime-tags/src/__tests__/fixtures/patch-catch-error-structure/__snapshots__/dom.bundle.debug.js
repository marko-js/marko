// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
function boom(error) {
	throw error;
}
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $if_content__err_message = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.err_message));
const $if_content__setup = $if_content__err_message;
const $catch_content__setup__script = _script("__tests__/template.marko_2", ($scope) => console.log("mounted"));
const $catch_content__setup = $catch_content__setup__script;
const $catch_content__if = /*@__PURE__*/ _if("#text/0", "<b>missing <!></b>", "Db%", $if_content__setup, "<i>failed</i>");
const $catch_content__err_status = ($scope, err_status) => $catch_content__if($scope, err_status === 404 ? 0 : 1);
const $catch_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<span> </span>", "D ", 0, $for_content__$params);
const $catch_content__err_items = ($scope, err_items) => $catch_content__for($scope, [err_items]);
const $catch_content__$params = ($scope, $params2) => {
	$catch_content__err_status($scope, $params2[0]?.status);
	$catch_content__err_message($scope, $params2[0]?.message);
	$catch_content__err_items($scope, $params2[0]?.items);
};
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", $if_content__err_message);
const $catch_content = _content("__tests__/template.marko_2*content", "<!><!><!><!>", "b%b%", $catch_content__setup, $catch_content__$params);
const $try_content__input_error = /*@__PURE__*/ _closure_get("input_error/7", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_1_input_error#0:5/subscribe");
const $try_content__setup = $try_content__input_error;
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$try($scope);
	$setup__script($scope);
	$count($scope, 0);
}
const $input = ($scope, input) => $input_error($scope, input.error);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
