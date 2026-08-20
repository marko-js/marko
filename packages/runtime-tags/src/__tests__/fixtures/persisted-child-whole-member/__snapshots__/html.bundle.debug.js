// tags/duo/index.marko
const $template$1 = "<h2> </h2><p> </p>";
const $walks$1 = "D lD l";
_shells({ "__tests__/tags/duo/index.marko": "__tests__/tags/duo/index.marko;D lD ;<h2> </h2><p> </p>" });
var duo_default = _template_persisted("__tests__/tags/duo/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<h2>${_patch_text($scope0_id, "#text/0", input.label, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/0")}</h2><p>${_patch_text($scope0_id, "#text/1", JSON.stringify(input), $scope0_owned, 0)}${_el_resume($scope0_id, "#text/1")}</p>`);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/duo/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)($walks$1), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason(30);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	duo_default({
		label: input.title,
		value: count
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
}, 1, () => [duo_default]);
