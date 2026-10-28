// tags/badge.marko
const $template$1 = "<span class=badge><!><!></span>";
const $walks$1 = "D%b%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/badge.marko": "__tests__/tags/badge.marko;D%b%;<span class=badge><!><!></span>" });
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=badge>${_text_resume($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}${_text_resume($scope0_id, "#text/1", input.note ? ` (${_to_text(input.note)})` : "", 2, $scope0_reason, 1)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
});

// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button> </button></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell,<em>closed</em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			badge_default({
				label: input.title,
				note: input.note
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_title#0:6/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_note#0:7/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:4");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			_write_if($scope0_reason, 1) && _scope($scope2_id, {}, "__tests__/template.marko", "6:4");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell", "__tests__/template.marko_2*shell"], $scope0_reason, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.title,
		input_note: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.note,
		count
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_note: ["input.note"],
		count: "1:6"
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.title, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.note, !_server_guard($scope0_reason, 3)));
}, 1);
