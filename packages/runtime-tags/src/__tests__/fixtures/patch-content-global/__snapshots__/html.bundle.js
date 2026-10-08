// tags/widget/index.marko
const $template = "<section><span> </span><!></section>";
const $walks = "E l%l";
_shells({ b: "b;E l%;<section><span> </span><!></section>" });
var widget_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><span>${_patch_text($scope0_id, "a", input.value, void 0, $scope0_reason, 0)}</span>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), void 0, _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_reason, 1));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;D ;<div> </div>",
	a: /*@__PURE__*/ (() => `a !a2;${((_w0) => `D/${_w0}& l`)($walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)()
});
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	widget_default({
		value: count,
		content: _content_elide("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<div>${_patch_text($scope1_id, "a", $global$1.brand)}</div>`);
			_fill_global_subscribe("a1", $scope1_id);
			_scope($scope1_id, {});
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "a3", count, 1);
	$scope0_page && _scope($scope0_id, {
		c: count,
		a: _existing_scope($childScope)
	});
}, 1);
