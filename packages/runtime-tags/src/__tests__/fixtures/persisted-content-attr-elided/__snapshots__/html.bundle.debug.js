// template.marko
const $template = "<main><section></section><p> </p></main>";
const $walks = "D bD m";
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko;D bD ;<main><section></section><p> </p></main>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const frag = { content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_owned, 1)}</em>`);
		_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
	}, $scope0_id) };
	_html("<main><section>");
	const $content = input.mode ? frag.content : null;
	_patch_dynamic_tag($scope0_id, "#section/0", $content, 0, 0, 0, 0, $scope0_owned, 2);
	_attr_content("#section/0", $scope0_id, $content, void 0, 1);
	_html(`</section>${_el_resume($scope0_id, "#section/0")}<p>${_patch_text($scope0_id, "#text/1", input.note, void 0, $scope0_owned, 1)}</p></main>`);
	$scope0_reason && _scope($scope0_id, {
		input_note: input.note,
		frag_content: frag?.content,
		"ClosureScopes:input_note": $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		frag_content: ["frag.content", "1:9"]
	});
}, 1, 0);
