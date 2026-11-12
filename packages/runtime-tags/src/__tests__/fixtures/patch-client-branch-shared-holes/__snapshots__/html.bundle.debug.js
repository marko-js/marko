// tags/press.marko
const $template$2 = "<button>press</button>";
const $walks$2 = " b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/press.marko": "__tests__/tags/press.marko; ;<button>press</button>" });
var press_default = _template("__tests__/tags/press.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_onPress = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button>press</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/press.marko_0_input_onPress#3", 1, $fg__input_onPress);
	_scope($scope0_id, { input_onPress: input.onPress }, "__tests__/tags/press.marko", 0, { input_onPress: ["input.onPress"] }) || $fg__input_onPress && _patch_write($scope0_id, "PatchMarkedWrite:input_onPress", input.onPress, !_server_guard($scope0_reason, 0));
});

// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "#text/2", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": `__tests__/template.marko_2*content|2${_shell_marker([[], ["__tests__/template.marko_2"]], ["#childScope/4>", $setup$2], ["#childScope/5>", $setup$2])};${/*@__PURE__*/ ((_w0, _w1) => `b%b b%b%b/${_w0}&/${_w1}&D l`)(" b", " b")};${/*@__PURE__*/ ((_w0, _w1) => `<!><!><button>own</button><!><!>${_w0}${_w1}<span> </span>`)($template$2, $template$2)}`,
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $uf__input_label = _updates_from($scope0_reason, 4), $ui__input_show = _unfilled_if($scope0_reason, 5), $ui__input_label__OR__input_tag = _unfilled_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 4), $cg__input_flag = _client_guard($scope0_reason, 6), $cg__input_tag = _client_guard($scope0_reason, 7), $wg__input_show = _write_guard($scope0_reason, 5), $ui__input_flag2 = _unfilled_if($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 5), $sg__input_label = _server_guard($scope0_reason, 4), $fg__input_label2 = _filled_guard($scope0_reason, 4), $wi__input_flag = _write_if($scope0_reason, 6), $wi__input_tag = _write_if($scope0_reason, 7);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_flag__closures = new Set();
	const $input_tag__closures = new Set();
	const $top2__closures = new Set();
	$fg__input_label2 && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !$sg__input_label) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#3/subscribers", "input_label");
	const top = _bind_resume(function() {
		console.log("top", input.label);
	}, "__tests__/template.marko_0/top", $scope0_id, 1);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope1_id, "#childScope/0", 5);
			card_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 4), $ui__input_flag = _unfilled_if($scope0_reason, 6), $fg__input_label = _filled_guard($scope0_reason, 4);
				const Note = { content: _content_resume("__tests__/template.marko_3*content", () => {
					const $scope3_id = _scope_id();
					const $scope3_reason = _scope_reason();
					_html(`<i>${_text_mark($scope3_id, "#text/0", input.label, 1, $scope0_reason, 4)}</i>`);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_label#0:3/subscribe", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope3_id, {
						_: _write_if($scope0_reason, 3) && _scope_with_id($scope2_id),
						"ClosureSignalIndex:input_label/8": $wi__input_label && 1
					}, "__tests__/template.marko", "4:6"), $cg__input_label && "__tests__/template.marko_3_input_label#0:3/subscribe");
				}, $scope2_id) };
				const h = _bind_resume(function() {
					console.log("h", input.label);
				}, "__tests__/template.marko_2/h", $scope2_id);
				_dynamic_tag($scope2_id, "#text/0", input.flag ? Note : "b", { x: 1 }, 1, 0, 0, _write_guard($scope0_reason, 6), $scope0_reason, 6);
				_html(`<button>own</button>${_el_mark($scope2_id, "#button/1")}`);
				_dynamic_tag($scope2_id, "#text/2", input.tag, { onClick: _resume(function() {
					console.log("static");
				}, "__tests__/template.marko_2/onClick") }, 9, _content_resume("__tests__/template.marko_4*content", () => {
					const $scope4_id = _scope_id();
					const $scope4_reason = _scope_reason();
					_html("s");
				}, $scope2_id), 0, _write_guard($scope0_reason, 7), $scope0_reason, 7);
				_dynamic_tag($scope2_id, "#text/3", input.tag, { onClick: top }, 17, _content_resume("__tests__/template.marko_5*content", () => {
					const $scope5_id = _scope_id();
					const $scope5_reason = _scope_reason();
					_html("t");
				}, $scope2_id), 0, _write_guard($scope0_reason, 1), $scope0_reason, 1, 0, 7);
				_set_scope_reason($uf__input_label << 1);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/4", 3);
				press_default({ onPress: _bind_resume(function() {
					console.log("press", input.label);
				}, "__tests__/template.marko_2/onPress", $scope2_id) });
				_patch_child_end();
				_set_scope_reason($uf__input_label << 1);
				const $childScope2 = _peek_scope_id($scope2_id, "#childScope/5", 4);
				press_default({ onPress: h });
				_patch_child_end();
				_html(`<span>${_text_mark($scope2_id, "#text/6", typeof h, 1, $scope0_reason, 4)}</span>`);
				_script($scope2_id, "__tests__/template.marko_2");
				$ui__input_flag && _patch_write($scope2_id, "PatchWrite:Note", Note, 1);
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:3/subscribe");
				_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_flag#0:5/subscribe");
				_unfilled_if($scope0_reason, 7) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_tag#0:6/subscribe", $cg__input_tag);
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_top#0:7/subscribe");
				_patch_render($scope2_id, "__tests__/template.marko_2_input_tag#0:6_top#0:7/setup", ((_filled_guard($scope0_reason, 7) ? " >>input_tag" : "") + ($fg__input_label ? " >>top" : "") + ($fg__input_label ? " >>input_label" : "")).slice(1), $scope0_reason, 1);
				$cg__input_flag && _patch_render($scope2_id, "__tests__/template.marko_2_input_flag#0:5_Note#8/setup");
				_subscribe($ui__input_label && $top2__closures, _subscribe(_unfilled_if($scope0_reason, 7) && $input_tag__closures, _subscribe($ui__input_flag && $input_flag__closures, _subscribe($ui__input_label && $input_label__closures, _scope($scope2_id, {
					Note: $ui__input_flag && Note,
					_: _scope_with_id($scope1_id),
					"#childScope/4": _existing_scope($childScope),
					"#childScope/5": _existing_scope($childScope2)
				}, "__tests__/template.marko", "3:4", { Note: "4:13" }), $cg__input_label && "__tests__/template.marko_2_input_label#0:3/subscribe"), $cg__input_flag && "__tests__/template.marko_2_input_flag#0:5/subscribe"), $cg__input_tag && "__tests__/template.marko_2_input_tag#0:6/subscribe"), $cg__input_label && "__tests__/template.marko_2_top#0:7/subscribe");
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope3)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 5);
	_scope($scope0_id, {
		input_label: input.label,
		input_flag: _write_if($scope0_reason, 5) && ($ui__input_show || $ui__input_flag2) && input.flag,
		input_tag: _write_if($scope0_reason, 0) && (_unfilled_if($scope0_reason, 0) || $ui__input_label__OR__input_tag || _unfilled_if($scope0_reason, 7)) && input.tag,
		top: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || $ui__input_label__OR__input_tag) && top,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_flag/9": $wi__input_flag && $wi__input_flag && ($ui__input_flag2 || $ui__input_show) && $input_flag__closures,
		"ClosureScopes:input_tag/10": $wi__input_tag && $wi__input_tag && ($ui__input_label__OR__input_tag || $ui__input_show) && $input_tag__closures,
		"ClosureScopes:top/11": $wi__input_label && $wi__input_label && ($ui__input_label__OR__input_tag || $ui__input_show) && $top2__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_flag: ["input.flag"],
		input_tag: ["input.tag"],
		top: "1:8"
	}) || (_filled_guard($scope0_reason, 6) && _patch_write($scope0_id, "PatchMarkedWrite:input_flag", input.flag, !_server_guard($scope0_reason, 6)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_flag#5/subscribers", "input_flag"), _filled_guard($scope0_reason, 7) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 7)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#6/subscribers", "input_tag"), $fg__input_label2 && _patch_write($scope0_id, "PatchMarkedWrite:top", top, !$sg__input_label) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_top#7/subscribers", "top input_label"));
}, 1);
