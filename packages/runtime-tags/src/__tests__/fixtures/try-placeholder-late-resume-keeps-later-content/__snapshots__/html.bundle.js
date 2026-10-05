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
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", resolveAfter(1, 1), (v) => {
					const $scope3_id = _scope_id();
					_html(`<span class=body>${_escape(v)}${_text_resume($scope3_id, "b", count, 2)}</span>`);
					_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a0");
				});
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
			}, () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, void 0, "a1");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "d");
	_await($scope0_id, "e", resolveAfter(1, 2), (y) => {
		const $scope4_id = _scope_id();
		_html(`<span class=after>${_text_resume($scope4_id, "a", count)}</span>`);
		_subscribe($count__closures, _scope($scope4_id, {
			_: _scope_with_id($scope0_id),
			Ch: 1
		}), "a2");
	});
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: count,
		h: $count__closures
	});
}, 1);
