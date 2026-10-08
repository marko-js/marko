// tags/doubler/index.marko
const $template = "<span>x2</span>";
_shells({ b: "b,<span>x2</span>" });
var doubler_default = _template_patch("b", (input) => {
	_scope_reason();
	_scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	return double;
});

// template.marko
_shells({
	a: /*@__PURE__*/ (() => `a !a2;${((_w0) => `D0${_w0}&%b l`)("b")};${((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template)}`)(),
	a0: "a0 a5;Db%;<p>big <!></p>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let double = doubler_default({ value: input.n });
	_client_guard($scope0_reason, 0) && _var($scope0_id, "b", $childScope, "a1");
	_if(() => {
		if (double > 4) {
			const $scope1_id = _scope_id();
			_html(`<p>big ${_text_resume($scope1_id, "a", count, 2)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _source_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "a3", count, 1);
	$scope0_page && _scope($scope0_id, {
		h: count,
		a: _existing_scope($childScope)
	});
}, 1);
