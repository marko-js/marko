// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<span> </span>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,loading",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
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
			const $await_content__value__closures = new Set();
			_try($scope3_id, "#text/0", _content_resume("__tests__/template.marko_4*content", () => {
				const $scope4_id = _scope_id();
				const $scope4_reason = _persisted_reason();
				_html(`<span>${_patch_text($scope4_id, "#text/0", value, void 0, $scope0_owned, 0)}</span>`);
				_scope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "5:8");
			}, $scope3_id), { catch: attrTag({ content: _content_elide("__tests__/template.marko_5*content", (err) => {
				const $scope5_reason = _persisted_reason();
				const $scope5_id = _scope_id();
				_html(`<em>${_text_resume($scope5_id, "#text/0", err.message)}</em>`);
				_scope($scope5_id, {}, "__tests__/template.marko", "6:10");
			}, $scope3_id) }) }, 1);
			$scope0_reason && _scope($scope3_id, { "ClosureScopes:value": $await_content__value__closures }, "__tests__/template.marko", "4:6");
		}, 1, void 0, 1);
		$scope0_reason && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
		$scope0_reason && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_record("__tests__/template.marko_2*content", $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, { "ClosureScopes:input_promise": $input_promise__closures }, "__tests__/template.marko", 0);
}, 1, 0);
