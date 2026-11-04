// template.marko
const $Row_content__walks = "D l b";
const $Row_content__template = "<p> </p><div></div>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($Row_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `/${_w0}& b`)($Row_content__walks)};${((_w0) => `${_w0}<button>+</button>`)($Row_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__a = _filled_guard($scope1_reason, 1), $ui__a = _unfilled_if($scope1_reason, 1), $fg__b = _filled_guard($scope1_reason, 2);
		_html(`<p>${_text_mark($scope1_id, "#text/0", a + b, 1, $scope1_reason, 0)}</p><div></div>${_el_mark($scope1_id, "#div/1")}`);
		_script($scope1_id, "__tests__/template.marko_1_a#4", 1, $fg__a, "a");
		_patch_render($scope1_id, "__tests__/template.marko_1_a#4_b#5/setup", [$fg__a && "a", $fg__b && "b"], $scope1_reason, 0);
		_scope($scope1_id, {
			a,
			b: ($ui__a || _unfilled_if($scope1_reason, 0)) && b
		}, "__tests__/template.marko", "2:2", {
			a: "2:15",
			b: "2:18"
		}) || ($fg__a && _patch_write($scope1_id, "PatchMarkedWrite:a", a, !_server_guard($scope1_reason, 1)), $fg__b && $ui__a && _patch_write($scope1_id, "PatchMarkedWrite:b", b, !_server_guard($scope1_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
