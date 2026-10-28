// tags/card.marko
const $template$2 = "<section><button>x</button><!></section>";
const $walks$2 = "D b%l";
const $setup$2 = [["__tests__/tags/card.marko_0_input_content#4_open#5/init"], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko __tests__/tags/card.marko_0_input_content#4_open#5/init!__tests__/tags/card.marko_0;D b%;<section><button>x</button><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	let c = open ? input.content : undefined;
	_html(`<section><button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_write($scope0_id, "PatchWrite:input_content", input.content, 1);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_content_withhold(input.content), _content_withhold(open));
});

// tags/relay.marko
const $template$1 = "<section><button>y</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [["__tests__/tags/relay.marko_0_input_content#4_open#5/init"], ["__tests__/tags/relay.marko_0"]];
_shells({ "__tests__/tags/relay.marko": "__tests__/tags/relay.marko __tests__/tags/relay.marko_0_input_content#4_open#5/init!__tests__/tags/relay.marko_0;D b%;<section><button>y</button><!></section>" });
var relay_default = _template("__tests__/tags/relay.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	let picked = open ? input.content : undefined;
	let c = picked;
	_html(`<section><button>y</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_html("</section>");
	_script($scope0_id, "__tests__/tags/relay.marko_0");
	_patch_write($scope0_id, "PatchWrite:input_content", input.content, 1);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/relay.marko_fill0", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/relay.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_content_withhold(input.content), _content_withhold(open), _content_withhold(picked));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$2, $walks$1)};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$2, $template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label * 2)}</em>`);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_label);
				$wg__input_label || _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			relay_default({ content: _content_resume("__tests__/template.marko_3*content", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`<em>relayed ${_text_resume($scope3_id, "#text/0", input.label, $wg__input_label * 2)}</em>`);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_label/5": $wi__input_label && 1
				}, "__tests__/template.marko", "3:4"), "__tests__/template.marko_3_input_label#0:4/subscribe", $wg__input_label);
				$wg__input_label || _resume_branch($scope3_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
