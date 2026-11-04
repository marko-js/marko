// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a1: "a1",
	a2: "a2",
	a: `a !a7;${((_w0, _w1) => `D/${_w0}&/${_w1}& l`)($Panel_content__walks, $Panel_content__walks)};${((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($Panel_content__template, $Panel_content__template)}`,
	a0: "a0;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Panel = { content: _content("a3", ({ open, body }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__body = _write_guard($scope3_reason, 2), $wg__open = _write_guard($scope3_reason, 1), $fg__body = _filled_guard($scope3_reason, 2), $cg__open = _client_guard($scope3_reason, 1);
		_if(() => {
			if (open) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "a", body, {}, 2, 0, 0, $wg__body, $scope3_reason, 2);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__open, 1, 0, 0, ["a0"], $scope3_reason, 1);
		$fg__body && $cg__open && _patch_render($scope3_id, "a4", "e");
		_write_if($scope3_reason, 1) && _scope($scope3_id, { e: _unfilled_if($scope3_reason, 1) && body }) || $fg__body && $cg__open && _patch_write($scope3_id, "xe", body, !_server_guard($scope3_reason, 2));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(10);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	Panel.content({
		open: true,
		body: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", input.title, 1, $scope0_reason, 1)}</em>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a5", $cg__input_title);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id) })
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1 | _updates_from($scope0_reason, 2) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 2);
	Panel.content({
		open: input.open,
		body: attrTag({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<strong>${_text_mark($scope2_id, "a", input.title, 1, $scope0_reason, 1)}</strong>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a6", $cg__input_title);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_title__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				Ci: $wi__input_title && 1
			}));
		}, $scope0_id) })
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a7");
	$fg__input_title && _patch_subscribers($scope0_id, "a8", "f");
	_scope($scope0_id, {
		f: input.title,
		h: count,
		i: $wi__input_title && $input_title__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || $fg__input_title && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 1));
}, 1);
