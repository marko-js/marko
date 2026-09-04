// tags/box.marko
const $template = "<div class=box> </div>";
const $walks = " D l";
_shells({ b: "b; D ;<div class=box> </div>" });
var box_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const root = _el($scope0_id, "b0");
	_html(`<div class=box>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_owned, 0)}</div>${_el_resume($scope0_id, "a")}`);
	const $return = root;
	$scope0_reason && _scope($scope0_id, {});
	return $return;
}, 0, 0);

// template.marko
_shells({
	a: "a !a3;D%b D ;<main><!><button id=c> </button></main>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0 !a2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `0${_w0}& b`)($walks), /*@__PURE__*/ ((_w0) => `${_w0}<button id=read>read</button>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			let el = box_default({ label: input.label });
			_var($scope1_id, "b", $childScope, "a1");
			_owned_guard(0, 0) && _patch_write($scope1_id, "d", el, 1);
			_html(`<button id=read>read</button>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "a2");
			_scope($scope1_id, {
				d: el,
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 1);
	_html(`<button id=c>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$scope0_reason && _scope($scope0_id, {
		g: input.label,
		h: count
	});
}, 1, () => [box_default]);
