// tags/label-text.marko
const $template$1 = "<p> </p>";
const $setup$2 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var label_text_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.v, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/pass.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ c: /*@__PURE__*/ ((_w0) => `c${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1) });
var pass_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_x = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_set_scope_reason((2 | _mask_group($scope0_reason, 0)) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	label_text_default({ v: input.x + $global$1.suffix });
	_fill_global_subscribe("c0", $scope0_id, $cg__input_x);
	$cg__input_x && _patch_write($scope0_id, "wd", input.x, 1);
	$scope0_page && _scope($scope0_id, {
		d: _unfilled_if($scope0_reason, 0) && input.x,
		a: _existing_scope($childScope)
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& D l`)($walks)};${((_w0) => `${_w0}<button> </button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	pass_default({ x: "a" });
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		d: count,
		a: _existing_scope($childScope)
	});
}, 1);
