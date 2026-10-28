// tags/shape.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button> </button>`)($D_content__template, $D_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& D l`)($D_content__walks, $D_content__walks);
const $setup$1 = [["#childScope/0>", "#childScope/1>"], ["__tests__/tags/shape.marko_0"]];
_shells({
	"__tests__/tags/shape.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/shape.marko_1*content;${_w0};${_w1}`)($D_content__walks, $D_content__template),
	"~__tests__/tags/shape.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `~__tests__/tags/shape.marko_1*content;${_w0};${_w1}`)($D_content__walks, $D_content__template),
	"__tests__/tags/shape.marko": /*@__PURE__*/ (() => `__tests__/tags/shape.marko #childScope/0> #childScope/1>!__tests__/tags/shape.marko_0;${((_w0, _w1) => `b/${_w0}&/${_w1}& D l`)($D_content__walks, $D_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button> </button>`)($D_content__template, $D_content__template)}`)(),
	"__tests__/tags/shape.marko_2*shell": "__tests__/tags/shape.marko_2*shell;D ;<span> </span>"
});
var shape_default = _template("__tests__/tags/shape.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 1), $wi__input_a = _write_if($scope0_reason, 1), $sg__input_a = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $f2__closures = new Set();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !$sg__input_a);
	let n = 0;
	const f = _bind_resume(function() {
		return input.a;
	}, "__tests__/tags/shape.marko_0/f", $scope0_id);
	const D = { content: _content("__tests__/tags/shape.marko_1*content", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__on = _write_guard($scope1_reason, 0), $wi__on = _write_if($scope1_reason, 0);
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "#text/0", f(), 1, $scope0_reason, 1)}</span>`);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_a ? "__tests__/tags/shape.marko_2_f#0:10/init" : "__tests__/tags/shape.marko_2_f#0:10/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 1) && $f2__closures, _scope($scope2_id, { _: ($wi__input_a || $wi__on) && _scope_with_id($scope1_id) }, "__tests__/tags/shape.marko", "2:52"), $cg__input_a && "__tests__/tags/shape.marko_2_f#0:10/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__on, 1, 0, 0, ["__tests__/tags/shape.marko_2*shell"], $scope1_reason, 0);
		($wi__input_a || $wi__on) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/shape.marko", "2:34");
	}, $scope0_id, 1) };
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	D.content({ on: input.x });
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	D.content({ on: input.y });
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "#text/3", n)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/shape.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/shape.marko_fill0", n, 1);
	_scope($scope0_id, {
		input_a: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a,
		n,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && f,
		"ClosureScopes:f/11": $wi__input_a && $f2__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/tags/shape.marko", 0, {
		input_a: ["input.a"],
		n: "1:6",
		f: "2:8"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/shape.marko_fill1", f, !$sg__input_a);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5 | _mask_group($scope0_reason, 3) << 7);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	shape_default({
		a: input.a,
		x: input.x,
		y: input.y
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
