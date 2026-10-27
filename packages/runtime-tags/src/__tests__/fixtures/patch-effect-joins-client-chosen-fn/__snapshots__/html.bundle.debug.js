// template.marko
const $template = "<button>toggle</button>";
const $walks = " b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; ;<button>toggle</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	let upper = false;
	let n = 0;
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	const pick = upper ? up : low;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_n#5_pick#9");
	_patch_effect($scope0_id, "PatchInit:__tests__/template.marko_0_upper#4_up#6_low#7/init", _filled_guard($scope0_reason, 0) && "up", _filled_guard($scope0_reason, 0) && "low");
	_scope($scope0_id, {
		input_title: input.title,
		upper,
		n,
		up,
		low,
		pick
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		upper: "1:6",
		n: "2:6",
		up: "3:8",
		low: "4:8",
		pick: "5:8"
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:up", up, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:low", low, !$sg__input_title));
}, 1);
