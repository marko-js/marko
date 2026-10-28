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
const $template$1 = "<!><!><!><button class=toggle>toggle</button>";
const $walks$1 = "b%b%b b";
const $if_content2__fmt__OR__label = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.fmt($scope._.label)));
const $if_content2__fmt = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content2__fmt__OR__label);
const $if_content2__setup = ($scope) => {
	$if_content2__fmt._($scope);
	$if_content2__label._($scope);
};
const $if_content2__label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content2__fmt__OR__label);
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content2__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_fmt = /*@__PURE__*/ _const("fmt", $if_content2__fmt);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_fmt($scope, $temp.fmt);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_label));
const $if_content__setup$1 = $if_content__input_label;
const $for_content__input_open = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $Panel_content__isOpen($scope["#childScope/0"], $scope._.input_open));
const $for_content__setup = ($scope) => {
	$for_content__input_open._($scope);
	$for_content__input_label._($scope);
	$Panel_content__tag_input_fmt($scope["#childScope/0"], $fmt);
};
const $for_content__input_label__OR__x = /*@__PURE__*/ _or(3, ($scope) => $Panel_content__tag_input_label($scope["#childScope/0"], $scope._.input_label + $scope.x));
const $for_content__input_label = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_label__OR__x);
const $for_content__x = /*@__PURE__*/ _const("x", $for_content__input_label__OR__x);
const $for_content__$params = ($scope, $params3) => $for_content__x($scope, $params3[0]);
const $if$1 = /*@__PURE__*/ _if("#text/1", "<b> </b>", "D ", $if_content__setup$1);
const $open = /*@__PURE__*/ _let("open/8", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/rowsx.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, true);
	$setup__script$1($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_open($scope, input.open);
	$input_label($scope, input.label);
};
const $input_open = /*@__PURE__*/ _const("input_open", $for_content__input_open);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$for_content__input_label($scope);
	$if_content__input_label($scope);
});
function $fmt(v) {
	return lib.format(v);
}
_resumed["__tests__/tags/rowsx.marko_1/fmt"] = $fmt;
var rowsx_default = /*@__PURE__*/ _template("__tests__/tags/rowsx.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><button class=l>l</button><button class=o>o</button>";
const $walks = "b%b b b";
const $if_content__input_items = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_items$1($scope["#childScope/0"], $scope._.input_items));
const $if_content__setup = ($scope) => {
	$if_content__input_items._($scope);
	$if_content__l._($scope);
	$if_content__o._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__l = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.l));
const $if_content__o = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_open($scope["#childScope/0"], $scope._.o));
const $l = /*@__PURE__*/ _let("l/7", $if_content__l);
const $o = /*@__PURE__*/ _let("o/8", $if_content__o);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$l($scope, $scope.l + "!");
	});
	_on($scope["#button/2"], "click", function() {
		$o($scope, !$scope.o);
	});
});
function $setup($scope) {
	$l($scope, "a");
	$o($scope, true);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
};
const $input_items = /*@__PURE__*/ _const("input_items", $if_content__input_items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
