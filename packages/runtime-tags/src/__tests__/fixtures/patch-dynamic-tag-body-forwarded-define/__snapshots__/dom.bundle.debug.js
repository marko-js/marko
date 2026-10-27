// tags/fwd.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _fill_join("__tests__/tags/fwd.marko_fill1", "content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content)));
const $if_content__setup = $if_content__content;
const $Wrap_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $Wrap_content__open = /*@__PURE__*/ _fill_let("__tests__/tags/fwd.marko_fill2", "open/5", ($scope) => $Wrap_content__if($scope, $scope.open ? 0 : 1));
const $Wrap_content__setup__script = _script("__tests__/tags/fwd.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$Wrap_content__open($scope, !$scope.open);
}));
const $Wrap_content__setup = ($scope) => {
	$Wrap_content__setup__script($scope);
	$Wrap_content__open($scope, true);
};
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__content($scope, $params2[0].content);
const $Wrap_content__content = /*@__PURE__*/ _fill_const("__tests__/tags/fwd.marko_fill1", "content", $if_content__content);
const $Wrap_content = /*@__PURE__*/ _content("__tests__/tags/fwd.marko_2*content", "<button class=toggle>t</button><!><!>", " b%", $Wrap_content__setup, $Wrap_content__$params);
const $globalppWrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $globalppWrap_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/fwd.marko_1_input_content#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/fwd.marko_fill0", "input_content", /*@__PURE__*/ _closure_get("input_content/5", ($scope) => $globalppWrap_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/fwd.marko_1_input_content#0:3/subscribe"), 0));
const $globalppWrap_content__setup = $globalppWrap_content__input_content;
const $globalppWrap_content = _content("__tests__/tags/fwd.marko_1*content", "<!><!><!>", "b%", $globalppWrap_content__setup);
_content_resume($globalppWrap_content);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0", $globalppWrap_content);
const $Wrap__$global_p = /*@__PURE__*/ _fill_global_join("__tests__/tags/fwd.marko_0_Wrap#4_$global_p#13", ($scope) => $dynamicTag$1($scope, _global_read($scope.$global, "p") ? "p" : $scope.Wrap), "p");
const $Wrap = /*@__PURE__*/ _const("Wrap", $Wrap__$global_p);
function $setup$1($scope) {
	$Wrap($scope, { content: $Wrap_content($scope) });
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content__closure = /*@__PURE__*/ _closure($globalppWrap_content__input_content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/fwd.marko_fill0", "input_content", $input_content__closure);
var fwd_default = /*@__PURE__*/ _template("__tests__/tags/fwd.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $inputonFwddiv_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/5", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:4/subscribe"), 0));
const $inputonFwddiv_content__setup = $inputonFwddiv_content__input_note;
const $inputonFwddiv_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $inputonFwddiv_content__setup);
_content_resume($inputonFwddiv_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonFwddiv_content);
const $input_on = ($scope, input_on) => $dynamicTag($scope, input_on ? fwd_default : "div");
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($inputonFwddiv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
