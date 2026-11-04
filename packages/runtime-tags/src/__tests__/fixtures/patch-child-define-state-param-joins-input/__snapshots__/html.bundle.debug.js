// tags/child.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<i> </i>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>+</button>${_w0}`)($Inner_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($Inner_content__walks);
const $setup$1 = [["#childScope/1>"], ["__tests__/tags/child.marko_0"]];
_shells({
	"__tests__/tags/child.marko_1*content": `__tests__/tags/child.marko_1*content;${$Inner_content__walks};${$Inner_content__template}`,
	"__tests__/tags/child.marko": `__tests__/tags/child.marko #childScope/1>!__tests__/tags/child.marko_0;${((_w0) => ` b/${_w0}&`)($Inner_content__walks)};${((_w0) => `<button>+</button>${_w0}`)($Inner_content__template)}`
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_x = _updates_from($scope0_reason, 0), $wi__input_x = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	let n = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/0")}`);
	const Inner = { content: _content("__tests__/tags/child.marko_1*content", ({ k }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<i>${_text_mark($scope1_id, "#text/0", input.x + k, 1, (1 | $uf__input_x) << 1, 0)}</i>`);
		_unfilled_if((1 | $uf__input_x) << 1, 0) && _patch_subscribe($scope1_id, "__tests__/tags/child.marko_1_input_x#0:4/subscribe");
		_patch_render($scope1_id, "__tests__/tags/child.marko_1_input_x#0:4_k#3/setup", _filled_guard($scope0_reason, 0) && ">input_x", (1 | $uf__input_x) << 1, 0);
		_subscribe(_unfilled_if((1 | $uf__input_x) << 1, 0) && $wi__input_x && $input_x__closures, _scope($scope1_id, {
			k: $wi__input_x && k,
			_: ($wi__input_x || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "3:2", { k: "3:17" }), _client_guard((1 | $uf__input_x) << 1, 0) && "__tests__/tags/child.marko_1_input_x#0:4/subscribe");
	}, $scope0_id, 0) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	Inner.content({ k: n });
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_0_n#5/fill", n, 1);
	_scope($scope0_id, {
		input_x: input.x,
		n,
		"ClosureScopes:input_x/6": $wi__input_x && $input_x__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/tags/child.marko", 0, {
		input_x: ["input.x"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${$template$1}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({ x: input.x });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
