// tags/label.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/label.marko": "__tests__/tags/label.marko;D ;<span> </span>" });
var label_default = _template("__tests__/tags/label.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", typeof input.onHide, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/label.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_input_w#0:5_y#2/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("D l")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let y = input.v;
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			label_default({ onHide: function() {
				y = "z";
			} });
			_patch_child_end();
			_html(`<p>${_text_resume($scope1_id, "#text/1", y + input.w)}</p>`);
			$cg__input_v && _patch_init($scope1_id, "__tests__/template.marko_1_input_v#0:4/init");
			!$cg__input_v && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill2", y, 1);
			_scope($scope1_id, {
				y: _write_if($scope0_reason, 2) && y,
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2", { y: "2:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_v: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v,
		input_w: input.w
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_w: ["input.w"]
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.v, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.w, !_server_guard($scope0_reason, 2)));
}, 1);
