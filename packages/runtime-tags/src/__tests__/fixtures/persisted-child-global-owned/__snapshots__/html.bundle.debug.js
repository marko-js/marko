// tags/g-badge/index.marko
const $template$1 = "<p><!> <!></p>";
const $walks$1 = "D%c%l";
_shells({ "__tests__/tags/g-badge/index.marko": "__tests__/tags/g-badge/index.marko;D%c%;<p><!> <!></p>" });
var g_badge_default = _template_persisted("__tests__/tags/g-badge/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.value, void 0, $scope0_owned, 0)} ${_patch_text($scope0_id, "#text/1", $global$1.flag, 2)}</p>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/g-badge/index.marko", 0);
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)($walks$1), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(g_badge_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "#childScope/0", $childScope);
		g_badge_default({ value: count });
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [g_badge_default]);
