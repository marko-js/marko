// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<em>bad</em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_message__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.message, void 0, $scope0_owned, 0)}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_message__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
		_resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_record("__tests__/template.marko_2*content", $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { "ClosureScopes:input_message": $input_message__closures }, "__tests__/template.marko", 0);
}, 1, 0);
