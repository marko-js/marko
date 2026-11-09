// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;D%;<div><!></div>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(msg) {
	throw new Error(msg);
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D ;<p> </p>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content !__tests__/template.marko_4_input_v#0:3",
	"__tests__/template.marko_1*content": `__tests__/template.marko_1*content${_shell_marker([[], ["__tests__/template.marko_1_input_v#0:3"]], ["#childScope/3>", $setup$1])}`,
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell !__tests__/template.marko_2_input_v#0:3;D ;<i> </i>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell !__tests__/template.marko_3_input_v#0:3_x#2;D ;<u> </u>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 2), $wi__input_v = _write_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 3), $cg__input_items = _client_guard($scope0_reason, 4), $ui__input_fail__OR__input_msg = _unfilled_if($scope0_reason, 1), $ui__input_msg = _unfilled_if($scope0_reason, 6), $ui__input_fail = _unfilled_if($scope0_reason, 5), $sg__input_items = _server_guard($scope0_reason, 4), $fg__input_v = _filled_guard($scope0_reason, 2), $fg__input_show = _filled_guard($scope0_reason, 3), $fg__input_items2 = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_v__closures = new Set();
	const $input_show__closures = new Set();
	const $input_items__closures = new Set();
	const $input_fail__closures = new Set();
	const $input_msg__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope5_reason = _scope_reason();
		const $scope5_id = _scope_id();
		_html(`<p>${_text_mark($scope5_id, "#text/0", input.fail ? boom(input.msg) : input.msg, 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope5_id, "__tests__/template.marko_5_input_fail#0:6/subscribe");
		_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope5_id, "__tests__/template.marko_5_input_msg#0:7/subscribe");
		_patch_render($scope5_id, "__tests__/template.marko_5_input_fail#0:6_input_msg#0:7/setup", [_filled_guard($scope0_reason, 5) && ">input_fail", _filled_guard($scope0_reason, 6) && ">input_msg"], $scope0_reason, 1);
		_subscribe(_unfilled_if($scope0_reason, 6) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_fail__closures, _scope($scope5_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), _client_guard($scope0_reason, 5) && "__tests__/template.marko_5_input_fail#0:6/subscribe"), _client_guard($scope0_reason, 6) && "__tests__/template.marko_5_input_msg#0:7/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id(), $ui__input_v2 = _unfilled_if($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 3);
		const $catch_content__w__closures = new Set();
		const w = input.v * 10;
		_html(`<b>${_text_mark($scope1_id, "#text/0", err.message, 1, 4, 0)}</b>`);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<i>${_text_mark($scope2_id, "#text/0", w, 1, $scope0_reason, 2)}</i>`);
				_script($scope2_id, "__tests__/template.marko_2_input_v#0:3");
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_v#0:3/subscribe", $cg__input_v);
				$cg__input_v && _patch_render($scope2_id, "__tests__/template.marko_2_w#1:7/setup");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_v__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_v/8": $wi__input_v && 1
				}, "__tests__/template.marko", "10:6"), $cg__input_v && "__tests__/template.marko_2_input_v#0:3/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope0_reason, 3), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 3);
		_for_of(input.items, (x) => {
			const $scope3_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 4);
			$fg__input_items && _patch_write($scope3_id, "PatchMarkedWrite:x", x, !$sg__input_items);
			_html(`<u>${_text_mark($scope3_id, "#text/0", x, 1, $scope0_reason, 4)}</u>`);
			_script($scope3_id, "__tests__/template.marko_3_input_v#0:3_x#2");
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_v#0:3/subscribe");
			_patch_render($scope3_id, "__tests__/template.marko_3_input_v#0:3_x#2/setup", [_filled_guard($scope0_reason, 2) && ">>input_v", $fg__input_items && "x"], $scope0_reason, 0);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_v__closures, _scope($scope3_id, {
				x,
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:input_v/8": $wi__input_v && 2
			}, "__tests__/template.marko", "14:6", { x: "14:10" }), $cg__input_v && "__tests__/template.marko_3_input_v#0:3/subscribe");
		}, 0, $scope1_id, "#text/2", 1, 1, 1, 0, 0, "__tests__/template.marko_3*shell", $scope0_reason, 4);
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/3", 0);
		wrap_default({ content: _content("__tests__/template.marko_4*content", () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id(), $ui__input_v = _unfilled_if($scope0_reason, 2);
			_html(`<s>${_text_mark($scope4_id, "#text/0", w, 1, $scope0_reason, 2)}</s>`);
			_script($scope4_id, "__tests__/template.marko_4_input_v#0:3");
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_input_v#0:3/subscribe", $cg__input_v);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_w#1:7/subscribe", $cg__input_v);
			_subscribe($ui__input_v && $catch_content__w__closures, _subscribe($ui__input_v && $input_v__closures, _scope($scope4_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:input_v/8": $wi__input_v && 3
			}, "__tests__/template.marko", "18:6"), $cg__input_v && "__tests__/template.marko_4_input_v#0:3/subscribe"), $cg__input_v && "__tests__/template.marko_4_w#1:7/subscribe");
		}, $scope1_id, 0) });
		_patch_child_end();
		_script($scope1_id, "__tests__/template.marko_1_input_v#0:3");
		$ui__input_show && _patch_write($scope1_id, "PatchWrite:w", w, 1);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_v#0:3/subscribe", $cg__input_v);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_show#0:4/subscribe", $cg__input_show);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_items#0:5/subscribe", $cg__input_items);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_items__closures, _subscribe($ui__input_show && $input_show__closures, _subscribe($ui__input_v2 && $input_v__closures, _scope($scope1_id, {
			w: ($ui__input_show || $ui__input_v2) && w,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:w/13": $wi__input_v && ($ui__input_v2 || $ui__input_show) && $catch_content__w__closures,
			"#childScope/3": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:4", { w: "7:12" }), $cg__input_v && "__tests__/template.marko_1_input_v#0:3/subscribe"), $cg__input_show && "__tests__/template.marko_1_input_show#0:4/subscribe"), $cg__input_items && "__tests__/template.marko_1_input_items#0:5/subscribe");
	}, 0, "__tests__/template.marko_1*content", "__tests__/template.marko_5*content", 1, 1, 1);
	$fg__input_v && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_v#3/subscribers", "input_v");
	$fg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_show#4/subscribers", "input_show");
	$fg__input_items2 && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_items#5/subscribers", "input_items");
	_scope($scope0_id, {
		input_v: input.v,
		input_show: input.show,
		input_items: input.items,
		input_fail: ($ui__input_msg || $ui__input_fail__OR__input_msg) && input.fail,
		input_msg: ($ui__input_fail || $ui__input_fail__OR__input_msg) && input.msg,
		"ClosureScopes:input_v/8": $wi__input_v && $input_v__closures,
		"ClosureScopes:input_show/9": _write_if($scope0_reason, 3) && $input_show__closures,
		"ClosureScopes:input_items/10": _write_if($scope0_reason, 4) && $input_items__closures,
		"ClosureScopes:input_fail/11": _write_if($scope0_reason, 5) && ($ui__input_fail || $ui__input_fail__OR__input_msg) && $input_fail__closures,
		"ClosureScopes:input_msg/12": _write_if($scope0_reason, 6) && ($ui__input_msg || $ui__input_fail__OR__input_msg) && $input_msg__closures
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_show: ["input.show"],
		input_items: ["input.items"],
		input_fail: ["input.fail"],
		input_msg: ["input.msg"]
	}) || ($fg__input_v && _patch_write($scope0_id, "PatchMarkedWrite:input_v", input.v, !_server_guard($scope0_reason, 2)), $fg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 3)), $fg__input_items2 && _patch_write($scope0_id, "PatchMarkedWrite:input_items", input.items, !$sg__input_items), _filled_guard($scope0_reason, 5) && $ui__input_msg && _patch_write($scope0_id, "PatchMarkedWrite:input_fail", input.fail, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 6) && $ui__input_fail && _patch_write($scope0_id, "PatchMarkedWrite:input_msg", input.msg, !_server_guard($scope0_reason, 6)));
}, 1);
