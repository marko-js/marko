// tags/wrap.marko
const $template$1 = "<button>toggle</button><div><!></div><!><!>";
const $walks$1 = " bD%l%c";
const $setup$1 = [[], ["__tests__/tags/wrap.marko_0"]];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !__tests__/tags/wrap.marko_0; bD%l%;<button>toggle</button><div><!></div><!><!>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 8, 0, 0, $wg__input_content);
			_html("</section>");
			_scope($scope1_id, {}, "__tests__/tags/wrap.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/tags/wrap.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/wrap.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function check(fail, x) {
	if (fail) throw new Error("boom " + x);
	return x;
}
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_fail__closures = new Set();
	const $input_x__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrap_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", check(input.fail, input.x), 1, $scope0_reason, 0)}</p>`);
			(_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/template.marko_2_input_fail#0:3/subscribe");
			(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/template.marko_2_input_x#0:4/subscribe");
			_patch_join_init($scope2_id, "__tests__/template.marko_2_input_fail#0:3_input_x#0:4/init", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">>input_fail", _filled_guard($scope0_reason, 2) && ">>input_x");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_x__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_2_input_fail#0:3/subscribe"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_2_input_x#0:4/subscribe");
		}, void 0, (err) => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<b>${_text_resume($scope3_id, "#text/0", err.message, 1, 4, 0)}</b>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "8:6");
		}, 0, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content", 0, 1, 1);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, $scope0_id) });
	_patch_child_end();
	_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.fail);
	_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/unpatched", input.x);
	_scope($scope0_id, {
		input_fail: input.fail,
		input_x: input.x,
		"ClosureScopes:input_fail/5": _write_if($scope0_reason, 1) && $input_fail__closures,
		"ClosureScopes:input_x/6": _write_if($scope0_reason, 2) && $input_x__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_fail: ["input.fail"],
		input_x: ["input.x"]
	});
}, 1);
