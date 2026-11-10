// template.marko
const $template = "<p> </p><button>+</button>";
const $walks = "D l b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D l ;<p> </p><button>+</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _server_guard($scope0_reason, 0), $fg__input_x = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	const b = { value: input.x };
	_html(`<p>${_text_mark($scope0_id, "#text/0", count + ":" + JSON.stringify(b))}</p><button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_count#5_b#6/setup", $fg__input_x && "input_x");
	_scope($scope0_id, {
		count,
		b
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		b: "2:8"
	}) || ($fg__input_x && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !$sg__input_x), $fg__input_x && _patch_write($scope0_id, "PatchMarkedWrite:b", b, !$sg__input_x));
}, 1);
