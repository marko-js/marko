// tags/counter/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/counter/index.marko": "__tests__/tags/counter/index.marko !;b%;<!><!><!>",
	"__tests__/tags/counter/index.marko_1*shell": "__tests__/tags/counter/index.marko_1*shell !__tests__/tags/counter/index.marko_1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var counter_default = _template("__tests__/tags/counter/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/tags/counter/index.marko_1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/counter/index.marko_1_input_onCount#0:4/init");
			const $countChange = input.onCount || void 0;
			_patch_let_change($scope1_id, "PatchFill:__tests__/tags/counter/index.marko_fill1", count, "PatchWrite:TagVariableChange:count", $countChange, $scope0_reason, 1, 1);
			_scope($scope1_id, {
				count,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"TagVariableChange:count": $countChange
			}, "__tests__/tags/counter/index.marko", "1:2", {
				count: "2:8",
				"TagVariableChange:count": ["countChange", "2:8"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/counter/index.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_onCount: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.onCount }, "__tests__/tags/counter/index.marko", 0, { input_onCount: ["input.onCount"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/counter/index.marko_fill0", input.onCount, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1><p>Last <!></p>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E lDb%l/${_w0}&l`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/2>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `E lDb%l/${_w0}&l`)("b%c")};${((_w0) => `<main><h1> </h1><p>Last <!></p>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1><p>Last ${_text_resume($scope0_id, "#text/1", last, 2)}</p>`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/2", 0);
	counter_default({
		show: input.show,
		onCount: _resume(function(next) {
			last = next;
		}, "__tests__/template.marko_0/onCount", $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/2": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
