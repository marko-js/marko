// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<pre id=log></pre><button class=inc>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}<button class=hide></button>${_el_resume($scope0_id, "c")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_await($scope4_id, "a", rejectAfter(/* @__PURE__ */ new Error("nope"), 1), (v) => {
					_scope_id();
					_html(_escape(v));
				}, 0);
			}, void 0, (err) => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", resolveAfter("caught", 2), (c) => {
					const $scope3_id = _scope_id();
					_html(`<span>${_text_resume($scope3_id, "a", count)}</span>`);
					_script($scope3_id, "a0");
					_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a1");
				});
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, void 0, "a2");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "d");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: count,
		g: $count__closures
	});
}, 1);
