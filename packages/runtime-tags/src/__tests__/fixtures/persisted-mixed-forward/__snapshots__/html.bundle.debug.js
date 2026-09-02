// tags/kid.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/kid.marko": "__tests__/tags/kid.marko;D ;<span> </span>" });
var kid_default = _template_persisted("__tests__/tags/kid.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.a + input.b, void 0, $scope0_owned, 0)}</span>`);
	$scope0_reason && _scope($scope0_id, {
		input_a: input.a,
		input_b: input.b
	}, "__tests__/tags/kid.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	});
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D l");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `/${_w0}& b`)("D l"), ((_w0) => `${_w0}<button>+</button>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let s = 1;
	_set_serialize_reason({
		0: 3,
		1: 1,
		2: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	kid_default({
		a: s,
		b: input.x
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		s,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { s: "1:6" }) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.x);
	_resume_branch($scope0_id);
}, 1, () => [kid_default]);
