// tags/list/index.marko
const $template = "<ul></ul>";
_shells({
	b: "b !; ;<ul></ul>",
	b0: "b0;D%b%;<li><!><!></li>"
});
var list_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items__OR__input_suffix = _source_guard($scope0_reason, 0), $sg__input_items = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", item, void 0, $scope0_owned, 1)}${_patch_text($scope1_id, "b", input.suffix, 2, $scope0_owned, 2)}</li>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, $sg__input_items__OR__input_suffix, $sg__input_items, void 0, void 0, "b0", $scope0_owned, 1);
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_items__OR__input_suffix)}`);
	$scope0_reason ? _scope($scope0_id, { e: input.suffix }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "b0", input.suffix);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)(" b"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({
		0: 3,
		1: 1,
		2: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	list_default({
		items: ["a"],
		suffix: input.s
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		f: count,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.s);
}, 1, () => [list_default]);
