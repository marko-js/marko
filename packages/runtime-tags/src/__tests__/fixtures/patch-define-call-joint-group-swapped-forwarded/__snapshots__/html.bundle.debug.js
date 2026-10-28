// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $Forward_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks);
const $Forward_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template);
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>toggle</button>`)($Forward_content__template, $Forward_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Forward_content__walks, $Forward_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($Forward_content__walks, $Forward_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button>toggle</button>`)($Forward_content__template, $Forward_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let on = true;
	const Show = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__a__OR__b = _write_guard($scope1_reason, 0), $wi__a__OR__b = _write_if($scope1_reason, 0);
		_if(() => {
			if (a || b) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", input.label, $wg__input_label)}</p>`);
				($wi__input_label || $wi__a__OR__b) && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_2_input_label#0:5/subscribe", $wg__input_label);
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__a__OR__b, $wg__a__OR__b, 0, 0, 1);
		($wi__input_label || $wi__a__OR__b) && _scope($scope1_id, {
			a: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && a,
			b: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 2)) && b,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			a: "2:16",
			b: "2:19"
		}) || (_filled_guard($scope1_reason, 1) && _client_guard($scope1_reason, 2) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", a, !_server_guard($scope1_reason, 1)), _filled_guard($scope1_reason, 2) && _client_guard($scope1_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill2", b, !_server_guard($scope1_reason, 2)));
	}, $scope0_id) };
	const Forward = { content: _content("__tests__/template.marko_3*content", ({ x, y }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope3_reason, 0) << 1 | _mask_group($scope3_reason, 1) << 3 | _mask_group($scope3_reason, 2) << 5);
		const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 0);
		Show.content({
			a: x,
			b: y
		});
		_patch_child_end();
		_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "7:2");
	}, $scope0_id) };
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	Forward.content({
		x: on,
		y: input.flag
	});
	_patch_child_end();
	_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
	const $childScope3 = _peek_scope_id($scope0_id, "#childScope/1", 2);
	Forward.content({
		x: input.flag,
		y: on
	});
	_patch_child_end();
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		on,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope2),
		"#childScope/1": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		on: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
