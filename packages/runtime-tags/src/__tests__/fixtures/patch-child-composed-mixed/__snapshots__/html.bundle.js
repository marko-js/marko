// tags/relay/tags/leaf/index.marko
const $template$1 = "<b> </b>";
const $setup$2 = [[], []];
_shells({ c: "c;D ;<b> </b>" });
var leaf_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "a", input.text, void 0, $scope0_reason, 0)}</b>`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/relay/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D l");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0) => `D/${_w0}&l`)("D l")};${((_w0) => `<section>${_w0}</section>`)($template$1)}`)() });
var relay_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	leaf_default({ text: input.val });
	_patch_child_end();
	_html("</section>");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(6);
	const $childScope = _patch_child($scope0_id, "a", 0);
	relay_default({ val: input.base + count });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		e: input.base,
		f: count,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.base, !_server_guard($scope0_reason, 0));
}, 1);
