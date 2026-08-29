// tags/card/index.marko
const $template$1 = "<ul></ul>";
const $walks$1 = " b";
_shells({
	"__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko; ;<ul></ul>",
	"__tests__/tags/card/index.marko_1*shell": "__tests__/tags/card/index.marko_1*shell;D%b%;<li><!><!></li>"
});
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_count__OR__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.count, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", i, void 0, $scope0_owned, 1)}`);
		_patch_dynamic_tag($scope1_id, "#text/1", input.content, $scope0_owned, 2);
		_dynamic_tag($scope1_id, "#text/1", input.content, {}, 0, 0, _source_guard($scope0_reason, 2), 1);
		_html("</li>");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "2:4");
	}, 0, $scope0_id, "#ul/0", 1, $sg__input_count__OR__input_content, _source_guard($scope0_reason, 1), void 0, void 0, "__tests__/tags/card/index.marko_1*shell");
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_count__OR__input_content)}`);
	$scope0_reason && _scope($scope0_id, { input_content: input.content }, "__tests__/tags/card/index.marko", 0, { input_content: ["input.content"] });
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)(" b"), ((_w0) => `<main>${_w0}</main>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 1),
		1: _mask_group($scope0_owned, 1)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({
		count: input.count,
		content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_owned, 2)}</em>`);
			_subscribe(_source_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note": $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1, () => [card_default]);
