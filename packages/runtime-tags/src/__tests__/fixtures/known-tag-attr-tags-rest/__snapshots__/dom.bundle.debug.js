// tags/inner/index.marko
const $template$2 = "<!><!><div>other <!></div><div>cond <!></div>";
const $walks$2 = "b%bDb%lDb%l";
const $setup$2 = () => {};
const $for_content__row_x = ($scope, row_x) => _text($scope["#text/0"], row_x);
const $for_content__$params = ($scope, $params2) => $for_content__row_x($scope, $params2[0]?.x);
const $for = /* @__PURE__ */ _for_of("#text/0", "<div>row <!></div>", "Db%l", 0, $for_content__$params);
const $input_stuff_row = ($scope, input_stuff_row) => $for($scope, [input_stuff_row]);
const $input_stuff_other_y = ($scope, input_stuff_other_y) => _text($scope["#text/1"], input_stuff_other_y);
const $input_stuff_cond_a = ($scope, input_stuff_cond_a) => _text($scope["#text/2"], input_stuff_cond_a);
const $input$1 = ($scope, input) => $input_stuff($scope, input.stuff);
const $input_stuff = ($scope, input_stuff) => {
	$input_stuff_row($scope, input_stuff?.row);
	$input_stuff_other($scope, input_stuff?.other);
	$input_stuff_cond($scope, input_stuff?.cond);
};
const $input_stuff_other = ($scope, input_stuff_other) => $input_stuff_other_y($scope, input_stuff_other?.y);
const $input_stuff_cond = ($scope, input_stuff_cond) => $input_stuff_cond_a($scope, input_stuff_cond?.a);
var inner_default = /* @__PURE__ */ _template("__tests__/tags/inner/index.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/child/index.marko
const $template$1 = /* @__PURE__ */ ((_w0) => `<h1> </h1>${_w0}`)($template$2);
const $walks$1 = /* @__PURE__ */ ((_w0) => `D l/${_w0}&`)($walks$2);
const $title = ($scope, title) => _text($scope["#text/0"], title);
function $setup$1($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/1"]);
}
const $rest = ($scope, rest) => $input_stuff($scope["#childScope/1"], rest);
const $input = ($scope, input) => {
	(({ title, ...rest }) => $rest($scope, rest))(input);
	$title($scope, input.title);
};
var child_default = /* @__PURE__ */ _template("__tests__/tags/child/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button>toggle</button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` b/${_w0}&`)($walks$1);
const $cond = /* @__PURE__ */ _let("cond/2", ($scope) => {
	let $cond;
	if ($scope.cond) {
		$cond = attrTag({ a: 1 });
	} else {
		$cond = attrTag({ a: 2 });
	}
	$rest($scope["#childScope/1"], {
		row: attrTags(attrTag({ x: 1 }), { x: 2 }),
		other: attrTag({ y: 1 }),
		cond: $cond
	});
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$cond($scope, !$scope.cond);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$title($scope["#childScope/1"], "t");
	$cond($scope, true);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
