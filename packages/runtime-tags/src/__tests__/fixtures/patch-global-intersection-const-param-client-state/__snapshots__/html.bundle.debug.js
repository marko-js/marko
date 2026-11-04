// template.marko
const $template = "<p> </p><button> </button>";
const $walks = "D l D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D l D ;<p> </p><button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	const x = input.a + count;
	_html(`<p>${_text_mark($scope0_id, "#text/0", x + $global$1.suffix)}</p><button>${_text_mark($scope0_id, "#text/2", count)}</button>${_el_mark($scope0_id, "#button/1")}`);
	_fill_global_subscribe("__tests__/template.marko_0_x#8_$global_suffix#7", $scope0_id, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_a#5_count#6/setup", $fg__input_a && "input_a");
	_scope($scope0_id, {
		input_a: input.a,
		count,
		x
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		count: "1:6",
		x: "2:8"
	}) || $fg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 0));
}, 1);
