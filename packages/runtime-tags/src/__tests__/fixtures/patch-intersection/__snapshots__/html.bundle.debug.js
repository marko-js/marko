// template.marko
const $template = "<div><h1> </h1><h2> </h2><button>+</button></div>";
const $walks = "E lD l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E lD l ;<div><h1> </h1><h2> </h2><button>+</button></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	let other = 10;
	_html(`<div><h1>${_text_mark($scope0_id, "#text/0", input.title + " #" + count)}</h1><h2>${_text_mark($scope0_id, "#text/1", input.title + " / " + other)}</h2><button>+</button>${_el_mark($scope0_id, "#button/2")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_title#5_count#6/setup", $fg__input_title && "input_title");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_title#5_other#8/setup", $fg__input_title && "input_title");
	_scope($scope0_id, {
		input_title: input.title,
		count,
		other
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6",
		other: "2:6"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
}, 1);
