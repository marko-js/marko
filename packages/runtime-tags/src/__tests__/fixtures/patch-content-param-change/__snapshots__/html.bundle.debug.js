// tags/labeler.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
_shells({ "__tests__/tags/labeler.marko": "^__tests__/tags/labeler.marko;D ;<span> </span>" });
var labeler_default = _template_patch("__tests__/tags/labeler.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</span>`);
	const $return = "[" + input.title + "]";
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/labeler.marko", 0);
	return $return;
});

// tags/wrapper.marko
const $template$1 = "<!><!><button>+</button>";
const $walks$1 = "b%b b";
_shells({ "__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko !__tests__/tags/wrapper.marko_0;b%b ;<!><!><button>+</button>" });
var wrapper_default = _template_patch("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_dynamic_tag($scope0_id, "#text/0", input.content, { value: n });
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/wrapper.marko_0");
	_patch_value($scope0_id, "__tests__/tags/wrapper.marko_fill1", n, 1);
	$scope0_page ? _scope($scope0_id, {
		input_content: input.content,
		n
	}, "__tests__/tags/wrapper.marko", 0, {
		input_content: ["input.content"],
		n: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/tags/wrapper.marko_fill0", input.content);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_suffix = _source_guard($scope0_reason, 0), $wi__input_suffix = _source_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope2);
	wrapper_default({ content: _content_resume("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_reason = _scope_reason(), $wg__value = _source_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		let label = labeler_default({ title: value + input.suffix });
		_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_label#7/var");
		_html(`<p>${_text_resume($scope1_id, "#text/2", label, $wg__input_suffix || $wg__value)}</p>`);
		_subscribe($wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			value: $wi__input_suffix && value,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", { value: "1:12" }), "__tests__/template.marko_1_input_suffix#0:3/subscribe", $wg__input_suffix || $wg__value);
		$wg__input_suffix || $wg__value || _resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		input_suffix: input.suffix,
		"ClosureScopes:input_suffix/4": $input_suffix__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { input_suffix: ["input.suffix"] }) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko_fill0", input.suffix);
}, 1);
