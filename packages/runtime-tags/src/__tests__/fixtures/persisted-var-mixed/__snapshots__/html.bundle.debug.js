// tags/mixer/index.marko
const $template$1 = "<button>bump</button>";
const $walks$1 = " b";
_shells({ "__tests__/tags/mixer/index.marko": "__tests__/tags/mixer/index.marko !__tests__/tags/mixer/index.marko_0; ;<button>bump</button>" });
var mixer_default = _template_persisted("__tests__/tags/mixer/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let local = 0;
	_html(`<button>bump</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = input.value + local;
	_script($scope0_id, "__tests__/tags/mixer/index.marko_0");
	_patch_value($scope0_id, "__tests__/tags/mixer/index.marko1", local, 1);
	$scope0_reason ? _scope($scope0_id, {
		input_value: input.value,
		local
	}, "__tests__/tags/mixer/index.marko", 0, {
		input_value: ["input.value"],
		local: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/tags/mixer/index.marko0", input.value);
	return $return;
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D m`)(" b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `D0${_w0}&D m`)(" b"), ((_w0) => `<main>${_w0}<p> </p></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let v = mixer_default({ value: input.n });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_v#6/var");
	_owned_guard(0, 0) && _patch_write($scope0_id, "v", v, 1);
	_html(`<p>${_text_resume($scope0_id, "#text/2", v)}</p></main>`);
	$scope0_reason && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1, () => [mixer_default]);
