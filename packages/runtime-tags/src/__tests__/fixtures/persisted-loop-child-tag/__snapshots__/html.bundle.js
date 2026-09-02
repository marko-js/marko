// tags/row.marko
const $template = "<li><!><!></li>";
const $walks = "D%b%l";
_shells({ b: "b;D%b%;<li><!><!></li>" });
var row_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<li>${_patch_text($scope0_id, "a", input.item.name, void 0, $scope0_owned, 0)}${_patch_text($scope0_id, "b", input.item.hot ? " 🔥" : "", 2, $scope0_owned, 1)}</li>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a: "a !a1; b D ;<ul></ul><button> </button>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason({
			0: _mask_group($scope0_owned, 0),
			1: _mask_group($scope0_owned, 0)
		});
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		row_default({ item });
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, (item) => item.id, $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a0", $scope0_owned, 0);
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_items)}<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, { g: count });
	_resume_branch($scope0_id);
}, 1, () => [row_default]);
