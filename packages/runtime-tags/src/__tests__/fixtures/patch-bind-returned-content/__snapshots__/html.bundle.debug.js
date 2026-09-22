// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko !," });
var child_default = _template_patch("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	const Content = { content: _content_resume("__tests__/tags/child.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/1", input.label, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "#text/2", count, 2)}</em>${_el_resume($scope1_id, "#em/0")}`);
		_script($scope1_id, "__tests__/tags/child.marko_1");
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "2:2")));
	}, $scope0_id) };
	const $return = Content;
	_patch_value($scope0_id, "__tests__/tags/child.marko1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		count,
		"ClosureScopes:input_label": $input_label__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/tags/child.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _content_withheld("__tests__/tags/child.marko_1*content") && _patch_value($scope0_id, "__tests__/tags/child.marko0", input.label);
	$scope0_page && _resume_branch($scope0_id);
	return $return;
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button> </button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `b0${_w0}&%b D l`)("");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `b0${_w0}&%b D l`)(""), ((_w0) => `<!>${_w0}<!><button> </button>`)("")) });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let content = child_default({ label: input.label });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_content#9/var");
	_filled_guard(0, 0) && _patch_write($scope0_id, "content", content, 1);
	_dynamic_tag($scope0_id, "#text/2", content, {}, 0, 0, 0, _patch_dynamic_tag($scope0_id, "#text/2", content, 0, 0, 0));
	_html(`<button>${_text_resume($scope0_id, "#text/4", n)}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1, () => [child_default, content]);
