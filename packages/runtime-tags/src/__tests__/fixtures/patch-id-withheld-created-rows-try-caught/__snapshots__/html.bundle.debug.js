// tags/card.marko
const $template$3 = "<section><!></section>";
const $walks$3 = "D%l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D%;<section><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/thrower.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/thrower.marko": "__tests__/tags/thrower.marko;b%;<!><!><!>" });
var thrower_default = _template("__tests__/tags/thrower.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", (() => {
		throw new Error("probe");
	})(), {}, 2, 0, 0, 0, 0, 0);
});

// tags/outer.marko
const $template$1 = "<button>x</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/outer.marko_0"]];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko !__tests__/tags/outer.marko_0; b%;<button>x</button><!><!>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let rows = [input.content];
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		const $for_content__entry__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
			card_default({ content: entry });
			_patch_child_end();
			_patch_child(1, "#childScope/1");
			thrower_default({});
			_patch_child_end();
			_subscribe($for_content__entry__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/outer.marko", "3:22"), "__tests__/tags/outer.marko_2_entry#1:2/subscribe");
		}, void 0, () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html("error");
		}, 0, "__tests__/tags/outer.marko_3*content", "__tests__/tags/outer.marko_2*content");
		_scope($scope1_id, { "ClosureScopes:entry/3": $for_content__entry__closures }, "__tests__/tags/outer.marko", "3:2");
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", rows, 1);
	_scope($scope0_id, {}, "__tests__/tags/outer.marko", 0) || _content_withhold(input.content);
});

// template.marko
const $template = "<h1>Rows whose try catches</h1><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content; b D ;<input><label> </label>",
	"~__tests__/template.marko_2*content": "~__tests__/template.marko_2*content; b D ;<input><label> </label>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<h1>Rows whose try catches</h1><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_html("<h1>Rows whose try catches</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				const uid = _id("uid");
				_html(`<input${_attr("id", uid, $scope2_id, "PatchAttr:#input/0 id", 0, 0)}>${_el_resume($scope2_id, "#input/0", 0)}<label${_attr("for", uid, $scope2_id, "PatchAttr:#label/1 for", 0, 0)}>${_text_resume($scope2_id, "#text/2", input.label, 1, $scope0_reason, 2)}</label>${_el_resume($scope2_id, "#label/1", 0)}`);
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:4/init");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_label && _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:17"));
			}, $scope1_id, 3) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);
