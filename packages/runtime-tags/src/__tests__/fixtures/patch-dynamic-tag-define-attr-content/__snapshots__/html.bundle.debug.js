// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D%;<div><!></div>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%;<p><!></p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1), $ui__input_on = _unfilled_if($scope0_reason, 1), $fg__input_note = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const A = { content: _content_resume("__tests__/template.marko_2*content", ({ item }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__item = _write_guard($scope2_reason, 0);
		_html("<p>");
		_dynamic_tag($scope2_id, "#text/0", item, {}, 2, 0, 0, $wg__item);
		_html("</p>");
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	const B = { content: _content_resume("__tests__/template.marko_3*content", ({ item }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__item2 = _write_guard($scope3_reason, 0);
		_html("<div>");
		_dynamic_tag($scope3_id, "#text/0", item, {}, 10, 0, 0, $wg__item2);
		_html("</div>");
		_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.on ? A : B, { item: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.note, 1, $scope0_reason, 2)}</em>`);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_note#0:4/subscribe", $cg__input_note);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"), $cg__input_note && "__tests__/template.marko_1_input_note#0:4/subscribe");
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_note: input.note }] : []) }) }, 17, 0, 0, $wg__input_on, $scope0_reason, 1, 0, void 0, 0, 0, "__tests__/template.marko_1*content");
	$fg__input_note && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#4/subscribers", "input_note");
	_scope($scope0_id, {
		input_note: ($ui__input_on || _unfilled_if($scope0_reason, 2)) && input.note,
		A: $ui__input_on && A,
		B: $ui__input_on && B,
		"ClosureScopes:input_note/8": _write_if($scope0_reason, 2) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		A: "1:9",
		B: "2:9"
	}) || $fg__input_note && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || $ui__input_on) && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 2));
}, 1);
