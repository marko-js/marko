// counter.marko
const $template$5 = "<b> </b>";
const $walks$5 = "D l";
const $setup$5 = [[], []];
_shells({ "__tests__/counter.marko": "__tests__/counter.marko;D ;<b> </b>" });
var counter_default = _template("__tests__/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {}, "__tests__/counter.marko", 0);
});

// other.marko
const $template$4 = "<i> </i>";
const $walks$4 = "D l";
const $setup$4 = [[], []];
_shells({ "__tests__/other.marko": "__tests__/other.marko;D ;<i> </i>" });
var other_default = _template("__tests__/other.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</i>`);
	_scope($scope0_id, {}, "__tests__/other.marko", 0);
});

// tags/chooser.marko
const $template$3 = "<button>toggle</button><!><!>";
const $walks$3 = " b%c";
const $setup$3 = [[], ["__tests__/tags/chooser.marko_0"]];
_shells({ "__tests__/tags/chooser.marko": "__tests__/tags/chooser.marko !__tests__/tags/chooser.marko_0; b%;<button>toggle</button><!><!>" });
var chooser_default = _template("__tests__/tags/chooser.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_Tag__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.Tag, { label: input.label }, 0, 0, 0, $wg__input_Tag__OR__input_label);
			_scope($scope1_id, {}, "__tests__/tags/chooser.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/chooser.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/chooser.marko_fill2", show, 1);
	_scope($scope0_id, {
		input_Tag: input.Tag,
		input_label: input.label,
		show
	}, "__tests__/tags/chooser.marko", 0, {
		input_Tag: ["input.Tag"],
		input_label: ["input.label"],
		show: "1:6"
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/chooser.marko_fill0", input.Tag, !_server_guard($scope0_reason, 1)), _content_withhold(input.Tag), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/chooser.marko_fill1", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label));
});

// tags/card.marko
const $template$2 = "<section><button>clear</button><!></section>";
const $walks$2 = "D b%l";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, $scope0_reason, 0, "c");
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _content_withhold(input.content);
});

// tags/outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$2);
const $setup$1 = _shell_setup([[], ["__tests__/tags/outer.marko_0"]], ["#childScope/1>", $setup$2]);
_shells({ "__tests__/tags/outer.marko": /*@__PURE__*/ (() => `__tests__/tags/outer.marko${_shell_marker($setup$1)};${((_w0) => ` b/${_w0}&`)($walks$2)};${((_w0) => `<button>x</button>${_w0}`)($template$2)}`)() });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	card_default({ content: o });
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", o, 1);
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/outer.marko", 0) || _content_withhold(input.content);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($template$3);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)($walks$3);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$3]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;Db%;<em>static <!></em>",
	"~__tests__/template.marko_2*content": "~__tests__/template.marko_2*content;Db%;<em>static <!></em>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&%c`)($walks$3)};${((_w0) => `<!><!>${_w0}<!><!>`)($template$3)}`)(),
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label__OR__input_show = _write_if($scope0_reason, 2), $cg__input_which = _client_guard($scope0_reason, 3), $cg__input_label = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.which ? counter_default : other_default, { label: input.label }, 5, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 3) << 3 | _mask_group($scope0_reason, 4) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 1);
	chooser_default({
		Tag: input.which ? counter_default : other_default,
		label: input.label
	});
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 2);
			outer_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "#text/0", input.label, 2, $scope0_reason, 4)}</em>`);
				$cg__input_label && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:6/init");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, { _: $wi__input_label__OR__input_show && _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:17"));
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_label__OR__input_show && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, _write_guard($scope0_reason, 5), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 5);
	_filled_guard($scope0_reason, 3) && $cg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_which", input.which);
	_patch_join_init($scope0_id, "__tests__/template.marko_0_input_which#5_input_label#6/init", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && "input_which", _filled_guard($scope0_reason, 4) && "input_label");
	_scope($scope0_id, {
		input_which: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.which,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.label,
		"#childScope/1": _existing_scope($childScope),
		"ClosureScopes:input_label/9": _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 4) && ($cg__input_which || _client_guard($scope0_reason, 5)) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 4)), $cg__input_which && _content_withhold(input.label));
}, 1);
