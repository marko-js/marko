// tags/relay/tags/leaf/index.marko
const $template$1 = "<b> </b><i> </i>";
const $walks$1 = "D lD l";
const $setup$2 = [[], []];
_shells({ c: "c;D lD ;<b> </b><i> </i>" });
var leaf_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "a", input.text, void 0, $scope0_reason, 0)}</b><i>${_patch_text($scope0_id, "b", input.note, void 0, $scope0_reason, 1)}</i>`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/relay/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0) => `D/${_w0}&l`)($walks$1)};${((_w0) => `<section>${_w0}</section>`)($template$1)}`)() });
var relay_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	leaf_default({
		text: input.label,
		note: input.qty
	});
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
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	relay_default({
		label: input.title,
		qty: count
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	});
}, 1);
