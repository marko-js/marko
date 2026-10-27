// lazy-child.marko
const $template$2 = "<button><!>:<!></button>";
const $walks$2 = " D%c%l";
const $setup$2 = [[], ["__tests__/lazy-child.marko_0"]];
_shells({ "__tests__/lazy-child.marko": "__tests__/lazy-child.marko !__tests__/lazy-child.marko_0; D%c%;<button><!>:<!></button>" });
var lazy_child_default = _template("__tests__/lazy-child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/lazy-child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/lazy-child.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/lazy-child.marko", 0, { count: "1:6" });
});

// child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["__tests__/child.marko_0"]];
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D%c%;<button><!>:<!></button>" });
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/child.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
});

// template.marko
const $LazyBody_content__walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2);
const $LazyBody_content__template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2);
const $ChildBody_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $ChildBody_content__template = $template$1;
const $OwnBody_content__walks = " Db%l";
const $OwnBody_content__template = "<button>own:<!></button>";
const $Inner_content__walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2);
const $Inner_content__template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2);
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(error) {
	throw error;
}
const $LazyChild_withLoadAssets = withLoadAssets(() => lazy_child_default, "__tests__/lazy-child.marko", flush, "ready:__tests__/lazy-child.marko");
const $setup = [[], []];
_shells({
	"__tests__/template.marko_5*content": /*@__PURE__*/ (() => `__tests__/template.marko_5*content${_shell_marker(_shell_setup([[], []], [">#childScope/1>", [[""], []]], [">#childScope/1>", _shell_setup([["__tests__/template.marko_1_input_label#0:3/subscribe"], []], ["#childScope/1>", $setup$2])], [">#childScope/2>", [[""], []]], [">#childScope/2>", _shell_setup([["__tests__/template.marko_2_input_label#0:3/subscribe"], []], ["#childScope/0>", $setup$1])], [">#childScope/3>", [[], ["__tests__/template.marko_6"]]], [">#childScope/4>", [[""], []]], [">#childScope/4>", _shell_setup([[], []], [">#childScope/0>", [[""], []]], [">#childScope/0>", _shell_setup([["__tests__/template.marko_3_input_label#0:3/subscribe"], []], ["#childScope/1>", $setup$2])])]))};${/*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `D l/${_w0}&/${_w1}&/${_w2}&/${_w3}&b`)($LazyBody_content__walks, $ChildBody_content__walks, $OwnBody_content__walks, $Outer_content__walks)};${/*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `<b> </b>${_w0}${_w1}${_w2}${_w3}<!>`)($LazyBody_content__template, $ChildBody_content__template, $OwnBody_content__template, $Outer_content__template)}`)(),
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_error__closures = new Set();
	const LazyBody = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "#childScope/1", 0);
		$LazyChild_withLoadAssets({ label: input.label });
		_patch_child_end();
		$cg__input_label && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:3/init");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:2"), "__tests__/template.marko_1_input_label#0:3/subscribe");
	}, $scope0_id) };
	const ChildBody = { content: _content("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope2 = _patch_child($scope2_id, "#childScope/0", 1);
		child_default({ label: input.label });
		_patch_child_end();
		$cg__input_label && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:3/init");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope2),
			"ClosureSignalIndex:input_label/5": $wi__input_label && 1
		}, "__tests__/template.marko", "9:2"), "__tests__/template.marko_2_input_label#0:3/subscribe");
	}, $scope0_id) };
	const OwnBody = { content: _content("__tests__/template.marko_6*content", () => {
		const $scope6_id = _scope_id();
		const $scope6_reason = _scope_reason();
		let count = 0;
		_html(`<button>own:${_text_resume($scope6_id, "#text/1", count, 2)}</button>${_el_resume($scope6_id, "#button/0")}`);
		_script($scope6_id, "__tests__/template.marko_6");
		_patch_fill($scope6_id, "PatchFill:__tests__/template.marko_fill1", count, 1);
		_scope($scope6_id, { count }, "__tests__/template.marko", "12:2", { count: "13:8" });
	}, $scope0_id) };
	const Inner = { content: _content("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope3 = _patch_child($scope3_id, "#childScope/1", 2);
		$LazyChild_withLoadAssets({ label: input.label });
		_patch_child_end();
		$cg__input_label && _patch_init($scope3_id, "__tests__/template.marko_3_input_label#0:3/init");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope3),
			"ClosureSignalIndex:input_label/5": $wi__input_label && 2
		}, "__tests__/template.marko", "16:2"), "__tests__/template.marko_3_input_label#0:3/subscribe");
	}, $scope0_id) };
	const Outer = { content: _content("__tests__/template.marko_7*content", () => {
		const $scope7_id = _scope_id();
		const $scope7_reason = _scope_reason();
		const $childScope4 = _patch_child($scope7_id, "#childScope/0", 3, void 0, $scope0_id);
		Inner.content({});
		_patch_child_end();
		_scope($scope7_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope4)
		}, "__tests__/template.marko", "19:2");
	}, $scope0_id) };
	_try($scope0_id, "#text/0", () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_html(`<p>${_patch_text($scope4_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope4_id, $cg__input_error ? "__tests__/template.marko_4_input_error#0:4/init" : "__tests__/template.marko_4_input_error#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope4_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "22:2"), $cg__input_error && "__tests__/template.marko_4_input_error#0:4/subscribe");
	}, void 0, (err) => {
		const $scope5_reason = _scope_reason();
		const $scope5_id = _scope_id();
		_html(`<b>${_patch_text($scope5_id, "#text/0", err.message)}</b>`);
		const $childScope5 = _patch_child($scope5_id, "#childScope/1", 4, void 0, $scope0_id);
		LazyBody.content({});
		_patch_child_end();
		const $childScope6 = _patch_child($scope5_id, "#childScope/2", 5, void 0, $scope0_id);
		ChildBody.content({});
		_patch_child_end();
		const $childScope7 = _patch_child($scope5_id, "#childScope/3", 6);
		OwnBody.content({});
		_patch_child_end();
		const $childScope8 = _patch_child($scope5_id, "#childScope/4", 7, void 0, $scope0_id);
		Outer.content({});
		_patch_child_end();
		_scope($scope5_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope5),
			"#childScope/2": _existing_scope($childScope6),
			"#childScope/3": _existing_scope($childScope7),
			"#childScope/4": _existing_scope($childScope8)
		}, "__tests__/template.marko", "24:4");
	}, void 0, "__tests__/template.marko_5*content", "__tests__/template.marko_4*content", 1, 1, 1);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_error/6": $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
