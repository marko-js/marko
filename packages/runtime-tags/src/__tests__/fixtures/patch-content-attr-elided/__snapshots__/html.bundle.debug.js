// template.marko
const $template = "<main><section></section><p> </p></main>";
const $walks = "D bD m";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko;D bD ;<main><section></section><p> </p></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 1), $ui__input_mode = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const frag = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.note, 1, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_note#0:4/subscribe", $cg__input_note);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_note && "__tests__/template.marko_1_input_note#0:4/subscribe");
	}, $scope0_id) };
	_html("<main><section>");
	_attr_content("#section/0", $scope0_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 2);
	_html(`</section>${_el_mark($scope0_id, "#section/0", _updates_from($scope0_reason, 2))}<p>${_text_mark($scope0_id, "#text/1", input.note, 1, $scope0_reason, 1)}</p></main>`);
	_scope($scope0_id, {
		input_note: ($ui__input_mode || _unfilled_if($scope0_reason, 1)) && input.note,
		frag_content: $ui__input_mode && frag.content,
		"ClosureScopes:input_note/9": _write_if($scope0_reason, 1) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		frag_content: ["frag.content", "1:9"]
	}) || _filled_guard($scope0_reason, 1) && $ui__input_mode && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#4/subscribers", "input_note");
}, 1);
