// tags/dump/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/dump/index.marko": "__tests__/tags/dump/index.marko !__tests__/tags/dump/index.marko_0_input_label#3;D ;<p> </p>" });
var dump_default = _template_persisted("__tests__/tags/dump/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "#text/0", JSON.stringify(input), $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</p>`);
	_script($scope0_id, "__tests__/tags/dump/index.marko_0_input_label#3");
	_patch_effect($scope0_id, "__tests__/tags/dump/index.marko_0_input_label#3", "input_label");
	$scope0_reason ? writeScope($scope0_id, { input_label: input.label }, "__tests__/tags/dump/index.marko", 0, { input_label: ["input.label"] }) : _owned_guard($scope0_owned, 1) && _patch_write($scope0_id, "input_label", input.label);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("D l"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason(30);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	dump_default({
		value: count,
		label: input.title
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, () => [dump_default]);
