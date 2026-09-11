// tags/picker/card.marko
const $template$2 = "<em><!> <!></em>";
const $walks$2 = "D%c%l";
_shells({ "__tests__/tags/picker/card.marko": "__tests__/tags/picker/card.marko;D%c%;<em><!> <!></em>" });
var card_default = _template_persisted("__tests__/tags/picker/card.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_owned, 0)} ${_patch_text($scope0_id, "#text/1", $global$1.brand, 2)}</em>`);
	_global_subscribe("__tests__/tags/picker/card.marko_0_$global_brand#5/global", $scope0_id);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/picker/card.marko", 0);
}, 0, 1);

// tags/picker/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({ "__tests__/tags/picker/index.marko": "__tests__/tags/picker/index.marko;b%;<!><!><!>" });
var picker_default = _template_persisted("__tests__/tags/picker/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_on__OR__input_label = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $tag = input.on ? card_default : null;
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $sg__input_on__OR__input_label, _patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $scope0_owned, 0));
	$scope0_reason && _scope($scope0_id, {
		input_on: input.on,
		input_label: input.label
	}, "__tests__/tags/picker/index.marko", 0, {
		input_on: ["input.on"],
		input_label: ["input.label"]
	});
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("b%c"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
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
	_patch_child($scope0_id, "#childScope/0", $childScope);
	picker_default({
		on,
		label: input.label
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		on,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { on: "1:6" }) : _filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.label);
}, 1, () => [picker_default]);
