// tags/frame.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko;b%;<!><!><!>" });
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_x = _write_guard($scope0_reason, 0), $ui__input_content__OR__input_x = _unfilled_if($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, [input.x], 1, 0, 1, $wg__input_content__OR__input_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "__tests__/tags/frame.marko_0_input_content#3_input_x#4/setup", (($fg__input_content ? " input_content" : "") + ($fg__input_x ? " input_x" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_content: _write_if($scope0_reason, 2) && $ui__input_content__OR__input_x && input.content,
		input_x: _write_if($scope0_reason, 1) && $ui__input_content__OR__input_x && input.x
	}, "__tests__/tags/frame.marko", 0, {
		input_content: ["input.content"],
		input_x: ["input.x"]
	}) || ($fg__input_content && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 1)), $fg__input_x && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 2)));
});

// tags/panel.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/1>", $setup$2]);
_shells({
	"__tests__/tags/panel.marko_2*content": "__tests__/tags/panel.marko_2*content",
	"__tests__/tags/panel.marko_1*content": "__tests__/tags/panel.marko_1*content,",
	"__tests__/tags/panel.marko": `__tests__/tags/panel.marko${_shell_marker($setup$1)};${((_w0) => `b%b/${_w0}&b`)("b%c")};${((_w0) => `<!><!>${_w0}<!>`)($template$2)}`,
	"__tests__/tags/panel.marko_3*shell": "__tests__/tags/panel.marko_3*shell >#childScope/0>;/&;"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 1), $uf__input_x = _updates_from($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $sg__input_n = _server_guard($scope0_reason, 1), $wi__input_n = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const Info = { content: _content("__tests__/tags/panel.marko_1*content", () => {
		const $scope1_id = _scope_id(), $fg__input_n = _filled_guard($scope0_reason, 1);
		const $scope1_reason = _scope_reason();
		const twice = input.n * 2;
		_script($scope1_id, "__tests__/tags/panel.marko_1_input_n#0:4_twice#0", 0, $fg__input_n);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "__tests__/tags/panel.marko_1_input_n#0:4/subscribe", $cg__input_n);
		$cg__input_n && _patch_render($scope1_id, "__tests__/tags/panel.marko_1_input_n#0:4_twice#0/setup");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope1_id, {
			twice,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/panel.marko", "1:2", { twice: "2:10" }), $cg__input_n && "__tests__/tags/panel.marko_1_input_n#0:4/subscribe", 0) || $fg__input_n && _patch_write($scope1_id, "PatchMarkedWrite:twice", twice, !$sg__input_n);
		_resume_branch($scope1_id);
	}, $scope0_id, 0) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 0, 0, $scope0_id);
			Info.content({});
			_patch_child_end();
			_scope($scope3_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/panel.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/panel.marko_3*shell"], $scope0_reason, 2);
	_set_scope_reason($uf__input_x << 1 | $uf__input_x << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	frame_default({
		x: input.x,
		content: _content_resume("__tests__/tags/panel.marko_2*content", (x) => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_mark($scope2_id, "#text/0", x, 1, 4, 0)} ${_text_mark($scope2_id, "#text/1", input.n, 2, $scope0_reason, 1)}</p>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/tags/panel.marko_2_input_n#0:4/subscribe", $cg__input_n);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_n__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_n/7": $wi__input_n && 1
			}, "__tests__/tags/panel.marko", "8:2"), $cg__input_n && "__tests__/tags/panel.marko_2_input_n#0:4/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_n: input.n,
		"ClosureScopes:input_n/7": $wi__input_n && $input_n__closures,
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/tags/panel.marko", 0, { input_n: ["input.n"] }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !$sg__input_n) && _patch_subscribers($scope0_id, "__tests__/tags/panel.marko_0_input_n#4/subscribers", "input_n");
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>toggle</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>toggle</button>`)($template$1, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_n__OR__input_x = _updates_from($scope0_reason, 0), $uf__input_n = _updates_from($scope0_reason, 1), $uf__input_x = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let shown = true;
	_set_scope_reason($uf__input_n__OR__input_x << 1 | $uf__input_n << 3 | _updates_from($scope0_reason, 3) << 5 | $uf__input_x << 7);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	panel_default({
		n: input.n,
		x: input.x,
		show: input.show
	});
	_patch_child_end();
	_set_scope_reason(32 | ($uf__input_n__OR__input_x << 1 | $uf__input_n << 3 | $uf__input_x << 7));
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	panel_default({
		n: input.n,
		x: input.x,
		show: shown
	});
	_patch_child_end();
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		shown,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { shown: "1:6" });
}, 1);
