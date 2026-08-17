// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (count > 1) {
			const $scope1_id = _scope_id();
			if ($scope0_reason) _if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html("<p>promo</p>");
					$scope0_reason && writeScope($scope2_id, {}, "__tests__/template.marko", "4:6");
					return 0;
				}
			}, $scope1_id, "#text/0", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1);
			writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_show: input.show,
		count
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.show);
	_resume_branch($scope0_id);
}, 1, 0);
