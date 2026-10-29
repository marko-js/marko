// tags/card.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D%;<section><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
const $template$1 = "<button>x</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/outer.marko_0"]];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko !__tests__/tags/outer.marko_0; b%;<button>x</button><!><!>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	let rows = [input.content];
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		const $for_content__entry__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.promise, () => {
				const $scope4_id = _scope_id();
				_set_scope_reason(2);
				const $childScope2 = _peek_scope_id($scope4_id, "#childScope/0", 1);
				card_default({ content: entry });
				_patch_child_end();
				_subscribe($for_content__entry__closures, _scope($scope4_id, {
					"#childScope/0": _existing_scope($childScope2),
					"ClosureSignalIndex:entry/8": 1
				}, "__tests__/tags/outer.marko", "3:27"), "__tests__/tags/outer.marko_4_entry#1:2/subscribe");
			}, void 0, 0, 0, 0, 1);
			_subscribe($wi__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/outer.marko", "3:22"), "__tests__/tags/outer.marko_2_input_promise#0:5/subscribe", 0);
			_resume_branch($scope2_id);
		}, void 0, () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 0);
			card_default({ content: entry });
			_patch_child_end();
			_subscribe($for_content__entry__closures, _scope($scope3_id, {
				_: _scope_with_id($scope1_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/outer.marko", "3:77"), "__tests__/tags/outer.marko_3_entry#1:2/subscribe");
		}, 0, "__tests__/tags/outer.marko_3*content", "__tests__/tags/outer.marko_2*content");
		_scope($scope1_id, {
			entry,
			"ClosureScopes:entry/8": $for_content__entry__closures
		}, "__tests__/tags/outer.marko", "3:2", { entry: "3:6" });
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill1", rows, 1);
	_scope($scope0_id, {
		input_promise: input.promise,
		"ClosureScopes:input_promise/7": $wi__input_promise && $input_promise__closures
	}, "__tests__/tags/outer.marko", 0, { input_promise: ["input.promise"] }) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.promise, !_server_guard($scope0_reason, 1)), _content_withhold(input.content));
});

// template.marko
const $template = "<h1>Rows whose await rejects</h1><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<h1>Rows whose await rejects</h1><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_html("<h1>Rows whose await rejects</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({
				promise: input.promise,
				content: _content_resume("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					const uid = _id("uid");
					_html(`<input${_attr("id", uid, $scope2_id, "PatchAttr:#input/0 id", 0, 0)}>${_el_resume($scope2_id, "#input/0", 0)}<label${_attr("for", uid, $scope2_id, "PatchAttr:#label/1 for", 0, 0)}>${_text_resume($scope2_id, "#text/2", input.label, 1, $scope0_reason, 2)}</label>${_el_resume($scope2_id, "#label/1", 0)}`);
					_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_2_input_label#0:5/init" : "__tests__/template.marko_2_input_label#0:5/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:17"));
				}, $scope1_id)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_promise#0:4/init");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_promise: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.promise,
		input_label: input.label,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_promise: ["input.promise"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.promise, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
