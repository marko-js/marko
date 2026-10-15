// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (count > 1) {
			const $scope1_id = _scope_id();
			if ($scope0_page) _if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_html("<p>promo</p>");
					_write_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "4:6");
					return 0;
				}
			}, $scope1_id, "#text/0", $wg__input_show, $wg__input_show, 0, 0, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_show: input.show,
		count
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.show, !_server_guard($scope0_reason, 0));
}, 1);
