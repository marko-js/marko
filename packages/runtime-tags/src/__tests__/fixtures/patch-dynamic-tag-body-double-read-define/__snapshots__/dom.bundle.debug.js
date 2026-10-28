// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "content", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content)));
const $if_content__setup = $if_content__content;
const $Wrap_content__if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $Wrap_content__open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "open/6", ($scope) => $Wrap_content__if($scope, $scope.open ? 0 : 1));
const $Wrap_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$Wrap_content__open($scope, !$scope.open);
}));
const $Wrap_content__setup = ($scope) => {
	$Wrap_content__open($scope, false);
	$Wrap_content__setup__script($scope);
};
const $Wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $Wrap_content__content = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "content", ($scope) => {
	$Wrap_content__dynamicTag($scope, $scope.content);
	$if_content__content($scope);
});
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__content($scope, $params2[0].content);
const $Wrap_content = _content("__tests__/template.marko_2*content", "<button class=toggle>t</button><section><!></section><!><!>", " bD%l%", $Wrap_content__setup, $Wrap_content__$params);
const $inputonWrapdiv_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/7", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:4/subscribe"), 0));
const $inputonWrapdiv_content__setup = $inputonWrapdiv_content__input_note;
const $inputonWrapdiv_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $inputonWrapdiv_content__setup);
_content_resume($inputonWrapdiv_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonWrapdiv_content);
const $input_on__OR__Wrap = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_on ? $scope.Wrap : "div"));
const $Wrap = /*@__PURE__*/ _const("Wrap", $input_on__OR__Wrap);
function $setup($scope) {
	$Wrap($scope, { content: $Wrap_content($scope) });
}
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__Wrap);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($inputonWrapdiv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
