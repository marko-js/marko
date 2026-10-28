// template.marko
const $Row_content__walks = "D lD l";
const $Row_content__template = "<p> </p><em> </em>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Row_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_y = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	let n = 0;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $cg__b = _client_guard($scope1_reason, 2);
		_html(`<p>${_text_resume($scope1_id, "#text/0", a + b, 1, $scope1_reason, 0)}</p><em>${_text_resume($scope1_id, "#text/1", input.y + b, 1, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0)}</em>`);
		$cg__b && _patch_write($scope1_id, "PatchMarkedWrite:a", a, !(_filled_guard($scope1_reason, 1) && $cg__b));
		_client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 1)) << 1, 0) && _patch_write($scope1_id, "PatchMarkedWrite:b", b, !(_filled_guard($scope1_reason, 2) && (_client_guard($scope0_reason, 0) || _client_guard($scope1_reason, 1))));
		_patch_join_init($scope1_id, "__tests__/template.marko_1_input_y#0:4_b#5/init", (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0, _filled_guard($scope0_reason, 0) && ">input_y", _filled_guard($scope1_reason, 2) && "b");
		_patch_join_init($scope1_id, "__tests__/template.marko_1_a#4_b#5/init", $scope1_reason, 0, _filled_guard($scope1_reason, 1) && "a", _filled_guard($scope1_reason, 2) && "b");
		_subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0) && $wi__input_y && $input_y__closures, _scope($scope1_id, {
			a: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0)) && a,
			b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope0_reason, 1)) && b,
			_: ($wi__input_y || _write_if($scope1_reason, 2)) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			a: "2:15",
			b: "2:18"
		}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0) && "__tests__/template.marko_1_input_y#0:4/subscribe");
	}, $scope0_id) };
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({
		a: n,
		b: input.x
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_y: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.y,
		n,
		"ClosureScopes:input_y/7": $wi__input_y && $input_y__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_y: ["input.y"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.y, !_server_guard($scope0_reason, 0));
}, 1);
