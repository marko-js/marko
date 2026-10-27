// tags/widget/index.marko
const $template = "<section><span> </span><!></section>";
const $walks = "E l%l";
const $setup$1 = [[], []];
_shells({ b: "b;E l%;<section><span> </span><!></section>" });
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><span>${_patch_text($scope0_id, "a", input.value, void 0, $scope0_reason, 0)}</span>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)($walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "a", 0);
	widget_default({
		value: count,
		content: _content("a1", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<div>${_patch_text($scope1_id, "a", $global$1.brand)}</div>`);
			_fill_global_subscribe("a0", $scope1_id);
			$scope1_page && _scope($scope1_id, {});
		}, $scope0_id)
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_page && _scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope)
	});
}, 1);
