// tags/frag-host.marko
const $template$1 = "<section></section><div id=partial></div>";
const $walks$1 = " b b";
const $setup$1 = [[], ["__tests__/tags/frag-host.marko_0_divAttrs#10", "__tests__/tags/frag-host.marko_0_sectionAttrs#9"]];
_shells({
	"__tests__/tags/frag-host.marko_2*content": "__tests__/tags/frag-host.marko_2*content",
	"__tests__/tags/frag-host.marko_1*content": "__tests__/tags/frag-host.marko_1*content",
	"__tests__/tags/frag-host.marko": "__tests__/tags/frag-host.marko !__tests__/tags/frag-host.marko_0_divAttrs#10 __tests__/tags/frag-host.marko_0_sectionAttrs#9; b ;<section></section><div id=partial></div>"
});
var frag_host_default = _template("__tests__/tags/frag-host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 0), $ui__input_mode = _unfilled_if($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	const one = { content: _content_resume("__tests__/tags/frag-host.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html("<em>one</em>");
	}, $scope0_id) };
	const two = { content: _content_resume("__tests__/tags/frag-host.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<strong>${_text_mark($scope1_id, "#text/0", input.b, 1, $scope0_reason, 0)}</strong>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "__tests__/tags/frag-host.marko_1_input_b#0:4/subscribe", $cg__input_b);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/frag-host.marko", "2:2"), $cg__input_b && "__tests__/tags/frag-host.marko_1_input_b#0:4/subscribe");
	}, $scope0_id) };
	const sectionAttrs = { content: input.mode ? one : two };
	_html("<section");
	_attrs_content(sectionAttrs, "#section/0", $scope0_id, "section", 0, 1, 0, $scope0_reason, 1);
	const divAttrs = { content: input.mode ? two : one };
	_html(`</section>${_el_mark($scope0_id, "#section/0")}<div id=partial`);
	_attrs_partial_content(divAttrs, { id: 1 }, "#div/1", $scope0_id, "div", 1, 1, 0, $scope0_reason, 1);
	_html(`</div>${_el_mark($scope0_id, "#div/1")}`);
	_script($scope0_id, "__tests__/tags/frag-host.marko_0_divAttrs#10");
	_script($scope0_id, "__tests__/tags/frag-host.marko_0_sectionAttrs#9");
	$ui__input_mode && _patch_write($scope0_id, "PatchWrite:one", one, 1);
	$ui__input_mode && _patch_write($scope0_id, "PatchWrite:two", two, 1);
	$fg__input_b && _patch_subscribers($scope0_id, "__tests__/tags/frag-host.marko_0_input_b#4/subscribers", "input_b");
	_client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/tags/frag-host.marko_0_input_mode#5_one#6_two#7/setup");
	_scope($scope0_id, {
		input_b: input.b,
		one: $ui__input_mode && one,
		two: $ui__input_mode && two,
		"ClosureScopes:input_b/11": _write_if($scope0_reason, 0) && $input_b__closures
	}, "__tests__/tags/frag-host.marko", 0, {
		input_b: ["input.b"],
		one: "1:9",
		two: "2:9",
		"EventAttributes:#section/0": ["...sectionAttrs", "4:13"],
		"EventAttributes:#div/1": ["...divAttrs", "6:9"]
	}) || $fg__input_b && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks$1)};${((_w0) => `<button>toggle</button>${_w0}`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let mode = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(8 | _updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	frag_host_default({
		mode,
		b: input.b
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		mode,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { mode: "1:6" });
}, 1);
