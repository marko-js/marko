// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content,<em>inner</em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<em>outer</em>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _persisted_reason();
			_await($scope2_id, "#text/0", input.promise, (value) => {
				const $scope5_id = _scope_id();
				_html(`<em>${_patch_text($scope5_id, "#text/0", value, $scope0_owned, 0)}${_el_resume($scope5_id, "#text/0")}</em>`);
				writeScope($scope5_id, {}, "__tests__/template.marko", "4:8");
			});
			$scope0_reason && _subscribe($input_promise__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"));
			_resume_branch($scope2_id);
		}, $scope1_id), { catch: attrTag({ content: _content_record("__tests__/template.marko_4*content", $scope1_id) }) });
		$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
	}, $scope0_id), { catch: attrTag({ content: _content_record("__tests__/template.marko_3*content", $scope0_id) }) });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, { "ClosureScopes:input_promise": $input_promise__closures }, "__tests__/template.marko", 0);
}, 1, 0);
