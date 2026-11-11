// tags/pass-on.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/pass-on.marko": "__tests__/tags/pass-on.marko;b%;<!><!><!>" });
var pass_on_default = _template("__tests__/tags/pass-on.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_x = _write_guard($scope0_reason, 0), $ui__input_content__OR__input_x = _unfilled_if($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 1), $fg__input_x = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, [input.x], 1, 0, 1, $wg__input_content__OR__input_x, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "__tests__/tags/pass-on.marko_0_input_content#3_input_x#4/setup", (($fg__input_content ? " input_content" : "") + ($fg__input_x ? " input_x" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_content: $ui__input_content__OR__input_x && input.content,
		input_x: $ui__input_content__OR__input_x && input.x
	}, "__tests__/tags/pass-on.marko", 0, {
		input_content: ["input.content"],
		input_x: ["input.x"]
	}) || ($fg__input_content && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 1)), $fg__input_x && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_x", input.x, !_server_guard($scope0_reason, 2)));
});

// tags/owner.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], ["__tests__/tags/owner.marko_0"]], ["#childScope/0>", $setup$2]);
_shells({
	"__tests__/tags/owner.marko_1*content": "__tests__/tags/owner.marko_1*content",
	"__tests__/tags/owner.marko": `__tests__/tags/owner.marko${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$2)}`
});
var owner_default = _template("__tests__/tags/owner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_a = _updates_from($scope0_reason, 2), $uf__input_x = _updates_from($scope0_reason, 1), $ui__input_x = _unfilled_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	_set_scope_reason($uf__input_x << 1 | $uf__input_x << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	pass_on_default({
		x: input.x,
		content: _content_resume("__tests__/tags/owner.marko_1*content", (x) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id(), $ui__input_a = _unfilled_if($scope0_reason, 2);
			$ui__input_a && _patch_write($scope1_id, "PatchMarkedWrite:x", x);
			_html(`<p>${_text_mark($scope1_id, "#text/0", input.a + x, 1, (2 | $uf__input_a) << 1, 0)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/tags/owner.marko_1_input_a#0:4/subscribe");
			_patch_render($scope1_id, "__tests__/tags/owner.marko_1_input_a#0:4_x#2/setup", "x" + (_filled_guard($scope0_reason, 2) ? " >input_a" : ""), (2 | $uf__input_a) << 1, 0);
			_subscribe($ui__input_a && $input_a__closures, _scope($scope1_id, {
				x: $ui__input_a && x,
				_: (_write_if($scope0_reason, 0) || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id)
			}, "__tests__/tags/owner.marko", "1:2", { x: "1:10" }), _client_guard($scope0_reason, 2) && "__tests__/tags/owner.marko_1_input_a#0:4/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/owner.marko_0", 0);
	_scope($scope0_id, {
		input_a: ($ui__input_x || _unfilled_if($scope0_reason, 2)) && input.a,
		"ClosureScopes:input_a/5": _write_if($scope0_reason, 2) && $input_a__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/owner.marko", 0, { input_a: ["input.a"] }) || _filled_guard($scope0_reason, 2) && $ui__input_x && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "__tests__/tags/owner.marko_0_input_a#4/subscribers", "input_a");
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>go</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>go</button>`)($template$1, $template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_x = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let a = "c1";
	_set_scope_reason(38 | $uf__input_x << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	owner_default({
		a,
		x: input.x
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | $uf__input_x << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	owner_default({
		a: input.a,
		x: input.x
	});
	_patch_child_end();
	_html(`<button>go</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
