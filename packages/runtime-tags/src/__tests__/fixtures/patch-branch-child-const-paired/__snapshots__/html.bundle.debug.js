// tags/card/index.marko
const $template$1 = "<section><h2> </h2></section>";
const $walks$1 = "D D m";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D D ;<section><h2> </h2></section>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2${_patch_attr_class($scope0_id, "PatchAttr:#h2/0 class", input.title, $scope0_reason, 0)}>${_patch_text($scope0_id, "#text/1", input.title, void 0, $scope0_reason, 0)}</h2>${_el_resume($scope0_id, "#h2/0", _mask_group($scope0_reason, 0))}</section>`);
	_scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&%l`)($walks$1)};${((_w0) => `<main>${_w0}<!></main>`)($template$1)}`)(),
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	card_default({ title: "root" });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _patch_child($scope1_id, "#childScope/0", 1);
			card_default({ title: "branch" });
			_patch_child_end();
			_html(`<p>${_patch_text($scope1_id, "#text/1", input.note, void 0, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_note#0:5/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html("</main>");
	_scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.note,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 1));
}, 1);
