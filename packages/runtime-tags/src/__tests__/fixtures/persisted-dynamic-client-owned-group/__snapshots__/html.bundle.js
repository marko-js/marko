// tags/picker/card.marko
_shells({ b: "b;D%c%;<em><!> <!></em>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_owned, 0)} ${_patch_text($scope0_id, "b", $global$1.brand, 2)}</em>`);
	_global_subscribe("b0", $scope0_id);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 1);

// tags/picker/index.marko
const $template = "<!><!><!>";
_shells({ c: "c;b%;<!><!><!>" });
var picker_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_on__OR__input_label = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $tag = input.on ? card_default : null;
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $sg__input_on__OR__input_label, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $scope0_owned, 0));
	$scope0_reason && _scope($scope0_id, {
		d: input.on,
		e: input.label
	});
}, 0, 1);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("b%c"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let on = true;
	_html("<main>");
	_set_serialize_reason({
		0: 3,
		1: 1,
		2: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	picker_default({
		on,
		label: input.label
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		f: on,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.label);
}, 1, () => [picker_default]);
