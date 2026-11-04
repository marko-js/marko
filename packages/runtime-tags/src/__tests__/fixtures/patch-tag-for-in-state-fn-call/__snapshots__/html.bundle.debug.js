// tags/card.marko
const $template$1 = "<!><!><button class=s>+</button>";
const $walks$1 = "b%b b";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({
	"__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;b%b ;<!><!><button class=s>+</button>",
	"__tests__/tags/card.marko_1*shell": "__tests__/tags/card.marko_1*shell;b%;<!><!><!>",
	"__tests__/tags/card.marko_2*shell": "__tests__/tags/card.marko_2*shell __tests__/tags/card.marko_2_s#0:7/subscribe;D ;<span> </span>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_sel = _write_guard($scope0_reason, 3), $cg__input_sel = _client_guard($scope0_reason, 3), $sg__input_obj = _server_guard($scope0_reason, 2), $cg__input_obj = _client_guard($scope0_reason, 2), $sg__input_prefix = _server_guard($scope0_reason, 1), $fg__input_prefix = _filled_guard($scope0_reason, 1), $fg__input_sel = _filled_guard($scope0_reason, 3), $wi__input_prefix = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $s__closures = new Set();
	const $fmt2__closures = new Set();
	$fg__input_prefix && _patch_write($scope0_id, "PatchMarkedWrite:input_prefix", input.prefix, !$sg__input_prefix);
	let s = 0;
	const fmt = _bind_resume((v) => input.prefix + v, "__tests__/tags/card.marko_0/fmt", $scope0_id);
	_for_in(input.obj, (k, v) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "PatchMarkedWrite:v", v, !$sg__input_obj);
		_if(() => {
			if (k === input.sel) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "#text/0", fmt(v + s))}</span>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/tags/card.marko_2_fmt#0:8/subscribe");
				_patch_render($scope2_id, "__tests__/tags/card.marko_2_s#0:7_fmt#0:8_v#1:4/setup", [
					_filled_guard($scope0_reason, 1) && ">>fmt",
					_filled_guard($scope0_reason, 1) && ">>input_prefix",
					_filled_guard($scope0_reason, 2) && ">v"
				]);
				_subscribe($wi__input_prefix && $fmt2__closures, _subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/card.marko", "3:26"), "__tests__/tags/card.marko_2_s#0:7/subscribe"), _client_guard($scope0_reason, 1) && "__tests__/tags/card.marko_2_fmt#0:8/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_sel, 1, 0, 0, ["__tests__/tags/card.marko_2*shell"], $scope0_reason, 0);
		_filled_guard($scope0_reason, 2) && ($cg__input_obj || $cg__input_sel) && _patch_render($scope1_id, "__tests__/tags/card.marko_2_v#1:4/setup", "v");
		$cg__input_sel && _patch_render($scope1_id, "__tests__/tags/card.marko_1_input_sel#0:6/setup");
		_scope($scope1_id, {
			"#LoopKey": _unfilled_if($scope0_reason, 3) && k,
			v,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/card.marko", "3:2", {
			"#LoopKey": "3:6",
			v: "3:9"
		});
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/card.marko_1*shell", $scope0_reason, 2);
	_html(`<button class=s>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	$fg__input_sel && $cg__input_obj && _patch_render($scope0_id, "__tests__/tags/card.marko_1_input_sel#0:6/setup", "input_sel");
	$fg__input_prefix && ($cg__input_obj || $cg__input_sel) && _patch_subscribers($scope0_id, "__tests__/tags/card.marko_0_fmt#8/subscribers", ["fmt", "input_prefix"]);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", s, 1);
	_scope($scope0_id, {
		input_prefix: input.prefix,
		input_sel: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.sel,
		s,
		fmt,
		"ClosureScopes:s/10": $s__closures,
		"ClosureScopes:fmt/11": $wi__input_prefix && $fmt2__closures
	}, "__tests__/tags/card.marko", 0, {
		input_prefix: ["input.prefix"],
		input_sel: ["input.sel"],
		s: "1:6",
		fmt: "2:8"
	}) || ($fg__input_sel && $cg__input_obj && _patch_write($scope0_id, "PatchMarkedWrite:input_sel", input.sel, !_server_guard($scope0_reason, 3)), $fg__input_prefix && _patch_write($scope0_id, "PatchMarkedWrite:fmt", fmt, !$sg__input_prefix));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=p>p</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)($walks$1)};${((_w0) => `<!>${_w0}<button class=p>p</button>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_dyn = _filled_guard($scope0_reason, 3), $fg__input_prefix = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let pre = "a";
	_set_scope_reason(24 | (_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 5 | _updates_from($scope0_reason, 2) << 7));
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({
		obj: input.obj,
		sel: input.sel,
		prefix: input.dyn ? pre : input.prefix
	});
	_patch_child_end();
	_html(`<button class=p>p</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_dyn#6_input_prefix#7_pre#8/setup", [$fg__input_dyn && "input_dyn", $fg__input_prefix && "input_prefix"]);
	_scope($scope0_id, {
		input_dyn: input.dyn,
		input_prefix: input.prefix,
		pre,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_dyn: ["input.dyn"],
		input_prefix: ["input.prefix"],
		pre: "1:6"
	}) || ($fg__input_dyn && _patch_write($scope0_id, "PatchMarkedWrite:input_dyn", input.dyn, !_server_guard($scope0_reason, 3)), $fg__input_prefix && _patch_write($scope0_id, "PatchMarkedWrite:input_prefix", input.prefix, !_server_guard($scope0_reason, 4)));
}, 1);
