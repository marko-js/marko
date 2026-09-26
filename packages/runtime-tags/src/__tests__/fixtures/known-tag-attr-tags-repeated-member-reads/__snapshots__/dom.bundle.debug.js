// tags/child/index.marko
const $template$3 = "<span><!> <!> <!></span>";
const $walks$3 = "D%c%c%l";
const $setup$3 = () => {};
const $input_item_foo = ($scope, input_item_foo) => _text($scope["#text/0"], input_item_foo);
const $input_item_n = ($scope, input_item_n) => _text($scope["#text/1"], input_item_n);
const $input_item_sub_x = ($scope, input_item_sub_x) => _text($scope["#text/2"], input_item_sub_x);
const $input$2 = ($scope, input) => $input_item$1($scope, input.item);
const $input_item$1 = ($scope, input_item) => {
	$input_item_foo($scope, input_item?.foo);
	$input_item_n($scope, input_item?.n);
	$input_item_sub($scope, input_item?.sub);
};
const $input_item_sub = ($scope, input_item_sub) => $input_item_sub_x($scope, input_item_sub?.x);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$3, $walks$3, 0, $input$2);

// tags/child-rest/index.marko
const $template$2 = "<span><!> <!></span>";
const $walks$2 = "D%c%l";
const $setup$2 = () => {};
const $foo = ($scope, foo) => _text($scope["#text/0"], foo);
const $rest = ($scope, rest) => _text($scope["#text/1"], JSON.stringify(rest));
const $input$1 = ($scope, input) => $item2($scope, input.item);
const $item2 = ($scope, $item) => {
	(({ foo, ...rest }) => $rest($scope, rest))($item);
	$foo($scope, $item.foo);
};
var child_rest_default = /*@__PURE__*/ _template("__tests__/tags/child-rest/index.marko", $template$2, $walks$2, 0, $input$1);

// tags/child-for/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__item_foo = ($scope, item_foo) => _text($scope["#text/0"], item_foo);
const $for_content__item_sub_x = ($scope, item_sub_x) => _text($scope["#text/1"], item_sub_x);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_foo($scope, $params2[0]?.foo);
	$for_content__item_sub_x($scope, $params2[0]?.sub?.x);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<span><!> <!></span>", "D%c%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => $input_item($scope, input.item);
var child_for_default = /*@__PURE__*/ _template("__tests__/tags/child-for/index.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button>inc</button>`)($template$3, $template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& b`)($walks$3, $walks$2, "b%c");
const $n = /*@__PURE__*/ _let("n/4", ($scope) => {
	let $sub;
	if ($scope.n > 1) {
		$sub = attrTag({ x: $scope.n });
	}
	let $sub2;
	if ($scope.n > 1) {
		$sub2 = attrTag({ x: $scope.n });
	}
	$input_item$1($scope["#childScope/0"], attrTags(attrTag({
		foo: "first",
		n: $scope.n,
		sub: $sub
	}), {
		foo: "second",
		n: 2,
		sub: $sub2
	}));
	$item2($scope["#childScope/1"], attrTags(attrTag({
		foo: "first",
		n: $scope.n
	}), {
		foo: "second",
		n: 2
	}));
	let $sub3;
	if ($scope.n > 1) {
		$sub3 = attrTag({ x: $scope.n });
	}
	let $sub4;
	if ($scope.n > 1) {
		$sub4 = attrTag({ x: $scope.n });
	}
	$input_item($scope["#childScope/2"], attrTags(attrTag({
		foo: "first",
		sub: $sub3
	}), {
		foo: "second",
		sub: $sub4
	}));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
