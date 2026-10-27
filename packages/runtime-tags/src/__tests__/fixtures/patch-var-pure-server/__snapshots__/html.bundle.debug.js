// tags/doubler/index.marko
const $template$2 = "<span>x2</span>";
const $walks$2 = "b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/doubler/index.marko": "^__tests__/tags/doubler/index.marko,<span>x2</span>" });
var doubler_default = _template("__tests__/tags/doubler/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	const $return = double;
	return $return;
});

// tags/labeler/index.marko
const $template$1 = "<span>fmt</span>";
const $walks$1 = "b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/labeler/index.marko": "^__tests__/tags/labeler/index.marko,<span>fmt</span>" });
var labeler_default = _template("__tests__/tags/labeler/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>fmt</span>");
	const $return = "[" + input.title + "]";
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D0${_w0}&/${_w1}&l`)("b", "b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$2], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `D0${_w0}&/${_w1}&l`)("b", "b")};${((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($template$2, $template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0, $cg__input_n && 1);
	let double = doubler_default({ value: input.n });
	$cg__input_n && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_double#6/var");
	_patch_child_end();
	const $childScope2 = _patch_child($scope0_id, "#childScope/2", 1);
	labeler_default({ title: double });
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
