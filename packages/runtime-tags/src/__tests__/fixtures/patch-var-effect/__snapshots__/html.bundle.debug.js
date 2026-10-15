// tags/labeler/index.marko
const $template$1 = "<span>fmt</span>";
const $walks$1 = "b";
_shells({ "__tests__/tags/labeler/index.marko": "^__tests__/tags/labeler/index.marko,<span>fmt</span>" });
var labeler_default = _template("__tests__/tags/labeler/index.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>fmt</span>");
	const $return = "[" + input.title + "]";
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}& D m`)("b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0 __tests__/template.marko_0_label#8;${((_w0) => `D0${_w0}& D m`)("b")};${((_w0) => `<main>${_w0}<button> </button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	let label = labeler_default({ title: input.title });
	_client_guard($scope0_reason, 0) && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_label#8/var");
	_patch_write($scope0_id, "PatchWrite:label", label, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/3", count)}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_label#8", void 0, _client_guard($scope0_reason, 0));
	_server_guard($scope0_reason, 0) && _patch_effect($scope0_id, "PatchEffect:__tests__/template.marko_0_label#8", "label");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", count, 1);
	$scope0_page ? _scope($scope0_id, {
		count,
		label,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		label: "3:12"
	}) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:label", label, !_server_guard($scope0_reason, 0));
}, 1);
