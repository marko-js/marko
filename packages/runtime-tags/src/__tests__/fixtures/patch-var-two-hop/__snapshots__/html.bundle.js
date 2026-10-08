// tags/doubler/index.marko
const $template$1 = "<span>x2</span>";
_shells({ b: "b,<span>x2</span>" });
var doubler_default = _template_patch("b", (input) => {
	_scope_reason();
	_scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	return double;
});

// tags/shower/index.marko
const $template = "<em> </em>";
_shells({ c: "c;D ;<em> </em>" });
var shower_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.value, void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a1;${((_w0, _w1) => `D0${_w0}&/${_w1}& l`)("b", "D l")};${((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($template$1, $template)}`)() });
var template_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let double = doubler_default({ value: count });
	_var($scope0_id, "b", $childScope, "a0");
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope2);
	shower_default({ value: double });
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "a2", count, 1);
	$scope0_page && _scope($scope0_id, {
		e: count,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
