// tags/card.marko
const $template$1 = "";
const $walks$1 = "";
_shells({ "__tests__/tags/card.marko": "^__tests__/tags/card.marko," });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $return = { fn: _resume(function() {
		return "f:" + input.label;
	}, "__tests__/tags/card.marko_0/_return", $scope0_id) };
	$scope0_page ? _scope($scope0_id, { input_label: input.label }, "__tests__/tags/card.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
	return $return;
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell !__tests__/template.marko_1;${/*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button>set</button>`)("")}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			let r = card_default({ label: input.label });
			_client_guard($scope0_reason, 1) && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_r#4/var");
			let l = r;
			_html(`<p>${_text_resume($scope1_id, "#text/2", l.fn())}</p><button>set</button>${_el_resume($scope1_id, "#button/3")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_filled_guard($scope0_reason, 1) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill1", l, 1);
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_label: _unfilled_if($scope0_reason, 0) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
