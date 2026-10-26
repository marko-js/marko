// tags/card/index.marko
const $template = "<div class=card><h1> </h1><!></div>";
const $walks = "E l%l";
const $setup$1 = [[], []];
_shells({ b: "b;E l%;<div class=card><h1> </h1><!></div>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div class=card><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& D m`)($walks)};${((_w0) => `<main>${_w0}<button> </button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({ title: input.title });
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	});
}, 1);
