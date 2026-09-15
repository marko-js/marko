// tags/tagged/index.marko
const $template = "<span> </span>";
_shells({ b: "b;D ;<span> </span>" });
var tagged_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a: "a !a2;b%b ;<!><!><button>+</button>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0 a4;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $template)
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const item = row.item;
		_filled_guard($scope0_reason, 0) ? _patch_value($scope1_id, "a0", item?.id) : _patch_init($scope1_id, "a1");
		_set_serialize_reason(6);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		tagged_default({ label: `${item.id}:${count}` });
		_scope($scope1_id, {
			f: item?.id,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, "a0", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	$scope0_page && _scope($scope0_id, { f: count });
}, 1, () => [tagged_default]);
