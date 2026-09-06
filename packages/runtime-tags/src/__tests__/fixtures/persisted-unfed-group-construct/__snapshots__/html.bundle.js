// tags/kid.marko
const $template = "<div> </div><!><button>t</button>";
const $walks = "D l%b b";
_shells({ b: "b !b0;D l%b ;<div> </div><!><button>t</button>" });
var kid_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<div>${_patch_text($scope0_id, "a", input.a, void 0, $scope0_owned, 0)}</div>`);
	if ($scope0_reason) _if(() => {}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b1", on, 1);
	$scope0_reason ? _scope($scope0_id, {
		g: input.b,
		h: on
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "b0", input.b);
}, 0, 0);

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			kid_default({
				a: input.a,
				b: "const"
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 1);
	$scope0_reason && _scope($scope0_id, { e: input.a });
}, 1, () => [kid_default]);
