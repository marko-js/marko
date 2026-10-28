// tags/card.marko
const $template$1 = "<!><button>x</button>";
const $walks$1 = "/&b b";
const $setup$1 = [["#childScope/0>__tests__/tags/card.marko_1_k#0:6/init", "#childScope/0>__tests__/tags/card.marko_1_input_w#0:5_k#0:6/init"], ["__tests__/tags/card.marko_0"]];
_shells({
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content __tests__/tags/card.marko_1_k#0:6/init __tests__/tags/card.marko_1_input_w#0:5_k#0:6/init,",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko #childScope/0>__tests__/tags/card.marko_1_k#0:6/init #childScope/0>__tests__/tags/card.marko_1_input_w#0:5_k#0:6/init!__tests__/tags/card.marko_0;/&b ;<!><button>x</button>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_w = _server_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	const $k__closures = new Set();
	let k = input.n;
	const Panel = { content: _content_elide("__tests__/tags/card.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_script($scope1_id, "__tests__/tags/card.marko_1_input_w#0:5_k#0:6", 0, $sg__input_w && 2, ">input_w");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/card.marko_1_input_w#0:5/subscribe");
		_subscribe($k__closures, _subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "2:2"), _client_guard($scope0_reason, 1) && "__tests__/tags/card.marko_1_input_w#0:5/subscribe", 0), "__tests__/tags/card.marko_1_k#0:6/subscribe", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Panel.content({});
	_patch_child_end();
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", k, 1);
	_scope($scope0_id, {
		input_w: input.w,
		k,
		"ClosureScopes:input_w/7": $wi__input_w && $input_w__closures,
		"ClosureScopes:k/8": $k__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/card.marko", 0, {
		input_w: ["input.w"],
		k: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_w", input.w, !$sg__input_w);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({
				n: input.n,
				w: input.w
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_n#0:4/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_w#0:5/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_on, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_n: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.n,
		input_w: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.w
	}, "__tests__/template.marko", 0, {
		input_n: ["input.n"],
		input_w: ["input.w"]
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.n, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_on && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.w, !_server_guard($scope0_reason, 3)));
}, 1);
