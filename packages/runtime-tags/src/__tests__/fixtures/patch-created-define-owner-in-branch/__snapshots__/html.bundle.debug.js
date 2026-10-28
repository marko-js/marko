// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell #childScope/0>!__tests__/template.marko_1;${/*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<button>x</button>`)($Panel_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 3), $wi__input_on__OR__input_w = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			let k = input.n;
			const Panel = { content: _content("__tests__/template.marko_2*content", ({ open }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $wg__open = _write_guard($scope2_reason, 0), $wi__open = _write_if($scope2_reason, 0);
				_if(() => {
					if (open) {
						const $scope3_id = _scope_id();
						_html(`<p>${_text_resume($scope3_id, "#text/0", input.w, $wg__input_w)}</p>`);
						($wi__input_on__OR__input_w || $wi__open) && _subscribe($wi__input_w && $input_w__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:28"), "__tests__/template.marko_3_input_w#0:5/subscribe", $wg__input_w);
						return 0;
					}
				}, $scope2_id, "#text/0", $wg__open, $wg__open, 0, 0, 1);
				($wi__input_on__OR__input_w || $wi__open) && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
			}, $scope1_id, 1) };
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({ open: k });
			_patch_child_end();
			_html(`<button>x</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_n#0:4/init");
			_filled_guard($scope0_reason, 2) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill2", k, 1);
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_on, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_n: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.n,
		input_w: input.w,
		"ClosureScopes:input_w/7": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_n: ["input.n"],
		input_w: ["input.w"]
	}) || (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.n, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.w, !_server_guard($scope0_reason, 3)));
}, 1);
