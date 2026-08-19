// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
_shells({ "__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html$1("<main>");
	_if$1(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_patch_dynamic_tag($scope1_id, "#text/0", input.content, $scope0_owned, 2);
			_dynamic_tag$1($scope1_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 2), 1);
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html$1(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script$1($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_content: input.content,
		count
	}, "__tests__/template.marko", 0, {
		input_content: ["input.content"],
		count: "1:6"
	});
	_resume_branch($scope0_id);
}, 1, 0);
