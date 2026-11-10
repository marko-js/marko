// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({ a: `a !a4;${((_w0) => `D/${_w0}& l`)($Panel_content__walks)};${((_w0) => `<main>${_w0}<button>+</button></main>`)($Panel_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Panel = { content: _content("a0", ({ open, body }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__body = _write_guard($scope2_reason, 2), $wg__open = _write_guard($scope2_reason, 1), $fg__body = _filled_guard($scope2_reason, 2);
		_if(() => {
			if (open) {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", body, {}, 0, 0, 0, $wg__body);
				_write_if($scope2_reason, 0) && _scope($scope3_id, {});
				return 0;
			}
		}, $scope2_id, "a", _write_guard($scope2_reason, 0), $wg__open);
		$fg__body && _patch_render($scope2_id, "a1", "e");
		_write_if($scope2_reason, 1) && _scope($scope2_id, { e: body }) || $fg__body && _patch_write($scope2_id, "xe", body, 1);
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(10);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	Panel.content({
		open: true,
		body: attrTag({ content: _content_resume("a3", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", input.title, 1, $scope0_reason, 0)}</em>`);
			$cg__input_title && _patch_render($scope1_id, "a2");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_title && "a2");
		}, $scope0_id) })
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$fg__input_title && _patch_subscribers($scope0_id, "a5", "e");
	_scope($scope0_id, {
		e: input.title,
		f: count,
		g: _write_if($scope0_reason, 0) && $input_title__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0));
}, 1);
