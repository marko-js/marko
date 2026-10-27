// tags/card.marko
const $template$1 = "<button id=toggle>fail</button><!><!>";
const $walks$1 = " b%c";
function boom() {
	throw new Error("boom");
}
const $if_content2__setup = ($scope) => _text($scope["#text/0"], boom());
const $try_content__if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content2__setup);
const $try_content__fail = /*@__PURE__*/ _closure_get("fail/7", ($scope) => $try_content__if($scope, $scope._.fail ? 0 : 1), 0, "__tests__/tags/card.marko_3_fail#0:5/subscribe");
const $try_content__setup = $try_content__fail;
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _closure_get("input_content/6", ($scope) => $if_content__dynamicTag($scope, $scope._._.input_content), ($scope) => $scope._._, "__tests__/tags/card.marko_2_input_content#0:4/subscribe");
const $if_content__setup = $if_content__input_content;
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $catch_content__err = ($scope, err) => {
	$catch_content__err_message($scope, err?.message);
	$catch_content__if($scope, err ? 0 : 1);
};
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content = _content("__tests__/tags/card.marko_1*content", "<i> </i><!><!>", "D l%", 0, $catch_content__$params);
const $fail__closure = /*@__PURE__*/ _closure($try_content__fail);
const $fail = /*@__PURE__*/ _let("fail/5", $fail__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$fail($scope, true);
}));
function $setup$1($scope) {
	$fail($scope, false);
	$try($scope);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content__closure = /*@__PURE__*/ _closure($if_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _closure_get("input_note/5", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:4/subscribe");
const $inputonCarddiv_content__setup = $inputonCarddiv_content__input_note;
const $inputonCarddiv_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCarddiv_content);
const $input_on = ($scope, input_on) => $dynamicTag($scope, input_on ? card_default : "div");
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
