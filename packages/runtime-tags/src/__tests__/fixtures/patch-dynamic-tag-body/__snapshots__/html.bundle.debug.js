// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;D%;<section><!></section>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,hi",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; ; ",
	"~__tests__/template.marko_1*content": "~__tests__/template.marko_1*content; ; ",
	"__tests__/template.marko": "__tests__/template.marko !;b%b%;<!><!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_cls = _write_guard($scope0_reason, 0), $wg__input_wrap = _write_guard($scope0_reason, 5), $cg__input_cls = _client_guard($scope0_reason, 4), $cg__input_tag = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.tag, { class: input.cls }, 1, _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html("hi");
	}, $scope0_id), 0, $wg__input_tag__OR__input_cls, $scope0_reason, 0, 0, 3);
	_dynamic_tag($scope0_id, "#text/1", input.wrap ? wrap_default : null, {}, 10, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(_text_resume($scope1_id, "#text/0", input.note, 1, $scope0_reason, 6));
		_client_guard($scope0_reason, 6) && _patch_init($scope1_id, "__tests__/template.marko_1_input_note#0:8/init");
		_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
	}, $scope0_id, 1), 0, $wg__input_wrap, $scope0_reason, 5);
	_scope($scope0_id, {
		input_tag: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && input.tag,
		input_cls: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.cls,
		input_note: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 6)) && input.note,
		"ClosureScopes:input_note/9": _write_if($scope0_reason, 6) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		input_cls: ["input.cls"],
		input_note: ["input.note"]
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_cls && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.tag, !_server_guard($scope0_reason, 3)), $cg__input_cls && _content_withhold(input.tag), _filled_guard($scope0_reason, 4) && $cg__input_tag && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.cls, !_server_guard($scope0_reason, 4)), $cg__input_tag && _content_withhold(input.cls), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.note, !_server_guard($scope0_reason, 6)));
}, 1);
