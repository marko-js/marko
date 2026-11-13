// tags/card.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<p> </p>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.opts;
	const f = o.fn;
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
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $sg__input_label = _server_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_label && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !$sg__input_label);
	const opts = { fn: _bind_resume(function() {
		return "f:" + input.label;
	}, "__tests__/template.marko_0/opts", $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ opts });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_opts#0:5/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/template.marko_1_opts#0:5/setup", "opts");
	_scope($scope0_id, {
		input_label: $wi__input_show && input.label,
		opts: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 0)) && opts
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		opts: "1:8"
	}) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:opts", opts, !$sg__input_label);
}, 1);
