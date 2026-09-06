// tags/mixer/index.marko
const $template = "<button>bump</button>";
_shells({ b: "b !b0; ;<button>bump</button>" });
var mixer_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let local = 0;
	_html(`<button>bump</button>${_el_resume($scope0_id, "a")}`);
	const $return = input.value + local;
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b1", local, 1);
	$scope0_reason ? _scope($scope0_id, {
		d: input.value,
		e: local
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "b0", input.value);
	return $return;
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `D0${_w0}&D m`)(" b"), ((_w0) => `<main>${_w0}<p> </p></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let v = mixer_default({ value: input.n });
	_var($scope0_id, "b", $childScope, "a0");
	_owned_guard(0, 0) && _patch_write($scope0_id, "g", v, 1);
	_html(`<p>${_text_resume($scope0_id, "c", v)}</p></main>`);
	$scope0_reason && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [mixer_default]);
