// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<span> </span>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<span> </span>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<em>loading</em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<span> </span>",
	"__tests__/template.marko_1_#text#1/await": "__tests__/template.marko_1_#text#1/await;D ;<span> </span>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%b%;<!><!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_await($scope1_id, "#text/0", input.a, (a) => {
			const $scope3_id = _scope_id();
			_html(`<span>${_patch_text($scope3_id, "#text/0", a, void 0, $scope0_owned, 1)}</span>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "3:4");
		}, 1, "__tests__/template.marko_1_#text#0/await", 1);
		_await($scope1_id, "#text/1", input.b, (b) => {
			const $scope4_id = _scope_id();
			_html(`<span>${_patch_text($scope4_id, "#text/0", b, void 0, $scope0_owned, 2)}</span>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "4:4");
		}, 1, "__tests__/template.marko_1_#text#1/await", 1);
		$scope0_reason && _subscribe(_source_if($scope0_reason, 2) && $input_b__closures, _subscribe(_source_if($scope0_reason, 1) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2")));
		$scope0_reason && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_record("__tests__/template.marko_2*content", $scope0_id) }) }, 1);
	$scope0_reason && _scope($scope0_id, {
		"ClosureScopes:input_a": $input_a__closures,
		"ClosureScopes:input_b": $input_b__closures
	}, "__tests__/template.marko", 0);
}, 1, 0);
