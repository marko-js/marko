// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button> </button>" });
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_0_n#2/fill", n, 1);
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
const $D_content__walks = "D l";
const $D_content__template = "<span> </span>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($D_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($D_content__walks, $walks$1);
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}&`)($D_content__walks, $walks$1)};${((_w0, _w1) => `${_w0}${_w1}`)($D_content__template, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a = _updates_from($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 0), $ui__input_x = _unfilled_if($scope0_reason, 1), $ui__input_a2 = _unfilled_if($scope0_reason, 0), $sg__input_a = _server_guard($scope0_reason, 0), $fg__input_a2 = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $f2__closures = new Set();
	$fg__input_a2 && $ui__input_x && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !$sg__input_a);
	const f = _bind_resume(function() {
		return input.a;
	}, "__tests__/template.marko_0/f", $scope0_id);
	const D = { content: _content("__tests__/template.marko_1*content", ({ on }) => {
		const $scope1_id = _scope_id(), $ui__input_a = _unfilled_if($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 0);
		const $scope1_reason = _scope_reason(), $uf__on = _updates_from($scope1_reason, 0), $fg__on = _filled_guard($scope1_reason, 0);
		_html(`<span>${_text_mark($scope1_id, "#text/0", on && f(), 1, ($uf__input_a | $uf__on) << 1, 0)}</span>`);
		_patch_render($scope1_id, "__tests__/template.marko_1_f#0:6_on#3/setup", (($fg__input_a ? " >f" : "") + ($fg__input_a ? " >input_a" : "") + ($fg__on ? " on" : "")).slice(1), ($uf__input_a | $uf__on) << 1, 0);
		_subscribe(_unfilled_if(($uf__input_a | $uf__on) << 1, 0) && $wi__input_a && $f2__closures, _scope($scope1_id, {
			on: ($ui__input_a || _unfilled_if($scope1_reason, 0)) && on,
			_: ($wi__input_a || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { on: "2:13" }), _client_guard(($uf__input_a | $uf__on) << 1, 0) && "__tests__/template.marko_1_f#0:6/subscribe") || $fg__on && $ui__input_a && _patch_write($scope1_id, "PatchMarkedWrite:on", on, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	D.content({ on: input.x });
	_patch_child_end();
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	counter_default({});
	_patch_child_end();
	_scope($scope0_id, {
		input_a: ($ui__input_x || $ui__input_a2) && input.a,
		f: ($ui__input_x || $ui__input_a2) && f,
		"ClosureScopes:f/7": $wi__input_a && $f2__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		f: "1:8"
	}) || $fg__input_a2 && $ui__input_x && _patch_write($scope0_id, "PatchMarkedWrite:f", f, !$sg__input_a);
}, 1);
