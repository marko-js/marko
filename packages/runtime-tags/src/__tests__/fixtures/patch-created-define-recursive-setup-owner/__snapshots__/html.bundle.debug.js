// template.marko
const $Card_content__walks = " D l%b%c";
const $Card_content__template = "<button> </button><!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D ;<strong> </strong>",
	"~__tests__/template.marko_5*content": "~__tests__/template.marko_5*content;D ;<strong> </strong>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"~__tests__/template.marko_3*content": "~__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell !>>#childScope/0>__tests__/template.marko_1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)(),
	"__tests__/template.marko_4*shell": /*@__PURE__*/ (() => `__tests__/template.marko_4*shell !>#childScope/0>__tests__/template.marko_1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Card = { content: _content("__tests__/template.marko_1*content", ({ n, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__n = _write_if($scope1_reason, 0);
		let x = 0;
		_html(`<button>${_text_resume($scope1_id, "#text/1", x)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_dynamic_tag($scope1_id, "#text/2", content, {}, 2, 0, 0, _write_guard($scope1_reason, 1), $scope1_reason, 1);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope1_reason, 0) << 1);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 1, 0, $scope0_id);
				Card.content({
					n: n - 1,
					content: _content("__tests__/template.marko_3*content", () => {
						const $scope3_reason = _scope_reason();
						const $scope3_id = _scope_id();
						_html(`<em>${_text_resume($scope3_id, "#text/0", input.label, 1, $scope0_reason, 1)}</em>`);
						_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_label ? "__tests__/template.marko_3_input_label#0:3/init" : "__tests__/template.marko_3_input_label#0:3/subscribe");
						_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope3_id, { _: ($wi__input_label__OR__input_show || $wi__n) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:8"));
					}, $scope2_id, 1)
				});
				_patch_child_end();
				_scope($scope2_id, {
					_: ($wi__input_label__OR__input_show || $wi__n) && _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "5:2");
				return 0;
			}
		}, $scope1_id, "#text/3", 1, _write_guard($scope1_reason, 0), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", x, 1);
		_scope($scope1_id, {
			x,
			_: ($wi__input_label__OR__input_show || $wi__n) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { x: "2:6" });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope4_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope4_id, "#childScope/0", 2, 0, $scope0_id);
			Card.content({
				n: 2,
				content: _content("__tests__/template.marko_5*content", () => {
					const $scope5_reason = _scope_reason();
					const $scope5_id = _scope_id();
					_html(`<strong>${_text_resume($scope5_id, "#text/0", input.label, 1, $scope0_reason, 1)}</strong>`);
					$cg__input_label && _patch_init($scope5_id, "__tests__/template.marko_5_input_label#0:3/init");
					_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope5_id, {
						_: $wi__input_label__OR__input_show && _scope_with_id($scope4_id),
						"ClosureSignalIndex:input_label/5": $wi__input_label && 1
					}, "__tests__/template.marko", "7:17"));
				}, $scope4_id, 1)
			});
			_patch_child_end();
			_scope($scope4_id, {
				_: $wi__input_label__OR__input_show && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_4*shell"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
