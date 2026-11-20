// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $label__closures = /* @__PURE__ */ new Set();
	const $shown__closures = /* @__PURE__ */ new Set();
	let shown = false;
	const label = "off";
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	const Rec = { content: _content("a2", (input) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {}, $scope1_id, "a");
		_if(() => {
			if (input.depth < 1) {
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				Rec.content({
					depth: input.depth + 1,
					content: _content_resume("a1", () => {
						_scope_reason();
						const $scope3_id = _scope_id();
						_html(`<em>held ${_text_mark($scope3_id, "a", label, 2)}</em>`);
						_subscribe($label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0");
					}, $scope2_id)
				});
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "b", 0, 0);
		_subscribe($shown__closures, _scope($scope1_id, {
			e: input.content,
			_: _scope_with_id($scope0_id)
		}), "a3");
	}, $scope0_id) };
	Rec.content({ depth: 0 });
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		c: shown,
		f: $label__closures,
		e: $shown__closures
	});
}, 1);
