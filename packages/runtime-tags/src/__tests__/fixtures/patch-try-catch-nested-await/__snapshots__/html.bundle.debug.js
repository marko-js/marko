// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<strong> </strong>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<span> </span>",
	"__tests__/template.marko_2_#text#1/await": "__tests__/template.marko_2_#text#1/await;D ;<strong> </strong>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D l%;<em> </em><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D l%;<em> </em><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_b = _client_guard($scope0_reason, 2), $cg__input_a = _client_guard($scope0_reason, 1), $wi__input_a__OR__input_b = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	const $input_a__closures = new Set();
	_html("<main>");
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.a, (a) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "#text/0", a, void 0, $scope0_reason, 1)}</em>`);
			_await($scope2_id, "#text/1", input.b, (b) => {
				const $scope4_id = _scope_id();
				_html(`<strong>${_patch_text($scope4_id, "#text/0", b, void 0, $scope0_reason, 2)}</strong>`);
				$scope0_page && _scope($scope4_id, {}, "__tests__/template.marko", "5:8");
			}, 1, "__tests__/template.marko_4*content", 1);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_b ? "__tests__/template.marko_2_input_b#0:4/init" : "__tests__/template.marko_2_input_b#0:4/subscribe");
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _scope($scope2_id, {}, "__tests__/template.marko", "3:6"), $cg__input_b && "__tests__/template.marko_2_input_b#0:4/subscribe");
		}, 1, "__tests__/template.marko_2*content", 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_a ? "__tests__/template.marko_1_input_a#0:3/init" : "__tests__/template.marko_1_input_a#0:3/subscribe");
		$scope0_page && $wi__input_a__OR__input_b && _subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), $cg__input_a && "__tests__/template.marko_1_input_a#0:3/subscribe", 0);
		$wi__input_a__OR__input_b && _resume_branch($scope1_id);
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason(), $scope3_page = _page_render();
		const $scope3_id = _scope_id();
		_html(`<span>${_patch_text($scope3_id, "#text/0", err.message)}</span>`);
		$scope3_page && _scope($scope3_id, {}, "__tests__/template.marko", "9:6");
	}, void 0, "__tests__/template.marko_3*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_b/6": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_b__closures,
		"ClosureScopes:input_a/5": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_a__closures
	}, "__tests__/template.marko", 0);
}, 1);
