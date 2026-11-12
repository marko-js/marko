// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $global_name_key = /*@__PURE__*/ _global_key("name");
const $await_content__$global_name = /*@__PURE__*/ _global_closure($global_name_key, "__tests__/template.marko_4_$global_name#0:9/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.name));
const $await_content__setup = $await_content__$global_name;
const $await_content__$params = ($scope, $params2) => _text($scope["#text/1"], $params2[0]);
const $catch_content = _content("__tests__/template.marko_3*content", "<s>caught</s>");
const $placeholder_content = _content("__tests__/template.marko_2*content", "<i>loading</i>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em><!> <!></em>", "D%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $global_promise_key = /*@__PURE__*/ _global_key("promise");
const $try_content__$global_promise = /*@__PURE__*/ _global_closure($global_promise_key, "__tests__/template.marko_1_$global_promise#0:7/subscribe", ($scope) => $try_content__await_promise($scope, $scope.$global.promise));
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__$global_promise($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content, $catch_content);
const $setup = $try;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup);
