// template.marko
const $template = "<a id=go href=/next>go</a><p>pending <!></p><!><span> </span>";
const $walks = " bDb%l%bD l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<b> </b>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !; bDb%l%bD ;<a id=go href=/next>go</a><p>pending <!></p><!><span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_a = _client_guard($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const go = _action($scope0_id, "__tests__/template.marko_0_go#8/action");
	_html(`<a id=go href=/next>go</a>${_el_resume($scope0_id, "#a/0")}<p>pending ${_text_resume($scope0_id, "#text/1", go.pending, 2)}</p>`);
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.a, (a) => {
			const $scope3_id = _scope_id();
			_html(`<b>${_patch_text($scope3_id, "#text/0", a, void 0, $scope0_reason, 0)}</b>`);
			$scope0_page && _scope($scope3_id, {}, "__tests__/template.marko", "5:4");
		}, 1, "__tests__/template.marko_3*content", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_a ? "__tests__/template.marko_1_input_a#0:6/init" : "__tests__/template.marko_1_input_a#0:6/subscribe");
		$scope0_page && $wi__input_a && _subscribe(_unfilled_if($scope0_reason, 0) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_a && "__tests__/template.marko_1_input_a#0:6/subscribe", 0);
		$wi__input_a && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<i>loading</i>");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1, void 0, 2);
	_html(`<span>${_patch_text($scope0_id, "#text/3", input.label, void 0, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0_go#8");
	$scope0_page && _scope($scope0_id, {
		go,
		"TagVariableChange:go": void 0 || void 0,
		"ClosureScopes:input_a/11": $wi__input_a && _unfilled_if($scope0_reason, 0) && $input_a__closures
	}, "__tests__/template.marko", 0, {
		go: "1:9",
		"TagVariableChange:go": ["goFn", "1:9"]
	});
}, 1);
