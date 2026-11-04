// tags/child.marko
const $Label_content__walks = "D l";
const $Label_content__template = "<p> </p>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>+</button>${_w0}`)($Label_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($Label_content__walks);
const $setup$1 = [["#childScope/1>"], ["__tests__/tags/child.marko_0"]];
_shells({
	"__tests__/tags/child.marko_1*content": `__tests__/tags/child.marko_1*content;${$Label_content__walks};${$Label_content__template}`,
	"__tests__/tags/child.marko": `__tests__/tags/child.marko #childScope/1>!__tests__/tags/child.marko_0;${((_w0) => ` b/${_w0}&`)($Label_content__walks)};${((_w0) => `<button>+</button>${_w0}`)($Label_content__template)}`
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_suffix = _updates_from($scope0_reason, 0), $wi__input_suffix = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = new Set();
	let count = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/0")}`);
	const Label = { content: _content("__tests__/tags/child.marko_1*content", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_mark($scope1_id, "#text/0", n + input.suffix, 1, (1 | $uf__input_suffix) << 1, 0)}</p>`);
		_unfilled_if((1 | $uf__input_suffix) << 1, 0) && _patch_subscribe($scope1_id, "__tests__/tags/child.marko_1_input_suffix#0:4/subscribe");
		_patch_render($scope1_id, "__tests__/tags/child.marko_1_input_suffix#0:4_n#3/setup", _filled_guard($scope0_reason, 0) && ">input_suffix", (1 | $uf__input_suffix) << 1, 0);
		_subscribe(_unfilled_if((1 | $uf__input_suffix) << 1, 0) && $wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			n: $wi__input_suffix && n,
			_: ($wi__input_suffix || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}, "__tests__/tags/child.marko", "3:2", { n: "3:17" }), _client_guard((1 | $uf__input_suffix) << 1, 0) && "__tests__/tags/child.marko_1_input_suffix#0:4/subscribe");
	}, $scope0_id, 0) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	Label.content({ n: count });
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_0_count#5/fill", count, 1);
	_scope($scope0_id, {
		input_suffix: input.suffix,
		count,
		"ClosureScopes:input_suffix/6": $wi__input_suffix && $input_suffix__closures,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/tags/child.marko", 0, {
		input_suffix: ["input.suffix"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_suffix", input.suffix, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<span> </span>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)($walks$1)};${((_w0) => `${_w0}<span> </span>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	child_default({ suffix: "a" });
	_patch_child_end();
	_html(`<span>${_text_mark($scope0_id, "#text/1", input.x, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
