// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a7", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_try($scope1_id, "a", _content_resume("a5", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_try($scope2_id, "a", _content_resume("a2", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_if(() => {}, $scope3_id, "a");
				_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a3");
			}, $scope2_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
				_scope_reason();
				const $scope8_id = _scope_id();
				_html("C loading ");
				_await($scope8_id, "a", resolveAfter("c", 4), (x) => {
					_scope_id();
					_html(_escape(x));
				}, 0);
			}, $scope2_id) }) });
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, $scope1_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
			_scope_reason();
			const $scope6_id = _scope_id();
			_html("B loading ");
			_await($scope6_id, "a", resolveAfter("b", 8), (x) => {
				_scope_id();
				_html(_escape(x));
			}, 0);
		}, $scope1_id) }) });
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a6", () => {
		_scope_reason();
		_scope_id();
		_html("A loading");
	}, $scope0_id) }) });
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		c: count,
		d: $count__closures
	});
}, 1);
