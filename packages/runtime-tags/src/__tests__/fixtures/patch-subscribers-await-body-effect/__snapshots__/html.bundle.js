// template.marko
const $Label_content__walks = "D%c%l";
const $Label_content__template = "<b><!> <!></b>";
_shells({
	a8: `a8 a>;${/*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)($Label_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p>`)($Label_content__template)}`,
	a9: `a9 a>;${((_w0) => `b/${_w0}&D l`)($Label_content__walks)};${((_w0) => `<!>${_w0}<p> </p>`)($Label_content__template)}`,
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 3), $cg__input_p = _client_guard($scope0_reason, 2), $wi__input_n = _write_if($scope0_reason, 3), $sg__input_n = _server_guard($scope0_reason, 3), $fg__input_n = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_n__closures = /* @__PURE__ */ new Set();
	const $input_m__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.p, (v) => {
		const $scope1_id = _scope_id();
		const $await_content__v__closures = /* @__PURE__ */ new Set();
		const Label = { content: _content("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<b>${_text_mark($scope2_id, "a", v, 1, $scope0_reason, 2)} ${_text_mark($scope2_id, "b", input.n, 2, $scope0_reason, 3)}</b>`);
			_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "a1", $cg__input_n);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "a2", $cg__input_p);
			_subscribe(_unfilled_if($scope0_reason, 2) && $await_content__v__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_n__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id),
				Cg: $wi__input_n && 1
			}), $cg__input_n && "a1"), $cg__input_p && "a2");
		}, $scope1_id) };
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Label.content({});
		_patch_child_end();
		const twice = input.n * 2;
		_filled_guard($scope0_reason, 3) && _patch_write($scope1_id, "xf", twice, !$sg__input_n);
		_html(`<p>${_text_mark($scope1_id, "b", input.n + input.m, 1, $scope0_reason, 1)}</p>`);
		_script($scope1_id, "a3", 1, _filled_guard($scope0_reason, 3), [">e", "f"]);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "a4", $cg__input_n);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "a5");
		_patch_render($scope1_id, "a6", [_filled_guard($scope0_reason, 3) && ">e", _filled_guard($scope0_reason, 4) && ">f"], $scope0_reason, 1);
		$cg__input_n && _patch_render($scope1_id, "a7");
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_m__closures, _subscribe($wi__input_n && $input_n__closures, _scope($scope1_id, {
			f: twice,
			i: _write_if($scope0_reason, 2) && $await_content__v__closures,
			a: _existing_scope($childScope)
		}), $cg__input_n && "a4"), _client_guard($scope0_reason, 4) && "a5");
	}, 1, "a8", _unfilled_if($scope0_reason, 2), 1);
	$fg__input_n && _patch_subscribers($scope0_id, "a10", "e");
	_scope($scope0_id, {
		e: input.n,
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && input.m,
		g: $wi__input_n && $input_n__closures,
		h: _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1)) && $input_m__closures
	}) || ($fg__input_n && _patch_write($scope0_id, "xe", input.n, !$sg__input_n), _filled_guard($scope0_reason, 4) && $cg__input_n && _patch_write($scope0_id, "xf", input.m, !_server_guard($scope0_reason, 4)));
}, 1);
