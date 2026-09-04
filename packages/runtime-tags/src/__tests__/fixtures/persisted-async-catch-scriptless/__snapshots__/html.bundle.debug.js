// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "#text/0", value, void 0, $scope0_owned, 0)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "3:6");
		}, 1, "__tests__/template.marko_1_#text#0/await", 1);
		$scope0_reason && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
		$scope0_reason && _resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_elide("__tests__/template.marko_2*content", (err) => {
		const $scope2_reason = _persisted_reason();
		const $scope2_id = _scope_id();
		_html(`<em>${_text_resume($scope2_id, "#text/0", err.message)}</em>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "6:6");
	}, $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { "ClosureScopes:input_promise": $input_promise__closures }, "__tests__/template.marko", 0);
}, 1, 0);
