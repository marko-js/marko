// tags/frame.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#section/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#section/0", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/4", ($scope) => $if($scope, $scope.open ? 0 : 1));
function $setup$1($scope) {
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><!>${_w0}<button>interactive</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%b/${_w0}& l`)(" b");
const $await_content2__w = ($scope, w) => _text($scope["#text/0"], w);
const $await_content2__$params = ($scope, $params3) => $await_content2__w($scope, $params3[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<b> </b>", "D ");
const $frame_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $frame_content__input_q = /*@__PURE__*/ _closure_get("input_q", ($scope) => $frame_content__await_promise($scope, $scope._.input_q), 0, "__tests__/template.marko_2_input_q#7/subscribe");
const $frame_content__setup = ($scope) => {
	$frame_content__input_q($scope);
	$await_content2($scope);
};
const $frame_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $frame_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $inputas_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $inputas_content__input_p = /*@__PURE__*/ _closure_get("input_p", ($scope) => $inputas_content__await_promise($scope, $scope._.input_p), 0, "__tests__/template.marko_1_input_p#6/subscribe");
const $inputas_content__setup = ($scope) => {
	$inputas_content__input_p($scope);
	$await_content($scope);
};
const $inputas_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $inputas_content__setup);
_content_resume($inputas_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputas_content);
const $input_as = ($scope, input_as) => $dynamicTag($scope, input_as, () => ({ class: "box" }));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$input_content($scope["#childScope/1"], $frame_content($scope));
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_as($scope, input.as);
	$input_p($scope, input.p);
	$input_q($scope, input.q);
};
const $input_p__closure = /*@__PURE__*/ _closure($inputas_content__input_p);
const $input_p = /*@__PURE__*/ _const("input_p", $input_p__closure);
const $input_q__closure = /*@__PURE__*/ _closure($frame_content__input_q);
const $input_q = /*@__PURE__*/ _const("input_q", $input_q__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
