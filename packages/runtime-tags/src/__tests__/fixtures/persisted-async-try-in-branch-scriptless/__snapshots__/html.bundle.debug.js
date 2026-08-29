// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content,loading",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _persisted_reason();
				_await($scope2_id, "#text/0", Promise.resolve(input.value), () => {
					const $scope3_id = _scope_id();
					_html(`<em>${_patch_text($scope3_id, "#text/0", input.value, void 0, $scope0_owned, 2)}</em>`);
					_scope($scope3_id, {
						_: _scope_with_id($scope2_id),
						"ClosureSignalIndex:input_value": 1
					}, "__tests__/template.marko", "4:8");
					_resume_branch($scope3_id);
				}, void 0, "__tests__/template.marko_2_#text#0/await");
				$scope0_reason && _subscribe(_source_if($scope0_reason, 2) && $input_value__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6"));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_record("__tests__/template.marko_4*content", $scope1_id) }) });
			$scope0_reason && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && _scope($scope0_id, {
		input_value: input.value,
		"ClosureScopes:input_value": $input_value__closures
	}, "__tests__/template.marko", 0, { input_value: ["input.value"] });
}, 1, 0);
