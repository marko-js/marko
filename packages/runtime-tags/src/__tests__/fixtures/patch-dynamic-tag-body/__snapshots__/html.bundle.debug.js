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
	"__tests__/template.marko": "__tests__/template.marko;b%b%;<!><!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 6), $wg__input_tag__OR__input_cls = _write_guard($scope0_reason, 0), $wg__input_wrap = _write_guard($scope0_reason, 5), $ui__input_tag__OR__input_cls = _unfilled_if($scope0_reason, 0), $ui__input_wrap = _unfilled_if($scope0_reason, 5), $fg__input_tag = _filled_guard($scope0_reason, 3), $fg__input_cls = _filled_guard($scope0_reason, 4);
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
		_html(_text_mark($scope1_id, "#text/0", input.note, 2, $scope0_reason, 6));
		$cg__input_note && _patch_render($scope1_id, "__tests__/template.marko_1_input_note#0:8/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 6) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), $cg__input_note && "__tests__/template.marko_1_input_note#0:8/subscribe");
	}, $scope0_id, 0), 0, $wg__input_wrap, $scope0_reason, 5);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_tag#4_input_cls#5/setup", (($fg__input_tag ? " input_tag" : "") + ($fg__input_cls ? " input_cls" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_tag: $ui__input_tag__OR__input_cls && input.tag,
		input_cls: $ui__input_tag__OR__input_cls && input.cls,
		input_note: ($ui__input_wrap || _unfilled_if($scope0_reason, 6)) && input.note,
		"ClosureScopes:input_note/9": _write_if($scope0_reason, 6) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		input_cls: ["input.cls"],
		input_note: ["input.note"]
	}) || ($fg__input_tag && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 3)), $fg__input_cls && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_cls", input.cls, !_server_guard($scope0_reason, 4)), _filled_guard($scope0_reason, 6) && $ui__input_wrap && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 6)) && _client_guard($scope0_reason, 5) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#8/subscribers", "input_note"));
}, 1);
