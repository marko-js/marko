// lazy.marko
const $template$1 = "<button class=child><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["__tests__/lazy.marko_0"]];
_shells({ "__tests__/lazy.marko": "__tests__/lazy.marko !__tests__/lazy.marko_0; D%c%;<button class=child><!>:<!></button>" });
var lazy_default = _template("__tests__/lazy.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=child>${_text_resume($scope0_id, "#text/1", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/lazy.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/lazy.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/lazy.marko", 0, { count: "1:6" });
});

// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $Lazy_withLoadAssets = withLoadAssets(() => lazy_default, "__tests__/lazy.marko", flush, "ready:__tests__/lazy.marko");
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ (() => `__tests__/template.marko_2*content${_shell_marker(_shell_setup([["__tests__/template.marko_2_input_label#0:5/subscribe", "__tests__/template.marko_2_input_label#0:5_x#3/init"], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)(),
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=open>inc</button><!><!>",
	"__tests__/template.marko_1_#text#0/await": /*@__PURE__*/ (() => `__tests__/template.marko_1_#text#0/await${_shell_marker(_shell_setup([["__tests__/template.marko_2_input_label#0:5/subscribe", "__tests__/template.marko_2_input_label#0:5_x#3/init"], []], ["#childScope/1>", $setup$1]))};${((_w0) => `b%b/${_w0}&b`)($walks$1)};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)(),
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_n#0:6/init;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", Promise.resolve(n), (x) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(6);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/1", 0);
				$Lazy_withLoadAssets({ label: input.label + x });
				_patch_child_end();
				_script($scope2_id, "__tests__/template.marko_2_x#3");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					x,
					"#childScope/1": _existing_scope($childScope)
				}, "__tests__/template.marko", "5:4", { x: "5:10" }), "__tests__/template.marko_2_input_label#0:5/subscribe");
			}, 1, "__tests__/template.marko_2*content", 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		n,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "2:6"
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
