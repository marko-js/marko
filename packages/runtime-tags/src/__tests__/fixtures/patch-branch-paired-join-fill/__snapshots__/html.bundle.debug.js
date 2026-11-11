// tags/panel.marko
const $template$1 = "<!><!><button>+</button>";
const $walks$1 = "b%b b";
const $setup$1 = [[], ["__tests__/tags/panel.marko_0"]];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !__tests__/tags/panel.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell __tests__/tags/panel.marko_1_count#0:7/setup;D lD lD ;<p> </p><p> </p><em> </em>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1), $sg__input_x = _server_guard($scope0_reason, 2), $sg__input_y = _server_guard($scope0_reason, 3), $fg__input_x2 = _filled_guard($scope0_reason, 2), $fg__input_y2 = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_x = _filled_guard($scope0_reason, 2), $fg__input_y = _filled_guard($scope0_reason, 3);
			const a = input.x + "a";
			$fg__input_x && _patch_write($scope1_id, "PatchMarkedWrite:a", a, !$sg__input_x);
			const b = input.y + "b";
			$fg__input_y && _patch_write($scope1_id, "PatchMarkedWrite:b", b, !$sg__input_y);
			_html(`<p>${_text_mark($scope1_id, "#text/0", a + count)}</p><p>${_text_mark($scope1_id, "#text/1", b + count)}</p><em>${_text_mark($scope1_id, "#text/2", a + b, 1, $scope0_reason, 0)}</em>`);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/tags/panel.marko_1_input_x#0:5/setup");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/tags/panel.marko_1_input_y#0:6/setup");
			_patch_render($scope1_id, "__tests__/tags/panel.marko_1_count#0:7_a#3/setup", $fg__input_x && "a");
			_patch_render($scope1_id, "__tests__/tags/panel.marko_1_count#0:7_b#5/setup", $fg__input_y && "b");
			_patch_render($scope1_id, "__tests__/tags/panel.marko_1_a#3_b#5/setup", (($fg__input_x ? " a" : "") + ($fg__input_y ? " b" : "")).slice(1), $scope0_reason, 0);
			_scope($scope1_id, {
				a,
				b,
				_: _scope_with_id($scope0_id)
			}, "__tests__/tags/panel.marko", "2:2", {
				a: "3:10",
				b: "4:10"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/tags/panel.marko_1*shell"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/panel.marko_0");
	$fg__input_x2 && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/panel.marko_1_input_x#0:5/setup", "input_x");
	$fg__input_y2 && $cg__input_show && _patch_render($scope0_id, "__tests__/tags/panel.marko_1_input_y#0:6/setup", "input_y");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_0_count#7/fill", count, 1);
	_scope($scope0_id, {
		input_x: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.x,
		input_y: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.y,
		count
	}, "__tests__/tags/panel.marko", 0, {
		input_x: ["input.x"],
		input_y: ["input.y"],
		count: "1:6"
	}) || ($fg__input_x2 && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !$sg__input_x), $fg__input_y2 && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_y", input.y, !$sg__input_y));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>y</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>y</button>`)($template$1, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_show = _updates_from($scope0_reason, 1), $uf__input_x = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let y = "y0";
	_set_scope_reason(134 | ($uf__input_show << 3 | $uf__input_x << 5));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	panel_default({
		x: input.x,
		y,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(38 | ($uf__input_show << 3 | $uf__input_x << 7));
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	panel_default({
		x: y,
		y: input.x,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>y</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		y,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { y: "1:6" });
}, 1);
