// template.marko
const $template = "<output> </output><button>toggle</button>";
const $walks = "D l b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D l ;<output> </output><button>toggle</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	const pick = upper ? up : low;
	_html(`<output>${_text_mark($scope0_id, "#text/0", pick())}</output><button>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_pick#9", 1, $sg__input_title && 2, [
		"input_title",
		"up",
		"low"
	]);
	_patch_render($scope0_id, "__tests__/template.marko_0_upper#5_up#6_low#7/setup", [
		$fg__input_title && "up",
		$fg__input_title && "input_title",
		$fg__input_title && "low"
	]);
	_scope($scope0_id, {
		input_title: input.title,
		upper,
		up,
		low,
		pick
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		upper: "1:6",
		up: "2:8",
		low: "3:8",
		pick: "4:8"
	}) || ($fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:up", up, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:low", low, !$sg__input_title));
}, 1);
