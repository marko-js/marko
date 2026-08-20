// tags/widget/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;D%;<section><!></section>" });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1("<section>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html$1("</section>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D%l");
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)("D%l"), ((_w0) => `<main>${_w0}</main>`)($template$1)),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;Db%;<i>B:<!></i>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell,<b>A</b>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_kind = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_kind__closures = new Set();
	_html$1("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	widget_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _persisted_reason();
		const $scope1_id = _scope_id();
		_if$1(() => {
			if (input.kind === "a") {
				const $scope3_id = _scope_id();
				_html$1("<b>A</b>");
				$scope0_reason && writeScope($scope3_id, {}, "__tests__/template.marko", "3:6");
				return 0;
			} else if (input.kind === "b") {
				const $scope2_id = _scope_id();
				_html$1(`<i>B:<!>${_patch_text($scope2_id, "#text/0", input.kind, $scope0_owned, 0)}${_el_resume($scope2_id, "#text/0")}</i>`);
				_subscribe(_source_if($scope0_reason, 0) && $input_kind__closures, writeScope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_kind": 1
				}, "__tests__/template.marko", "4:6"));
				return 1;
			}
		}, $scope1_id, "#text/0", 1, $sg__input_kind, $sg__input_kind, void 0, void 0, ["__tests__/template.marko_3*shell", "__tests__/template.marko_2*shell"]);
		$scope0_reason && _subscribe($input_kind__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_html$1("</main>");
	$scope0_reason && writeScope($scope0_id, {
		input_kind: input.kind,
		"ClosureScopes:input_kind": $input_kind__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_kind: ["input.kind"] });
}, 1, () => [widget_default]);
