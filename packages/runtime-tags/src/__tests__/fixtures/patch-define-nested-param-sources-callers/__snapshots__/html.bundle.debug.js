// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $Wrapper_content__walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Outer_content__walks, $Outer_content__walks);
const $Wrapper_content__template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Outer_content__template, $Outer_content__template);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Wrapper_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Wrapper_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Wrapper_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Wrapper_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let n = 0;
	const Outer = { content: _content("__tests__/template.marko_1*content", ({ x, y }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__x__closures = new Set();
		const $scope1_reason = _scope_reason(), $wi__x = _write_if($scope1_reason, 1);
		const Inner = { content: _content("__tests__/template.marko_2*content", ({ z }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<p>${_text_resume($scope2_id, "#text/0", input.label + x + z, void 0, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0)}</p>`);
			_client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0) && _patch_write($scope2_id, "PatchMarkedWrite:z", z, !(_filled_guard($scope2_reason, 0) && ($cg__input_label || _client_guard($scope1_reason, 1))));
			_patch_join_init($scope2_id, "__tests__/template.marko_2_input_label#0:4_x#1:3_z#3/init", (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0, _filled_guard($scope0_reason, 0) && ">>input_label", _filled_guard($scope1_reason, 1) && ">x", _filled_guard($scope2_reason, 0) && "z");
			_subscribe(_unfilled_if((_mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && $wi__x && $Outer_content__x__closures, _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && $wi__input_label && $input_label__closures, _scope($scope2_id, {
				z: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 2) || _unfilled_if($scope2_reason, 0)) && z,
				_: ($wi__input_label || $wi__x || _write_if($scope2_reason, 0)) && _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "3:4", { z: "3:19" }), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && "__tests__/template.marko_2_input_label#0:4/subscribe"), _client_guard((_mask_group($scope1_reason, 1) | _mask_group($scope2_reason, 0)) << 1, 0) && "__tests__/template.marko_2_x#1:3/subscribe");
		}, $scope1_id) };
		_set_scope_reason(_mask_group($scope1_reason, 2) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		Inner.content({ z: y });
		_patch_child_end();
		_scope($scope1_id, {
			x: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 1)) && x,
			_: ($wi__input_label || _write_if($scope1_reason, 0)) && _scope_with_id($scope0_id),
			"ClosureScopes:x/8": $wi__x && $Outer_content__x__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:2", { x: "2:17" }) || _filled_guard($scope1_reason, 1) && ($cg__input_label || _client_guard($scope1_reason, 2)) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", x, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Wrapper = { content: _content("__tests__/template.marko_3*content", ({ a, b }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope3_reason, 0) << 1 | _mask_group($scope3_reason, 0) << 3);
		const $childScope2 = _peek_scope_id($scope3_id, "#childScope/0", 1);
		Outer.content({
			x: a,
			y: 0
		});
		_patch_child_end();
		_set_scope_reason(_mask_group($scope3_reason, 1) << 1 | _mask_group($scope3_reason, 1) << 5);
		const $childScope3 = _peek_scope_id($scope3_id, "#childScope/1", 2);
		Outer.content({
			x: 0,
			y: b
		});
		_patch_child_end();
		_scope($scope3_id, {
			"#childScope/0": _existing_scope($childScope2),
			"#childScope/1": _existing_scope($childScope3)
		}, "__tests__/template.marko", "8:2");
	}, $scope0_id) };
	_set_scope_reason(8 | _mask_group($scope0_reason, 1) << 1);
	const $childScope4 = _peek_scope_id($scope0_id, "#childScope/0", 3);
	Wrapper.content({
		a: input.a,
		b: n
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		n,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope4)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
