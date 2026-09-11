// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_owned, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a0", count, 1);
	$scope0_reason && _scope($scope0_id, { g: count });
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", void 0, 1);
_shells({
	b: "b; ;<main></main>",
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0 !b1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => ` b%b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<div>x</div><!>${_w0}<!>`)($template))
});
var template_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div${_patch_attrs(input.attrs, "a", $scope1_id, "div", void 0, $scope0_owned, 2)}>x</div>${_el_resume($scope1_id, "a")}`);
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 3) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "c", $childScope);
			$Child_withLoadAssets({ label: input.label });
			_script($scope1_id, "b1");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				c: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_owned, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, { f: input.label });
}, 1, () => [$Child_withLoadAssets]);
