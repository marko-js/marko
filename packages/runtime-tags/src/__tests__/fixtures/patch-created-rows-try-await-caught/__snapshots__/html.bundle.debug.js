// tags/outer.marko
const $template$1 = "<button>x</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/outer.marko_0"]];
_shells({ "__tests__/tags/outer.marko": "__tests__/tags/outer.marko !__tests__/tags/outer.marko_0; b%;<button>x</button><!><!>" });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	let rows = [1];
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(rows, (entry) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.promise, () => {
				const $scope4_id = _scope_id();
				_html("done");
			}, 0, 0);
			_subscribe($wi__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/outer.marko", "3:22"), "__tests__/tags/outer.marko_2_input_promise#0:4/subscribe", 0);
			_resume_branch($scope2_id);
		}, void 0, () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html("error");
		}, 0, "__tests__/tags/outer.marko_3*content", "__tests__/tags/outer.marko_2*content");
		_scope($scope1_id, {}, "__tests__/tags/outer.marko", "3:2");
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill1", rows, 1);
	_scope($scope0_id, {
		input_promise: input.promise,
		"ClosureScopes:input_promise/6": $wi__input_promise && $input_promise__closures
	}, "__tests__/tags/outer.marko", 0, { input_promise: ["input.promise"] }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", input.promise, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<h1>Rows whose await rejects</h1><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<h1>Rows whose await rejects</h1><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<h1>Rows whose await rejects</h1>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({ promise: input.promise });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_promise#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_promise: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.promise }, "__tests__/template.marko", 0, { input_promise: ["input.promise"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.promise, !_server_guard($scope0_reason, 1));
}, 1);
