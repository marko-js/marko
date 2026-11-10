// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($Row_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `/${_w0}& b`)($Row_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Row_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 0));
	let count = 0;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__b = _filled_guard($scope1_reason, 2);
		_html(`<p>${_text_mark($scope1_id, "#text/0", a() + b(), 1, $scope1_reason, 0)}</p>`);
		_patch_render($scope1_id, "__tests__/template.marko_1_a#3_b#4/setup", (($fg__b ? " b" : "") + (_filled_guard($scope0_reason, 0) ? " >input_x" : "")).slice(1), $scope1_reason, 0);
		_scope($scope1_id, {
			a: _write_if($scope1_reason, 2) && a,
			b: _write_if($scope1_reason, 1) && b
		}, "__tests__/template.marko", "2:2", {
			a: "2:15",
			b: "2:18"
		}) || $fg__b && _patch_write($scope1_id, "PatchMarkedWrite:b", b, !_server_guard($scope1_reason, 2));
	}, $scope0_id) };
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({
		a: _resume(() => count, "__tests__/template.marko_0/a", $scope0_id),
		b: _bind_resume(() => input.x, "__tests__/template.marko_0/b", $scope0_id)
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_x: input.x,
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		count: "1:6"
	});
}, 1);
