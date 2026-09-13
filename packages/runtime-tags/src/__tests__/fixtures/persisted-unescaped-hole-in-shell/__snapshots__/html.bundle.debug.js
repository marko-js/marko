// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D lD l%;<div> </div><div class=x> </div><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%b%;<!><!><!><!>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D lD ;<div> </div><div class=y> </div>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell; ; "
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_html = _source_guard($scope0_reason, 2), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_html__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<div>${_patch_html($scope1_id, "#text/0", input.html, void 0, $scope0_reason, 2)}</div><div class=x>${_patch_html($scope1_id, "#text/1", input.html, void 0, $scope0_reason, 2)}</div>`);
			_if(() => {
				if (input.show > 1) {
					const $scope2_id = _scope_id();
					_if(() => {
						if (input.html) {
							const $scope3_id = _scope_id();
							_html(`<div>${_patch_html($scope3_id, "#text/0", input.html, void 0, $scope0_reason, 2)}</div><div class=y>${_patch_html($scope3_id, "#text/1", input.html, void 0, $scope0_reason, 2)}</div>`);
							_subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope3_id, {
								_: _scope_with_id($scope2_id),
								"ClosureSignalIndex:input_html": 1
							}, "__tests__/template.marko", "6:8"));
							return 0;
						}
					}, $scope2_id, "#text/0", 1, $sg__input_html, $sg__input_html, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 2);
					_if(() => {
						if (input.html) {
							const $scope4_id = _scope_id();
							_html(_patch_html($scope4_id, "#text/0", input.html, void 0, $scope0_reason, 2));
							_subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope4_id, {
								_: _scope_with_id($scope2_id),
								"ClosureSignalIndex:input_html": 2
							}, "__tests__/template.marko", "10:8"));
							return 0;
						}
					}, $scope2_id, "#text/1", 1, $sg__input_html, $sg__input_html, void 0, void 0, ["__tests__/template.marko_4*shell"], $scope0_reason, 2);
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_html__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6"));
					return 0;
				}
			}, $scope1_id, "#text/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {
		input_show: _source_if($scope0_reason, 1) && input.show,
		input_html: input.html,
		"ClosureScopes:input_html": $input_html__closures
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_html: ["input.html"]
	});
}, 1, 0);
