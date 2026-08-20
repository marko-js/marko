// template.marko
const $template = "<main><h1> </h1><section><!></section><footer><!></footer><button>Count <!></button></main>";
const $walks = "E lD%lD%l Db%m";
const $await_content2__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content2__$params = ($scope, $params3) => $await_content2__note($scope, $params3[0]);
const $await_content__related = ($scope, related) => _text($scope["#text/0"], related);
const $await_content__$params = ($scope, $params2) => $await_content__related($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2*content", "loading");
const $await_content = _resume("__tests__/template.marko_1_#text#0/await", /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D "));
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_related__OR__input_slow = /*@__PURE__*/ _or(1, ($scope) => $try_content__await_promise($scope, resolveAfter($scope._.input_related, $scope._.input_slow ? 1 : 0)));
const $try_content__input_related = /*@__PURE__*/ _closure_get("input_related", $try_content__input_related__OR__input_slow);
const $try_content__setup = ($scope) => {
	$try_content__input_related($scope);
	$try_content__input_slow($scope);
	$await_content($scope);
};
const $try_content__input_slow = /*@__PURE__*/ _closure_get("input_slow", $try_content__input_related__OR__input_slow);
const $count = /*@__PURE__*/ _let("count/12", ($scope) => _text($scope["#text/4"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$await_content2($scope);
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $await_content2 = _resume("__tests__/template.marko_0_#text#2/await", /*@__PURE__*/ _await_content("#text/2", "<span> </span>", "D "));
const $await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content2__$params);
const $input_slow__OR__input_note = /*@__PURE__*/ _or(11, ($scope) => $await_promise($scope, resolveAfter($scope.input_note, $scope.input_slow ? 2 : 0)));
const $input_slow__closure = /*@__PURE__*/ _closure($try_content__input_slow);
const $input_slow = /*@__PURE__*/ _const("input_slow", ($scope) => {
	$input_slow__OR__input_note($scope);
	$input_slow__closure($scope);
});
const $input_note = /*@__PURE__*/ _const("input_note", $input_slow__OR__input_note);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_related($scope, input.related);
	$input_slow($scope, input.slow);
	$input_note($scope, input.note);
};
const $input_related__closure = /*@__PURE__*/ _closure($try_content__input_related);
const $input_related = /*@__PURE__*/ _const("input_related", $input_related__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
