// template.marko
_shells({ a: "a !a0;E lD l ;<div><h1> </h1><h2> </h2><button>+</button></div>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	let other = 10;
	_html(`<div><h1>${_text_mark($scope0_id, "a", input.title + " #0")}</h1><h2>${_text_mark($scope0_id, "b", input.title + " / 10")}</h2><button>+</button>${_el_mark($scope0_id, "c")}</div>`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_title && "f");
	_patch_render($scope0_id, "a2", $fg__input_title && "f");
	_scope($scope0_id, {
		f: input.title,
		g: count,
		i: other
	}) || $fg__input_title && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 0));
}, 1);
