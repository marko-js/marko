// tags/plain-let.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/plain-let.marko": "^__tests__/tags/plain-let.marko !," });
_stateful_return("__tests__/tags/plain-let.marko");
var plain_let_default = _template("__tests__/tags/plain-let.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.value;
	const $return = value;
	const $valueChange2 = _patch_bind($scope0_id, "PatchWrite:#TagVariableChange", _resume(function(next) {
		value = next;
	}, "__tests__/tags/plain-let.marko_0/valueChange", $scope0_id) || void 0, 0, 0);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/plain-let.marko_fill0", value, 1);
	_scope($scope0_id, { "#TagVariableChange": $valueChange2 }, "__tests__/tags/plain-let.marko", 0);
	_resume_branch($scope0_id);
	return $return;
});

// tags/row-list.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>+</button>`)("");
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}&b%b b`)("");
const $setup$1 = _shell_setup([[], ["__tests__/tags/row-list.marko_0"]], ["#childScope/0>", $setup$2]);
_shells({
	"__tests__/tags/row-list.marko": /*@__PURE__*/ (() => `__tests__/tags/row-list.marko${_shell_marker($setup$1)};${((_w0) => `0${_w0}&b%b b`)("")};${((_w0) => `<!>${_w0}<!><button>+</button>`)("")}`)(),
	"__tests__/tags/row-list.marko_1*shell": "__tests__/tags/row-list.marko_1*shell !;b%;<!><!><!>",
	"__tests__/tags/row-list.marko_2*shell": "__tests__/tags/row-list.marko_2*shell __tests__/tags/row-list.marko_2_input_settled#0:8/subscribe __tests__/tags/row-list.marko_2_bounty#0:9/init;D ;<span> </span>"
});
var row_list_default = _template("__tests__/tags/row-list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_type = _write_guard($scope0_reason, 1), $wi__input_settled = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_settled__closures = new Set();
	const $bounty__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, 1);
	let bounty = plain_let_default({ value: 1 });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/row-list.marko_0_bounty#9/var");
	_patch_child_end();
	_for_of(input.tally, (t) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/row-list.marko_fill2", t);
		_if(() => {
			if (input.type) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "#text/0", t + bounty + input.settled)}</span>`);
				_patch_effect($scope2_id, "PatchInit:__tests__/tags/row-list.marko_2_input_settled#0:8_bounty#0:9_t#1:2/init", _filled_guard($scope0_reason, 2) && ">>input_settled", _filled_guard($scope0_reason, 0) && ">t");
				_subscribe($bounty__closures, _subscribe($wi__input_settled && $input_settled__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/row-list.marko", "3:4"), _client_guard($scope0_reason, 2) && "__tests__/tags/row-list.marko_2_input_settled#0:8/subscribe"), "__tests__/tags/row-list.marko_2_bounty#0:9/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_type, void 0, void 0, void 0, ["__tests__/tags/row-list.marko_2*shell"], $scope0_reason, 1);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/row-list.marko_1_input_type#0:7/init");
		_scope($scope1_id, {
			t,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/row-list.marko", "2:2", { t: "2:6" });
	}, 0, $scope0_id, "#text/2", 1, void 0, void 0, void 0, void 0, "__tests__/tags/row-list.marko_1*shell", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/tags/row-list.marko_0");
	_scope($scope0_id, {
		input_type: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.type,
		input_settled: input.settled,
		bounty,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:input_settled/11": $wi__input_settled && $input_settled__closures,
		"ClosureScopes:bounty/12": $bounty__closures
	}, "__tests__/tags/row-list.marko", 0, {
		input_type: ["input.type"],
		input_settled: ["input.settled"],
		bounty: "1:12"
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/row-list.marko_fill0", input.type, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/row-list.marko_fill1", input.settled, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<p></p><!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b%c`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b%c`)($walks$1)};${((_w0) => `<!>${_w0}<p></p><!><!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	row_list_default({
		tally: input.tally,
		type: input.type,
		settled: input.settled
	});
	_patch_child_end();
	let more = false;
	_html(`<p></p>${_el_resume($scope0_id, "#p/1")}`);
	_if(() => {
		if (more) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_peek_scope_id($scope1_id, "#childScope/0", 1);
			row_list_default({
				tally: [],
				type: "a",
				settled: 0
			});
			_patch_child_end();
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
