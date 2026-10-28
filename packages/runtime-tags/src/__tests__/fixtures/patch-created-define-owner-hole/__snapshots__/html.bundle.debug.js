// tags/card.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<p> </p>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>x</button>`)($Panel_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Panel_content__walks);
const $setup$1 = [["#childScope/0>__tests__/tags/card.marko_1_k#0:5/init"], ["__tests__/tags/card.marko_0"]];
_shells({
	"__tests__/tags/card.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/card.marko_1*content __tests__/tags/card.marko_1_k#0:5/init;${_w0};${_w1}`)($Panel_content__walks, $Panel_content__template),
	"__tests__/tags/card.marko": /*@__PURE__*/ (() => `__tests__/tags/card.marko #childScope/0>__tests__/tags/card.marko_1_k#0:5/init!__tests__/tags/card.marko_0;${((_w0) => `b/${_w0}& b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<button>x</button>`)($Panel_content__template)}`)()
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $k__closures = new Set();
	let k = input.n;
	const Panel = { content: _content("__tests__/tags/card.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", k)}</p>`);
		_subscribe($k__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "2:2"), "__tests__/tags/card.marko_1_k#0:5/subscribe");
	}, $scope0_id, 1) };
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Panel.content({});
	_patch_child_end();
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", k, 1);
	_scope($scope0_id, {
		k,
		"ClosureScopes:k/6": $k__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/card.marko", 0, { k: "1:6" });
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
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ n: input.n });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_n#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_on, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_n: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.n }, "__tests__/template.marko", 0, { input_n: ["input.n"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.n, !_server_guard($scope0_reason, 1));
}, 1);
