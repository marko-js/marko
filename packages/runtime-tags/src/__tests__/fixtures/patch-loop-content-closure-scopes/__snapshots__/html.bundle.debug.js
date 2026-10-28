// tags/panel.marko
const $template$1 = "<div class=panel><h4> </h4><div class=body><!></div></div>";
const $walks$1 = "E lD%m";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/panel.marko": "__tests__/tags/panel.marko;E lD%;<div class=panel><h4> </h4><div class=body><!></div></div>" });
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=panel><h4>${_text_resume($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</h4><div class=body>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</div></div>");
	_scope($scope0_id, {}, "__tests__/tags/panel.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_panels = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.panels, (p) => {
		const $scope1_id = _scope_id();
		const $for_content__p_text__closures = new Set();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		panel_default({
			label: p.label,
			content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", p.text, void 0, $scope0_reason, 0)}</p>`);
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_p_text#1:4/init");
				_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__p_text__closures, _scope($scope2_id, { _: $wi__input_panels && _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"));
			}, $scope1_id)
		});
		_patch_child_end();
		_scope($scope1_id, {
			"ClosureScopes:p_text/5": $wi__input_panels && _unfilled_if($scope0_reason, 0) && $for_content__p_text__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2");
	}, "id", $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
