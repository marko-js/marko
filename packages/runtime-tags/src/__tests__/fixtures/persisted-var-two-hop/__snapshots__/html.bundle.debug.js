// tags/doubler/index.marko
const $template$2 = "<span>x2</span>";
const $walks$2 = "b";
var doubler_default = _template_persisted("__tests__/tags/doubler/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	const $return = double;
	return $return;
}, 0, 0);

// tags/shower/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
var shower_default = _template_persisted("__tests__/tags/shower/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.value, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</em>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/shower/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D0${_w0}&/${_w1}& l`)("b", "D l");
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
	const $childScope2 = _peek_scope_id();
	if ($scope0_reason || _must_render(shower_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "#childScope/2", $childScope2);
		shower_default({ value: double });
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [doubler_default, shower_default]);
