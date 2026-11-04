// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<pre id=log></pre>${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Row_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Row_content__walks)};${((_w0) => `<pre id=log></pre>${_w0}<button>+</button>`)($Row_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_x = _filled_guard($scope0_reason, 0), $fg__input_y = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_mark($scope1_id, "#text/0", a + b, 1, $scope1_reason, 0)}</p>`);
		_script($scope1_id, "__tests__/template.marko_1_a#3_b#4", 1, 0, 0, "__tests__/template.marko_1_a#3_b#4/setup", $scope1_reason, 0);
		_scope($scope1_id, {
			a,
			b
		}, "__tests__/template.marko", "2:2", {
			a: "2:15",
			b: "2:18"
		});
	}, $scope0_id) };
	_html("<pre id=log></pre>");
	_set_scope_reason(126);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({
		a: n + input.x,
		b: n + input.y
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_x#4_n#6/setup", $fg__input_x && "input_x");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_y#5_n#6/setup", $fg__input_y && "input_y");
	_scope($scope0_id, {
		input_x: input.x,
		input_y: input.y,
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		input_y: ["input.y"],
		n: "1:6"
	}) || ($fg__input_x && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 0)), $fg__input_y && _patch_write($scope0_id, "PatchMarkedWrite:input_y", input.y, !_server_guard($scope0_reason, 1)));
}, 1);
