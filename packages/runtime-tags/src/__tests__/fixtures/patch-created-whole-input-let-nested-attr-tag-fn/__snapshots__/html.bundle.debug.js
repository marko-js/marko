// tags/card.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<p> </p>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let i = input;
	const f = i.a.b.fn;
	_html(`<p>${_text_mark($scope0_id, "#text/0", f(), 1, _client_guard($scope0_reason, 0) << 1, 0, 1)}</p>`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $ui__input_show__OR__input_label = _unfilled_if($scope0_reason, 1), $fg__input_on = _filled_guard($scope0_reason, 5), $fg__input_label = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
			let $b;
			if (input.on) {
				$b = attrTag({ fn: function() {
					return "f:" + input.label;
				} });
			}
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ a: attrTag({ b: $b }) });
			_patch_child_end();
			_patch_render($scope1_id, "__tests__/template.marko_1_input_on#0:4_input_label#0:5/setup", [_filled_guard($scope0_reason, 5) && ">input_on", _filled_guard($scope0_reason, 6) && ">input_label"], $scope0_reason, 2);
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 4);
	$fg__input_on && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_on#0:4/setup", "input_on");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:5/setup", "input_label");
	_scope($scope0_id, {
		input_on: ($ui__input_show__OR__input_label || _unfilled_if($scope0_reason, 2)) && input.on,
		input_label: _write_if($scope0_reason, 0) && input.label
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_label: ["input.label"]
	}) || ($fg__input_on && $ui__input_show__OR__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on, !_server_guard($scope0_reason, 5)), $fg__input_label && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 6)));
}, 1);
