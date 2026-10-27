// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title__OR__input_upper = _write_guard($scope0_reason, 0), $scope0_page = _page_render(), $sg__input_title = _server_guard($scope0_reason, 1), $cg__input_upper = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	const pick = input.upper ? up : low;
	let open = false;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "#text/0", pick(), $wg__input_title__OR__input_upper)}</p>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		input_upper: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.upper,
		up: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && up,
		low: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && low,
		pick,
		open
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_upper: ["input.upper"],
		up: "1:8",
		low: "2:8",
		pick: "3:8",
		open: "4:6"
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.upper, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && $cg__input_upper && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", up, !$sg__input_title), _filled_guard($scope0_reason, 1) && $cg__input_upper && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", low, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill3", pick, !_server_guard($scope0_reason, 0)));
}, 1);
