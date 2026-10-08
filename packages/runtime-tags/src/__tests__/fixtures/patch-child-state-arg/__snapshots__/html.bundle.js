// tags/arg-badge/index.marko
const $template = "<p>Value <!></p>";
const $walks = "Db%l";
_shells({ b: "b;Db%;<p>Value <!></p>" });
var arg_badge_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<p>Value ${_patch_text($scope0_id, "a", input.value, 2, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => `E l/${_w0}& l`)($walks)};${((_w0) => `<main><h1> </h1>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	arg_badge_default({ value: count });
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", count, 1);
	$scope0_page && _scope($scope0_id, {
		g: count,
		b: _existing_scope($childScope)
	});
}, 1);
