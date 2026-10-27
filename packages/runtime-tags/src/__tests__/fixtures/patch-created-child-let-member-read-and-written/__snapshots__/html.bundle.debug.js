// tags/card.marko
const $template$1 = "<p> </p><button>log</button>";
const $walks$1 = "D l b";
const $setup$1 = [[], ["__tests__/tags/card.marko_0_o_label#6"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0_o_label#6;D l ;<p> </p><button>log</button>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let o = input.opts;
	_html(`<p>${_patch_text($scope0_id, "#text/0", o.label, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0)}</p><button>log</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0_o_label#6");
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:o_label", o?.label, 1);
	$scope0_page && _scope($scope0_id, { o_label: o?.label }, "__tests__/tags/card.marko", 0, { o_label: ["o.label", "1:6"] });
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			card_default({ opts: _patch_live($childScope, {
				label: input.label,
				n: input.n
			}, $scope1_id, ">input_label >input_n") });
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4_input_n#0:5/init");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 4);
	$scope0_page ? _scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		input_n: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_n: ["input.n"]
	}) : (_filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.label) : _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 5))), _filled_guard($scope0_reason, 6) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/unpatched", input.n) : _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.n, !_server_guard($scope0_reason, 6))));
}, 1);
