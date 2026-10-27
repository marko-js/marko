// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<em>loading</em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "#text/0", value, void 0, $scope0_reason, 1)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "4:6");
		}, 1, "__tests__/template.marko_3*content", 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_promise ? "__tests__/template.marko_1_input_promise#0:5/init" : "__tests__/template.marko_1_input_promise#0:5/subscribe");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), $cg__input_promise && "__tests__/template.marko_1_input_promise#0:5/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<em>loading</em>");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1, void 0, 2);
	_html("</main>");
	_scope($scope0_id, { "ClosureScopes:input_promise/6": $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures }, "__tests__/template.marko", 0);
}, 1);
