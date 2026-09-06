// tags/doubler/index.marko
const $template$1 = "<span>x2</span>";
const $walks$1 = "b";
_shells({ "__tests__/tags/doubler/index.marko": "__tests__/tags/doubler/index.marko,<span>x2</span>" });
var doubler_default = _template_persisted("__tests__/tags/doubler/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	const $return = double;
	return $return;
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D l l`)("b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D0${_w0}&D l l`)("b"), ((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let double = doubler_default({ value: count });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_double#5/var");
	_owned_guard(0, 0) && _patch_write($scope0_id, "double", double, 1);
	_html(`<p>${_text_resume($scope0_id, "#text/2", double)}</p><button>+</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1, () => [doubler_default]);
