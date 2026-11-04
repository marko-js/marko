// template.marko
const $Row_content__walks = "D lD l";
const $Row_content__template = "<p> </p><em> </em>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button>`)($Row_content__template, $Row_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b`)($Row_content__walks, $Row_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0, _w1) => `/${_w0}&/${_w1}& b`)($Row_content__walks, $Row_content__walks)};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button>`)($Row_content__template, $Row_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_y = _updates_from($scope0_reason, 2), $wi__input_y = _write_if($scope0_reason, 2), $ui__input_x__OR__input_row_b = _unfilled_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_y__closures = new Set();
	let n = 0;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id(), $ui__input_y = _unfilled_if($scope0_reason, 2);
		const $scope1_reason = _scope_reason(), $uf__b = _updates_from($scope1_reason, 2), $ui__b = _unfilled_if($scope1_reason, 2), $ui__a__OR__b = _unfilled_if($scope1_reason, 0), $ui__a = _unfilled_if($scope1_reason, 1), $fg__b = _filled_guard($scope1_reason, 2), $fg__a = _filled_guard($scope1_reason, 1);
		_html(`<p>${_text_mark($scope1_id, "#text/0", a + b, 1, $scope1_reason, 0)}</p><em>${_text_mark($scope1_id, "#text/1", input.y + b, 1, ($uf__input_y | $uf__b) << 1, 0)}</em>`);
		_patch_render($scope1_id, "__tests__/template.marko_1_input_y#0:5_b#5/setup", [_filled_guard($scope0_reason, 2) && ">input_y", $fg__b && "b"], ($uf__input_y | $uf__b) << 1, 0);
		_patch_render($scope1_id, "__tests__/template.marko_1_a#4_b#5/setup", [$fg__a && "a", $fg__b && "b"], $scope1_reason, 0);
		_subscribe(_unfilled_if(($uf__input_y | $uf__b) << 1, 0) && $wi__input_y && $input_y__closures, _scope($scope1_id, {
			a: ($ui__b || $ui__a__OR__b) && a,
			b: ($ui__input_y || $ui__a || $ui__b || $ui__a__OR__b) && b,
			_: ($wi__input_y || _write_if($scope1_reason, 2)) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			a: "2:15",
			b: "2:18"
		}), _client_guard(($uf__input_y | $uf__b) << 1, 0) && "__tests__/template.marko_1_input_y#0:5/subscribe") || ($fg__a && $ui__b && _patch_write($scope1_id, "PatchMarkedWrite:a", a, !_server_guard($scope1_reason, 1)), $fg__b && ($ui__input_y || $ui__a) && _patch_write($scope1_id, "PatchMarkedWrite:b", b, !_server_guard($scope1_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(14 | _updates_from($scope0_reason, 3) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({
		a: n,
		b: input.x
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 4) << 3 | _updates_from($scope0_reason, 5) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	Row.content(input.row);
	_patch_child_end();
	_html(`<button class=n>+</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_y: ($ui__input_x__OR__input_row_b || _unfilled_if($scope0_reason, 2)) && input.y,
		n,
		"ClosureScopes:input_y/11": $wi__input_y && $input_y__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_y: ["input.y"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 2) && $ui__input_x__OR__input_row_b && _patch_write($scope0_id, "PatchMarkedWrite:input_y", input.y, !_server_guard($scope0_reason, 2));
}, 1);
