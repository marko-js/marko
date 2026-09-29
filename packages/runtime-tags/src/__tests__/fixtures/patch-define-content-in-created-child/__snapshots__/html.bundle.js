// tags/wrap.marko
const $template = "<button id=toggle>toggle</button><!><!>";
const $walks = " b%c";
_shells({ b: "b !b0; b%;<button id=toggle>toggle</button><!><!>" });
var wrap_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason();
	_source_guard($scope0_reason, 0);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.row,
		f: input.label,
		g: open
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "b0", input.row), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "b1", input.label));
}, 0, 1);

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template))
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Row = { content: _content_resume("a1", ({ label }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope2_id, "a", label)}</em>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 5);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			wrap_default({
				row: Row,
				label: input.label
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, {
		e: input.label,
		f: Row
	});
}, 1, () => [wrap_default]);
