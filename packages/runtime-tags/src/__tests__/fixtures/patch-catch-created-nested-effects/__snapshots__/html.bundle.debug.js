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
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content __tests__/template.marko_4_input_v#0:3/subscribe!__tests__/template.marko_4_input_v#0:3",
	"__tests__/template.marko_1*content": /*@__PURE__*/ (() => `__tests__/template.marko_1*content${_shell_marker(_shell_setup([[
		"__tests__/template.marko_1_input_v#0:3/subscribe",
		"__tests__/template.marko_1_input_show#0:4/subscribe",
		"__tests__/template.marko_1_input_items#0:5/subscribe"
	], ["__tests__/template.marko_1_input_v#0:3"]], ["#childScope/3>", $setup$1]))}`)(),
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_input_v#0:3/subscribe!__tests__/template.marko_2_input_v#0:3;D ;<i> </i>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell __tests__/template.marko_3_input_v#0:3/subscribe!__tests__/template.marko_3_input_v#0:3_x#2;D ;<u> </u>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 2), $wi__input_v = _write_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 3), $sg__input_items = _server_guard($scope0_reason, 4), $cg__input_msg = _client_guard($scope0_reason, 6), $cg__input_fail = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_v__closures = new Set();
	const $input_show__closures = new Set();
	const $input_items__closures = new Set();
	const $input_fail__closures = new Set();
	const $input_msg__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope5_reason = _scope_reason();
		const $scope5_id = _scope_id();
		_html(`<p>${_text_resume($scope5_id, "#text/0", input.fail ? boom(input.msg) : input.msg, void 0, $scope0_reason, 1)}</p>`);
		(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 1)) && _patch_init($scope5_id, "__tests__/template.marko_5_input_fail#0:6/subscribe");
		(_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 1)) && _patch_init($scope5_id, "__tests__/template.marko_5_input_msg#0:7/subscribe");
		_patch_join_init($scope5_id, "__tests__/template.marko_5_input_fail#0:6_input_msg#0:7/init", $scope0_reason, 1, _filled_guard($scope0_reason, 5) && ">input_fail", _filled_guard($scope0_reason, 6) && ">input_msg");
		_subscribe(_unfilled_if($scope0_reason, 6) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_fail__closures, _scope($scope5_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_fail && "__tests__/template.marko_5_input_fail#0:6/subscribe"), $cg__input_msg && "__tests__/template.marko_5_input_msg#0:7/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const $catch_content__w__closures = new Set();
		const w = input.v * 10;
		_html(`<b>${_text_resume($scope1_id, "#text/0", err.message, void 0, 4, 0)}</b>`);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<i>${_text_resume($scope2_id, "#text/0", w, void 0, $scope0_reason, 2)}</i>`);
				_script($scope2_id, "__tests__/template.marko_2_input_v#0:3");
				$cg__input_v && _patch_init($scope2_id, "__tests__/template.marko_2_input_v#0:3/init");
				$cg__input_v && _patch_init($scope2_id, "__tests__/template.marko_2_w#1:7/init");
				_subscribe($wi__input_v && $input_v__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_v/8": $wi__input_v && 1
				}, "__tests__/template.marko", "10:6"), "__tests__/template.marko_2_input_v#0:3/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 3);
		_for_of(input.items, (x) => {
			const $scope3_id = _scope_id();
			_filled_guard($scope0_reason, 4) && _patch_write($scope3_id, "PatchMarkedWrite:x", x, !$sg__input_items);
			_html(`<u>${_text_resume($scope3_id, "#text/0", x, void 0, $scope0_reason, 4)}</u>`);
			_script($scope3_id, "__tests__/template.marko_3_input_v#0:3_x#2");
			_patch_join_init($scope3_id, "__tests__/template.marko_3_input_v#0:3_x#2/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">>input_v", _filled_guard($scope0_reason, 4) && "x");
			_subscribe($wi__input_v && $input_v__closures, _scope($scope3_id, {
				x,
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:input_v/8": $wi__input_v && 2
			}, "__tests__/template.marko", "14:6", { x: "14:10" }), $cg__input_v && "__tests__/template.marko_3_input_v#0:3/subscribe");
		}, 0, $scope1_id, "#text/2", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_3*shell", $scope0_reason, 4);
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "#childScope/3", 0);
		wrap_default({ content: _content_elide("__tests__/template.marko_4*content", () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_html(`<s>${_text_resume($scope4_id, "#text/0", w, void 0, $scope0_reason, 2)}</s>`);
			_script($scope4_id, "__tests__/template.marko_4_input_v#0:3");
			$cg__input_v && _patch_init($scope4_id, "__tests__/template.marko_4_input_v#0:3/init");
			_unfilled_if($scope0_reason, 2) && _patch_init($scope4_id, $cg__input_v ? "__tests__/template.marko_4_w#1:7/init" : "__tests__/template.marko_4_w#1:7/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $catch_content__w__closures, _subscribe($wi__input_v && $input_v__closures, _scope($scope4_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:input_v/8": $wi__input_v && 3
			}, "__tests__/template.marko", "18:6")));
		}, $scope1_id) });
		_patch_child_end();
		_script($scope1_id, "__tests__/template.marko_1_input_v#0:3");
		$cg__input_show && _patch_write($scope1_id, "PatchWrite:w", w, 1);
		$cg__input_v && _patch_init($scope1_id, "__tests__/template.marko_1_input_v#0:3/init");
		$cg__input_show && _patch_init($scope1_id, "__tests__/template.marko_1_input_show#0:4/init");
		_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "__tests__/template.marko_1_input_items#0:5/init");
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_items__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_show__closures, _subscribe($wi__input_v && $input_v__closures, _scope($scope1_id, {
			w: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 2)) && w,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:w/13": $wi__input_v && _unfilled_if($scope0_reason, 2) && $catch_content__w__closures,
			"#childScope/3": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:4", { w: "7:12" }), "__tests__/template.marko_1_input_v#0:3/subscribe"), "__tests__/template.marko_1_input_show#0:4/subscribe"), "__tests__/template.marko_1_input_items#0:5/subscribe");
	}, void 0, "__tests__/template.marko_1*content", "__tests__/template.marko_5*content", 1, 1, 1);
	_filled_guard($scope0_reason, 5) && $cg__input_msg && _patch_write($scope0_id, "PatchMarkedWrite:input_fail", input.fail);
	_filled_guard($scope0_reason, 6) && $cg__input_fail && _patch_write($scope0_id, "PatchMarkedWrite:input_msg", input.msg);
	_scope($scope0_id, {
		input_v: input.v,
		input_show: input.show,
		input_items: input.items,
		input_fail: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 1)) && input.fail,
		input_msg: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 1)) && input.msg,
		"ClosureScopes:input_v/8": $wi__input_v && $input_v__closures,
		"ClosureScopes:input_show/9": _write_if($scope0_reason, 3) && $input_show__closures,
		"ClosureScopes:input_items/10": _write_if($scope0_reason, 4) && $input_items__closures,
		"ClosureScopes:input_fail/11": _write_if($scope0_reason, 5) && (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 1)) && $input_fail__closures,
		"ClosureScopes:input_msg/12": _write_if($scope0_reason, 6) && (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 1)) && $input_msg__closures
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_show: ["input.show"],
		input_items: ["input.items"],
		input_fail: ["input.fail"],
		input_msg: ["input.msg"]
	}) || (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.v), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.show, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.items, !$sg__input_items));
}, 1);
