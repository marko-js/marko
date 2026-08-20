// tags/arg-badge/index.marko
const $template$1 = "<p>Value <!></p>";
const $walks$1 = "Db%l";
_shells({ "__tests__/tags/arg-badge/index.marko": "__tests__/tags/arg-badge/index.marko;Db%;<p>Value <!></p>" });
var arg_badge_default = _template_persisted("__tests__/tags/arg-badge/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p>Value <!>${_patch_text($scope0_id, "#text/0", input.value, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</p>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/arg-badge/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}& l`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `E l/${_w0}& l`)($walks$1), ((_w0) => `<main><h1> </h1>${_w0}<button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	const $childScope = _peek_scope_id();
	if ($scope0_reason || _must_render(arg_badge_default)) {
		_set_serialize_reason(2);
		_patch_child($scope0_id, "#childScope/1", $childScope);
		arg_badge_default({ value: count });
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [arg_badge_default]);
