// template.marko
const $template = "<!><!><!><!><!><!>";
const $walks = "b%b%b%b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content",
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content,",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,",
	"__tests__/template.marko_0_#text#0/await": "__tests__/template.marko_0_#text#0/await,",
	"__tests__/template.marko_0_#text#3/await": "__tests__/template.marko_0_#text#3/await,",
	"__tests__/template.marko": "__tests__/template.marko;b%b%b%b%;<!><!><!><!><!><!>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;b%;<!><!><!>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell,"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 1), $ui__input_p = _unfilled_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	_await($scope0_id, "#text/0", input.p, (a) => {
		const $scope1_id = _scope_id();
	}, 1, "__tests__/template.marko_1*content", $ui__input_p && 2);
	_try($scope0_id, "#text/1", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
	}, () => {
		const $scope6_reason = _scope_reason();
		const $scope6_id = _scope_id();
		_html("<em>loading</em>");
	}, void 0, "__tests__/template.marko_6*content", void 0, "__tests__/template.marko_2*content", 0, 0, 2);
	_for_to(input.n, 0, 1, (i) => {
		const $scope3_id = _scope_id();
		_for_to(i, 0, 1, (j) => {
			const $scope4_id = _scope_id();
		}, 0, $scope3_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_4*shell", $scope0_reason, 1);
		_scope($scope3_id, {}, "__tests__/template.marko", "8:2");
	}, 0, $scope0_id, "#text/2", 1, 1, 1, 0, 0, "__tests__/template.marko_3*shell", $scope0_reason, 1);
	_await($scope0_id, "#text/3", input.p, (b) => {
		const $scope5_id = _scope_id();
		_script($scope5_id, "__tests__/template.marko_5_input_n#0:7", 0, _filled_guard($scope0_reason, 1));
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope5_id, "__tests__/template.marko_5_input_n#0:7/subscribe", $cg__input_n);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope5_id, {}, "__tests__/template.marko", "13:2"), $cg__input_n && "__tests__/template.marko_5_input_n#0:7/subscribe", 0);
		_resume_branch($scope5_id);
	}, 1, "__tests__/template.marko_5*content", $ui__input_p, 1);
	_scope($scope0_id, {
		input_n: input.n,
		"ClosureScopes:input_n/8": _write_if($scope0_reason, 1) && $input_n__closures
	}, "__tests__/template.marko", 0, { input_n: ["input.n"] }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 1));
}, 1);
