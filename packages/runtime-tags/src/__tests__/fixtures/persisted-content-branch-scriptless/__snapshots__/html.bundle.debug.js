// tags/widget/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;D%;<section><!></section>" });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(0);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			widget_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "#text/0", input.text, void 0, $scope0_owned, 2)}</em>`);
				_subscribe(_source_if($scope0_reason, 2) && $input_text__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"));
				_resume_branch($scope2_id);
			}, $scope1_id) });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, {
		input_text: input.text,
		"ClosureScopes:input_text": $input_text__closures
	}, "__tests__/template.marko", 0, { input_text: ["input.text"] });
}, 1, () => [widget_default]);
