// tags/label-text.marko
const $template = "<p> </p>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var label_text_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.v, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a1"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& D l`)("D l")};${((_w0) => `${_w0}<button> </button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "a", 0);
	label_text_default({ v: count + $global$1.suffix });
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		d: count,
		a: _existing_scope($childScope)
	});
}, 1);
