// tags/widget/index.marko
const $template$1 = "<p> </p><!><!>";
const $walks$1 = "D l%c";
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;D l%;<p> </p><!><!>" });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html$1(`<p>${_patch_text($scope0_id, "#text/0", input.label, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</p>`);
	_patch_dynamic_tag($scope0_id, "#text/1", input.content, $scope0_owned, 1);
	_dynamic_tag$1($scope0_id, "#text/1", input.content, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; ;<div></div>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_b = _source_guard($scope0_reason, 4), $sg__input_a = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	const $input_label__closures = new Set();
	_html$1("<main>");
	_if$1(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			_html$1("<div>");
			_if$1(() => {
				if (input.b) {
					const $scope2_id = _scope_id();
					_set_serialize_reason({ 0: _mask_group($scope0_owned, 5) });
					const $childScope = _peek_scope_id();
					_patch_child($scope2_id, "#childScope/0", $childScope);
					widget_default({
						label: input.label,
						content: _content_elide("__tests__/template.marko_3*content", () => {
							const $scope3_reason = _persisted_reason();
							const $scope3_id = _scope_id();
							_html$1(`<em>${_patch_text($scope3_id, "#text/0", input.text, $scope0_owned, 6)}${_el_resume($scope3_id, "#text/0")}</em>`);
							_subscribe(_source_if($scope0_reason, 6) && $input_text__closures, writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:10"));
							_resume_branch($scope3_id);
						}, $scope2_id)
					});
					_subscribe(_source_if($scope0_reason, 5) && $input_label__closures, writeScope($scope2_id, {
						_: _scope_with_id($scope1_id),
						"#childScope/0": _existing_scope($childScope)
					}, "__tests__/template.marko", "4:8"));
					return 0;
				}
			}, $scope1_id, "#div/0", 1, $sg__input_b, $sg__input_b, void 0, void 0, ["__tests__/template.marko_2*shell"]);
			_html$1(`</div>${_el_resume($scope1_id, "#div/0", $sg__input_b)}`);
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_a, $sg__input_a, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html$1(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_a)}`);
	$scope0_reason && writeScope($scope0_id, {
		input_b: input.b,
		input_label: input.label,
		input_text: input.text,
		"ClosureScopes:input_text": $input_text__closures,
		"ClosureScopes:input_label": $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		input_label: ["input.label"],
		input_text: ["input.text"]
	});
}, 1, () => [widget_default]);
