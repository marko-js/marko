// tags/echo/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/echo/index.marko": "__tests__/tags/echo/index.marko;D ;<em> </em>" });
var echo_default = _template_persisted("__tests__/tags/echo/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const { ...rest } = input;
	_html(`<em>${_patch_text($scope0_id, "#text/0", rest.label, void 0, $scope0_owned, 0)}</em>`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/echo/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("D l"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let other = 0;
	_html("<main>");
	_set_serialize_reason(6);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	echo_default({
		label: input.label,
		other
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_label: input.label,
		other,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		other: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.label);
}, 1, () => [echo_default]);
