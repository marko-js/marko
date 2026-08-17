// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let mode = 0;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (mode === 1) {
			const $scope2_id = _scope_id();
			_html("<b>one</b>");
			writeScope($scope2_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		} else if (mode === 2) {
			const $scope1_id = _scope_id();
			_html(`<i>${_escape(input.title)}${_el_resume($scope1_id, "#text/0", _source_guard($scope0_reason, 0))}</i>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "7:4");
			return 1;
		} else {
			const $scope3_id = _scope_id();
			_html("<s>none</s>");
			writeScope($scope3_id, {}, "__tests__/template.marko", "10:4");
			return 2;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		mode
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		mode: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
