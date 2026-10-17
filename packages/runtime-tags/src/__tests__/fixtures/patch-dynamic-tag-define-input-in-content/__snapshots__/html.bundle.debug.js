// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;D%;<section><!></section>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko;${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_useA__OR__input_record = _write_guard($scope0_reason, 0), $wi__input_useA__OR__input_record = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_useA__closures = new Set();
	const $input_record__closures = new Set();
	const Card = { content: _content_resume("__tests__/template.marko_2*content", ({ record }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<h4>${_patch_text($scope2_id, "#text/0", record.name)}</h4>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_3*content", ({ record }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<h5>${_patch_text($scope3_id, "#text/0", record.name)}</h5>`);
		_scope($scope3_id, {}, "__tests__/template.marko", "4:2");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	wrap_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.useA ? Card : Other, { record: input.record }, 0, 0, $wg__input_useA__OR__input_record, void 0, 1, $scope0_reason, 0);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_useA#0:3/subscribe");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_record#0:4/subscribe");
		$wi__input_useA__OR__input_record && _subscribe(_unfilled_if($scope0_reason, 2) && $input_record__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_useA__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2")));
		$wg__input_useA__OR__input_record || $wi__input_useA__OR__input_record && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_write($scope0_id, "PatchWrite:input_useA", input.useA, 1);
	_patch_write($scope0_id, "PatchWrite:input_record", input.record, 1);
	_patch_write($scope0_id, "PatchWrite:Card", Card, 1);
	_patch_write($scope0_id, "PatchWrite:Other", Other, 1);
	$scope0_page && _scope($scope0_id, {
		input_useA: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.useA,
		input_record: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.record,
		Card: _unfilled_if($scope0_reason, 0) && Card,
		Other: _unfilled_if($scope0_reason, 0) && Other,
		"ClosureScopes:input_useA/7": _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $input_useA__closures,
		"ClosureScopes:input_record/8": _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_record__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_useA: ["input.useA"],
		input_record: ["input.record"],
		Card: "1:9",
		Other: "4:9"
	});
}, 1);
