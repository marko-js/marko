// tags/card.marko
const $template$1 = "<p> </p><p> </p>";
const $walks$1 = "D lD l";
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D lD ;<p> </p><p> </p>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let all = input;
	const f = all.opts.fn;
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.opts.label, void 0, $scope0_reason, 1)}</p><p>${_text_resume($scope0_id, "#text/1", f())}</p>`);
	_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/tags/card.marko_fill0", { opts: { fn: all?.opts?.fn } }, 1);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			card_default({ opts: {
				fn: _resume(function() {
					return "f:" + input.label;
				}, "__tests__/template.marko_1/opts", $scope1_id),
				label: input.label
			} });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_label: _write_if($scope0_reason, 0) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1)) : _patch_write($scope0_id, "PatchWrite:input_label", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
