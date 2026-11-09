// tags/spread-attr-tag.marko
const $template$3 = "<button class=inc></button>";
const $walks$3 = " b";
const $setup$3 = ($_) => {};
const $input_button__script = _script("__tests__/tags/spread-attr-tag.marko_0_input_button#3", ($scope) => _attrs_script($scope, "#button/0"));
const $input_button = /*@__PURE__*/ _const("input_button", ($scope) => {
	_attrs_partial_content($scope, "#button/0", $scope.input_button, { class: 1 });
	$input_button__script($scope);
});
const $input$2 = ($scope, input) => $input_button($scope, input.button);
var spread_attr_tag_default = /*@__PURE__*/ _template("__tests__/tags/spread-attr-tag.marko", $template$3, " b", 0, $input$2);

// tags/spread-input.marko
const $template$2 = "<button class=dec></button>";
const $walks$2 = " b";
const $setup$2 = ($_) => {};
const $input__script = _script("__tests__/tags/spread-input.marko_0_input#2", ($scope) => _attrs_script($scope, "#button/0"));
const $input$1 = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs_partial_content($scope, "#button/0", $scope.input, { class: 1 });
	$input__script($scope);
});
var spread_input_default = /*@__PURE__*/ _template("__tests__/tags/spread-input.marko", $template$2, " b", 0, $input$1);

// tags/run-menu.marko
const $template$1 = "<button class=run>run</button>";
const $walks$1 = " b";
const $setup__script = _script("__tests__/tags/run-menu.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	const menu = $scope.input_menu;
	menu.item.run();
}));
const $setup$1 = $setup__script;
const $input = ($scope, input) => $input_menu($scope, input.menu);
const $input_menu = /*@__PURE__*/ _const("input_menu");
var run_menu_default = /*@__PURE__*/ _template("__tests__/tags/run-menu.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}`)($template$3, $template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}&`)(" b", " b", " b");
const $spreadinput_content__count = /*@__PURE__*/ _closure_get("count/4", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_2_count#0:3/subscribe");
const $spreadinput_content__setup = $spreadinput_content__count;
const $spreadinput_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", " ", " ", $spreadinput_content__setup);
const $button_content__count = /*@__PURE__*/ _closure_get("count/4", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_1_count#0:3/subscribe");
const $button_content__setup = $button_content__count;
const $button_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $button_content__setup);
const $count__closure = /*@__PURE__*/ _closure($button_content__count, $spreadinput_content__count);
const $count = /*@__PURE__*/ _let("count/3", $count__closure);
function $setup($scope) {
	$input_button($scope["#childScope/0"], attrTag({
		onClick: $onClick($scope),
		content: $button_content($scope)
	}));
	$input$1($scope["#childScope/1"], {
		onClick: $onClick2($scope),
		content: $spreadinput_content($scope)
	});
	$setup$1($scope["#childScope/2"]);
	$input_menu($scope["#childScope/2"], attrTag({ item: attrTag({ run: $run($scope) }) }));
	$count($scope, 0);
}
const $run = ($scope) => function() {
	$count($scope, $scope.count + 10);
};
const $onClick2 = ($scope) => function() {
	$count($scope, +$scope.count - 1);
};
const $onClick = ($scope) => function() {
	$count($scope, +$scope.count + 1);
};
_resumed["__tests__/template.marko_0/run"] = $run;
_resumed["__tests__/template.marko_0/onClick2"] = $onClick2;
_resumed["__tests__/template.marko_0/onClick"] = $onClick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
