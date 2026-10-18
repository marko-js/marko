// tags/card.marko
const $template$2 = "<button> </button>";
const $walks$2 = " D l";
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; D ;<button> </button>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_resume($scope0_id, "#text/1", f())}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/tags/card.marko_fill0", f, 1);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/tree.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/tree.marko": "__tests__/tags/tree.marko;b%;<!><!><!>",
	"__tests__/tags/tree.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/tree.marko_1*shell;${/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$2, "b%c")};${/*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$2, $template$1)}`)()
});
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			card_default({ fn: input.fn });
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
			const $childScope2 = _patch_child($scope1_id, "#childScope/1");
			$content({
				fn: input.fn,
				depth: input.depth - 1
			});
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/tree.marko_1_input_depth#0:3/init");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/tree.marko_1_input_fn#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/tags/tree.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_depth, void 0, void 0, void 0, ["__tests__/tags/tree.marko_1*shell"], $scope0_reason, 1);
	_patch_write($scope0_id, "PatchWrite:input_fn", input.fn, 1);
	$scope0_page && _scope($scope0_id, { input_fn: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.fn }, "__tests__/tags/tree.marko", 0, { input_fn: ["input.fn"] });
};
var tree_default = _template("__tests__/tags/tree.marko", $content);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | ($scope0_page ? _mask_group($scope0_reason, 1) : 0) << 5);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			tree_default({
				depth: 2,
				fn: _resume(function() {
					return "f:" + input.label;
				}, "__tests__/template.marko_1/fn", $scope1_id)
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_label: _write_if($scope0_reason, 0) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1), 1) : _patch_write($scope0_id, "PatchWrite:input_label", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
