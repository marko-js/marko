// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Rec = { content: _content("a2", ({ depth, content }) => {
		const $scope1_id = _scope_id();
		const $Rec_content__label__closures = /* @__PURE__ */ new Set();
		_scope_reason();
		let shown = false;
		const label = "off";
		_html(`<button>${_escape(depth)}</button>${_el_mark($scope1_id, "a")}`);
		_if(() => {}, $scope1_id, "c");
		_if(() => {
			if (depth < 1) {
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				Rec.content({
					depth: depth + 1,
					content: _content_resume("a1", () => {
						_scope_reason();
						const $scope4_id = _scope_id();
						_html(`<em>held ${_text_mark($scope4_id, "a", label, 2)}</em>`);
						_subscribe($Rec_content__label__closures, _scope($scope4_id, { _: _scope_with_id($scope2_id) }), "a0");
					}, $scope2_id)
				});
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "d", 0, 0);
		_script($scope1_id, "a3");
		_scope($scope1_id, {
			h: content,
			i: shown,
			j: label,
			m: $Rec_content__label__closures
		});
	}, $scope0_id) };
	Rec.content({ depth: 0 });
}, 1);
