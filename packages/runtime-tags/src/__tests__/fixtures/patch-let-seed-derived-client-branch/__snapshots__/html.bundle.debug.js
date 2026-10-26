// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>toggle</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const d = input.v + "!";
	let on = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			let x = d;
			_html(`<p>${_text_resume($scope1_id, "#text/0", x)} ${_text_resume($scope1_id, "#text/1", input.w, _write_guard($scope0_reason, 2) * 2)}</p>`);
			$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_w: input.w,
		d,
		on
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		d: "1:8",
		on: "2:6"
	}) : (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", d, !_server_guard($scope0_reason, 1)));
}, 1);
