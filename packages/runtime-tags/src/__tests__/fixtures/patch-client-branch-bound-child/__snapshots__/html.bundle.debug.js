// tags/btn.marko
const $template$3 = "<i><!><!></i>";
const $walks$3 = " D%b%l";
const $setup$3 = [[], ["__tests__/tags/btn.marko_0"]];
_shells({ "__tests__/tags/btn.marko": "__tests__/tags/btn.marko !__tests__/tags/btn.marko_0; D%b%;<i><!><!></i>" });
var btn_default = _template("__tests__/tags/btn.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<i>${_text_mark($scope0_id, "#text/1", input.label, 1, $scope0_reason, 0)}${_text_mark($scope0_id, "#text/2", n, 2)}</i>${_el_mark($scope0_id, "#i/0")}`);
	_script($scope0_id, "__tests__/tags/btn.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/btn.marko_0_n#6/fill", n, 1);
	_scope($scope0_id, { n }, "__tests__/tags/btn.marko", 0, { n: "1:6" });
});

// tags/defn.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/defn.marko_1*content": "__tests__/tags/defn.marko_1*content !__tests__/tags/defn.marko_1",
	"__tests__/tags/defn.marko": "__tests__/tags/defn.marko;b%;<!><!><!>"
});
var defn_default = _template("__tests__/tags/defn.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wg__input_tag = _write_guard($scope0_reason, 1), $ui__input_tag = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Inner = { content: _content_resume("__tests__/tags/defn.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<b>${_text_mark($scope1_id, "#text/1", input.label, 1, $scope0_reason, 0)}</b>${_el_mark($scope1_id, "#b/0")}`);
		_script($scope1_id, "__tests__/tags/defn.marko_1");
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "__tests__/tags/defn.marko_1_input_label#0:3/subscribe", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/defn.marko", "1:2"), $cg__input_label && "__tests__/tags/defn.marko_1_input_label#0:3/subscribe");
	}, $scope0_id, void 0, 1) };
	_dynamic_tag($scope0_id, "#text/0", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 1);
	$ui__input_tag && _patch_write($scope0_id, "PatchWrite:Inner", Inner, 1);
	_client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/tags/defn.marko_0_input_tag#4_Inner#5/setup");
	_scope($scope0_id, {
		input_label: input.label,
		Inner: $ui__input_tag && Inner,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 0) && $input_label__closures
	}, "__tests__/tags/defn.marko", 0, {
		input_label: ["input.label"],
		Inner: "1:9"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/tags/defn.marko_0_input_label#3/subscribers", "input_label");
});

// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": `__tests__/template.marko_2*content|2${_shell_marker([[], []], ["#childScope/0>", $setup$3], ["#childScope/1>", $setup$2])};${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$3, "b%c")};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$3, $template$2)}`,
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_tag = _client_guard($scope0_reason, 3), $wi__input_show__OR__input_label__OR__input_tag = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_label = _unfilled_if($scope0_reason, 2), $ui__input_tag = _unfilled_if($scope0_reason, 3), $wi__input_show = _write_if($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_tag = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_tag__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope1_id, "#childScope/0", 2);
			card_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason($uf__input_label << 1);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
				btn_default({ label: input.label });
				_patch_child_end();
				_set_scope_reason($uf__input_label << 1 | _updates_from($scope0_reason, 3) << 3);
				const $childScope2 = _peek_scope_id($scope2_id, "#childScope/1", 1);
				defn_default({
					label: input.label,
					tag: input.tag
				});
				_patch_child_end();
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:4/subscribe");
				$cg__input_tag && _patch_render($scope2_id, "__tests__/template.marko_2_input_tag#0:5/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_tag__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
					_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope),
					"#childScope/1": _existing_scope($childScope2)
				}, "__tests__/template.marko", "1:17"), $cg__input_label && "__tests__/template.marko_2_input_label#0:4/subscribe", 0), $cg__input_tag && "__tests__/template.marko_2_input_tag#0:5/subscribe", 0);
				_resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope3)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_label: $wi__input_show && ($ui__input_show || $ui__input_label) && input.label,
		input_tag: $wi__input_show && ($ui__input_show || $ui__input_tag) && input.tag,
		"ClosureScopes:input_label/6": $wi__input_label && $wi__input_label && ($ui__input_label || $ui__input_show) && $input_label__closures,
		"ClosureScopes:input_tag/7": $wi__input_tag && $wi__input_tag && ($ui__input_tag || $ui__input_show) && $input_tag__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_tag: ["input.tag"]
	}) || (_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label"), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 3)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#5/subscribers", "input_tag"));
}, 1);
