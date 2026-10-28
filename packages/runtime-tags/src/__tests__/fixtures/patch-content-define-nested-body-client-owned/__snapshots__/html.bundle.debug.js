// template.marko
const $Inner_content2__walks = "b%c";
const $Inner_content2__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content2__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content2__template);
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Outer_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `D/${_w0}& l`)($Outer_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Outer_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	const Inner = { content: _content("__tests__/template.marko_3*content", ({ open, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 2), $wg__open = _write_guard($scope3_reason, 1);
		_if(() => {
			if (open) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "#text/0", content, {}, 0, 0, 0, $wg__content);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope3_id, "#text/0", _write_guard($scope3_reason, 0), $wg__open);
		_write_if($scope3_reason, 1) && _scope($scope3_id, { content }, "__tests__/template.marko", "2:2", { content: "2:23" }) || (_filled_guard($scope3_reason, 2) && _patch_fill($scope3_id, "PatchFill:__tests__/template.marko_fill1", content, !_server_guard($scope3_reason, 2)), _content_withhold(content));
	}, $scope0_id) };
	const Outer = { content: _content("__tests__/template.marko_1*content", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__open = _write_if($scope1_reason, 0);
		_set_scope_reason(_mask_group($scope1_reason, 0) << 1 | _mask_group($scope1_reason, 0) << 3);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 1);
		Inner.content({
			open,
			content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", input.title, 1, $scope0_reason, 0)}</em>`);
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, { _: ($wi__input_title || $wi__open) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:4"), "__tests__/template.marko_2_input_title#0:4/subscribe");
			}, $scope1_id)
		});
		_patch_child_end();
		_scope($scope1_id, {
			_: ($wi__input_title || $wi__open) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "7:2");
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 2);
	Outer.content({ open: count % 2 === 0 });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: input.title,
		count,
		"ClosureScopes:input_title/6": $wi__input_title && $input_title__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.title, !_server_guard($scope0_reason, 0));
}, 1);
