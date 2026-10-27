// tags/doubler/index.marko
const $template$1 = "<span>x2</span>";
const $setup$2 = [[], []];
_shells({ b: "b,<span>x2</span>" });
var doubler_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	return double;
});

// tags/labeler/index.marko
const $template = "<span>fmt</span>";
const $setup$1 = [[], []];
_shells({ c: "c,<span>fmt</span>" });
var labeler_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>fmt</span>");
	return "[" + input.title + "]";
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$2], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `D0${_w0}&/${_w1}&l`)("b", "b")};${((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($template$1, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "a", $cg__input_n && 1);
	let double = doubler_default({ value: input.n });
	$cg__input_n && _var($scope0_id, "b", $childScope, "a0");
	const $childScope2 = _patch_child($scope0_id, "c");
	labeler_default({ title: double });
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
