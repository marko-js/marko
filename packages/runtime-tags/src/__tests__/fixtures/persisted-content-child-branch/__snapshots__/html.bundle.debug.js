// tags/card/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
_shells({
	"__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko; ;<section></section>",
	"__tests__/tags/card/index.marko_1*shell": "__tests__/tags/card/index.marko_1*shell;b%;<!><!><!>"
});
var card_default = _template_persisted("__tests__/tags/card/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html$1("<section>");
	_if$1(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_patch_dynamic_tag($scope1_id, "#text/0", input.content, $scope0_owned, 2);
			_dynamic_tag$1($scope1_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 2), 1);
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/card/index.marko_1*shell"]);
	_html$1(`</section>${_el_resume($scope0_id, "#section/0", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, { input_content: input.content }, "__tests__/tags/card/index.marko", 0, { input_content: ["input.content"] });
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
	_html$1("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({
		show: input.show,
		content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_html$1(`<em>${_patch_text($scope1_id, "#text/0", input.note, $scope0_owned, 1)}${_el_resume($scope1_id, "#text/0")}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html$1("</main>");
	$scope0_reason && writeScope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note": $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] });
}, 1, () => [card_default]);
