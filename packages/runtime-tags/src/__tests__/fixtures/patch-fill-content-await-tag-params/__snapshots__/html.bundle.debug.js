// tags/frame.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko;D%;<section><!></section>" });
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/frame.marko", 0);
});

// tags/inner.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D%l");
const $setup$1 = _shell_setup([[], ["__tests__/tags/inner.marko_0"]], ["#childScope/0>", $setup$2]);
_shells({
	"__tests__/tags/inner.marko_2*content": "__tests__/tags/inner.marko_2*content;D ;<p> </p>",
	"__tests__/tags/inner.marko_1_#text#0/await": "__tests__/tags/inner.marko_1_#text#0/await;D ;<p> </p>",
	"__tests__/tags/inner.marko_1*content": "__tests__/tags/inner.marko_1*content __tests__/tags/inner.marko_1_input_second#0:4/subscribe __tests__/tags/inner.marko_1_input_first#0:5/subscribe __tests__/tags/inner.marko_1_showSecond#0:6/init __tests__/tags/inner.marko_1_input_second#0:4_input_first#0:5_showSecond#0:6/init;b%;<!><!><!>",
	"__tests__/tags/inner.marko": /*@__PURE__*/ (() => `__tests__/tags/inner.marko${_shell_marker($setup$1)};${((_w0) => `D/${_w0}& l`)("D%l")};${((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template$2)}`)()
});
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_second = _write_if($scope0_reason, 0), $wi__input_first = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_second__closures = new Set();
	const $input_first__closures = new Set();
	const $showSecond__closures = new Set();
	let showSecond = false;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	frame_default({ content: _content("__tests__/tags/inner.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", showSecond ? input.second : input.first, (value) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", value)}</p>`);
			_scope($scope2_id, {}, "__tests__/tags/inner.marko", "4:6");
		}, 1, "__tests__/tags/inner.marko_2*content", 2);
		_subscribe($showSecond__closures, _subscribe($wi__input_first && $input_first__closures, _subscribe($wi__input_second && $input_second__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/inner.marko", "3:4"))));
		_resume_branch($scope1_id);
	}, $scope0_id, 1) });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/tags/inner.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/inner.marko_fill2", showSecond, 1);
	_scope($scope0_id, {
		input_second: input.second,
		input_first: input.first,
		showSecond,
		"ClosureScopes:input_second/7": $wi__input_second && $input_second__closures,
		"ClosureScopes:input_first/8": $wi__input_first && $input_first__closures,
		"ClosureScopes:showSecond/9": $showSecond__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/inner.marko", 0, {
		input_second: ["input.second"],
		input_first: ["input.first"],
		showSecond: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/inner.marko_fill0", input.second, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/inner.marko_fill1", input.first, !_server_guard($scope0_reason, 1)));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	inner_default({
		first: input.first,
		second: input.second
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
