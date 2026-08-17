// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const limit = input.min + 1;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (count > limit) {
			const $scope1_id = _scope_id();
			_html("<p>over</p>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		count,
		limit
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		limit: "2:8"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", limit);
	_resume_branch($scope0_id);
}, 1, 0);
