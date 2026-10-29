// layout.marko
const $template$3 = "<html><body><main><!><!></main></body></html>";
const $walks$3 = "F%b%n";
const $setup$3 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_nav__OR__input_label = /*@__PURE__*/ _fill("__tests__/layout.marko_fill1", "input_label", /*@__PURE__*/ _fill("__tests__/layout.marko_fill0", "input_nav", /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_nav, ($_) => ({ label: $scope.input_label })))));
const $input_nav = /*@__PURE__*/ _const("input_nav", $input_nav__OR__input_label);
const $input_label$3 = /*@__PURE__*/ _const("input_label", $input_nav__OR__input_label);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag2;
const $input$3 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_nav($scope, input.nav);
	$input_label$3($scope, input.label);
};
var layout_default = /*@__PURE__*/ _template("__tests__/layout.marko", $template$3, $walks$3, 0, $input$3);

// nav-a.marko
const $template$2 = "<nav>A <!></nav>";
const $walks$2 = "Db%l";
const $setup$2 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var nav_a_default = /*@__PURE__*/ _template("__tests__/nav-a.marko", $template$2, $walks$2, 0, $input$2);

// nav-b.marko
const $template$1 = "<nav>B <!></nav>";
const $walks$1 = "Db%l";
const $setup$1 = ($_) => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var nav_b_default = /*@__PURE__*/ _template("__tests__/nav-b.marko", $template$1, $walks$1, 0, $input$1);

// v:nav-a.marko.register-default.js
_resumed["__tests__/nav-a.marko"] = nav_a_default;

// v:nav-b.marko.register-default.js
_resumed["__tests__/nav-b.marko"] = nav_b_default;

// template.marko
const $template = $template$3;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$3);
const $Layout_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$alt($scope._, !$scope._.alt);
}));
const $Layout_content__setup = $Layout_content__setup__script;
const $Layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button>swap</button>", " ", $Layout_content__setup);
const $alt = _let("alt/4", ($scope) => $input_nav($scope["#childScope/0"], $scope.alt ? nav_b_default : nav_a_default));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Layout_content($scope));
	$alt($scope, false);
}
const $input_label = ($scope, input_label) => $input_label$3($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
