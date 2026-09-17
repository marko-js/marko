// template.marko
const $template = "<main><h1> </h1><!><!></main>";
const $walks = "E l%b%l";
const $await_content2__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content2__$params = ($scope, $params3) => $await_content2__value($scope, $params3[0]);
const $placeholder_content2 = _content_resume("__tests__/template.marko_6*content", "<strong>more loading</strong>");
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_4*content", "<em>loading</em>");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<strong> </strong>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__input_morePromise = /*@__PURE__*/ _closure_get("input_morePromise", ($scope) => $try_content2__await_promise($scope, $scope._._.input_morePromise), ($scope) => $scope._._);
const $try_content2__setup = ($scope) => {
	$try_content2__input_morePromise($scope);
	$await_content2($scope);
};
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
const $if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $input_more = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_morePromise($scope, input.morePromise);
	$input_title($scope, input.title);
	$input_more($scope, input.more);
};
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
const $input_morePromise__closure = /*@__PURE__*/ _closure($try_content2__input_morePromise);
const $input_morePromise = /*@__PURE__*/ _const("input_morePromise", $input_morePromise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
