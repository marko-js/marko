// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<span> </span>";
const WORD = "w";
_shells({
	a0: "a0;D ;<span> </span>",
	a: "a;b%;<!><!><!>",
	a6: `a6 !a2;${/*@__PURE__*/ ((_w0) => `/${_w0}&D l D l`)($Body_content__walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button> </button>`)($Body_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			const Body = { content: _content("a0", ({ v, w }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason(), $ui__v = _unfilled_if($scope2_reason, 1), $fg__w = _filled_guard($scope2_reason, 2);
				_html(`<span>${_text_mark($scope2_id, "a", v + w, 1, $scope2_reason, 0)}</span>`);
				_patch_render($scope2_id, "a1", [_filled_guard($scope2_reason, 1) && "d", $fg__w && "e"], $scope2_reason, 0);
				_scope($scope2_id, {
					d: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0)) && v,
					e: $ui__v && w
				}) || $fg__w && $ui__v && _patch_write($scope2_id, "xe", w, !_server_guard($scope2_reason, 2));
			}, $scope1_id, 0) };
			_set_scope_reason(10);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Body.content({
				v: y,
				w: WORD
			});
			_patch_child_end();
			_html(`<p>${_text_mark($scope1_id, "b", input.a, 1, $scope0_reason, 1)}</p><button>${_text_mark($scope1_id, "d", x + input.a)}</button>${_el_mark($scope1_id, "c")}`);
			_script($scope1_id, "a2");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a3");
			_patch_render($scope1_id, "a4", _filled_guard($scope0_reason, 1) && ">e");
			_patch_fill($scope1_id, "va5", x, 1);
			_scope($scope1_id, {
				e: _write_if($scope0_reason, 1) && x,
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a6"], $scope0_reason, 0);
	$fg__input_a && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a3", "e");
	_scope($scope0_id, { e: input.a }) || $fg__input_a && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 1));
}, 1);
