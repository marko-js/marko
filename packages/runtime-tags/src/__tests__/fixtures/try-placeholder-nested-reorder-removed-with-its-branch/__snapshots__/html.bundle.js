// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $inner__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<pre id=log></pre><button class=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}<button class=hide></button>${_el_resume($scope0_id, "c")}`);
	_try($scope0_id, "d", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", resolveAfter(1, 1), (w) => {
					const $scope3_id = _scope_id();
					_html(`<span>${_text_resume($scope3_id, "a", count)}</span>`);
					_script($scope3_id, "a0");
					_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a1");
				});
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_subscribe($inner__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a3");
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		e: count,
		g: $count__closures,
		h: $inner__closures
	});
}, 1);
