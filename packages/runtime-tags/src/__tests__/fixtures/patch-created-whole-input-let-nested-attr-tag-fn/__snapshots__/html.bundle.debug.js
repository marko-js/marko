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
	_html(`<p>${_text_resume($scope0_id, "#text/0", f(), 1, _client_guard($scope0_reason, 0) << 1, 0)}</p>`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			let $b;
			if (input.on) {
				$b = attrTag({ fn: function() {
					return "f:" + input.label;
				} });
			}
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ a: attrTag({ b: $b }) });
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_on#0:4_input_label#0:5/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 4);
	_scope($scope0_id, {
		input_on: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.on,
		input_label: _write_if($scope0_reason, 0) && input.label
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.on) : _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.on, !_server_guard($scope0_reason, 5))), _filled_guard($scope0_reason, 6) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/unpatched", input.label) : _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 6))));
}, 1);
