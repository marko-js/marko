// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_open = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_open$1($scope["#childScope/0"], $scope._.input_open));
const $if_content__setup = ($scope) => {
	$if_content__input_open._($scope);
	$if_content__input_items._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_items = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_items$1($scope["#childScope/0"], $scope._.input_items));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_open($scope, input.open);
	$input_items($scope, input.items);
};
const $input_open = /*@__PURE__*/ _const("input_open", $if_content__input_open);
const $input_items = /*@__PURE__*/ _const("input_items", $if_content__input_items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/rowsx.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><button class=l>l</button>";
const $walks = "b%b b";
const $if_content__fmt__OR__label = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.fmt($scope._.label)));
const $if_content__fmt = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__fmt__OR__label);
const $if_content__setup = ($scope) => {
	$if_content__fmt._($scope);
	$if_content__label._($scope);
};
const $if_content__label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__fmt__OR__label);
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_fmt = /*@__PURE__*/ _const("fmt", $if_content__fmt);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_fmt($scope, $temp.fmt);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $for_content__input_open = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $Panel_content__isOpen($scope["#childScope/0"], $scope._.input_open));
const $for_content__setup = ($scope) => {
	$for_content__input_open._($scope);
	$for_content__suffix._($scope);
	$Panel_content__tag_input_fmt($scope["#childScope/0"], lib.format);
};
const $for_content__suffix__OR__x = /*@__PURE__*/ _or(3, ($scope) => $Panel_content__tag_input_label($scope["#childScope/0"], $scope._.suffix + $scope.x));
const $for_content__suffix = /*@__PURE__*/ _for_closure("#text/0", $for_content__suffix__OR__x);
const $for_content__x = /*@__PURE__*/ _const("x", $for_content__suffix__OR__x);
const $for_content__$params = ($scope, $params3) => $for_content__x($scope, $params3[0]);
const $suffix = /*@__PURE__*/ _let("suffix/6", $for_content__suffix);
const $setup__script = _script("__tests__/tags/rowsx.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$suffix($scope, $scope.suffix + "!");
}));
function $setup($scope) {
	$suffix($scope, "s");
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_open($scope, input.open);
};
const $input_open = /*@__PURE__*/ _const("input_open", $for_content__input_open);
var rowsx_default = /*@__PURE__*/ _template("__tests__/tags/rowsx.marko", $template, $walks, $setup, $input);
