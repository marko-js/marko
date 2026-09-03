// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<div>");
	_await($scope0_id, "a", Promise.resolve("a"), (value) => {
		const $scope1_id = _scope_id();
		_html(`Got: ${_escape(value)} ${_text_resume($scope1_id, "b", count, 2)}`);
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	});
	_await($scope0_id, "b", resolveAfter("b", 2), (value) => {
		const $scope2_id = _scope_id();
		_html(`Got: ${_escape(value)} ${_text_resume($scope2_id, "b", count, 2)}`);
		_subscribe($count__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cf: 1
		}));
	});
	_await($scope0_id, "c", resolveAfter("c", 1), (value) => {
		const $scope3_id = _scope_id();
		_html(`Got: ${_escape(value)} ${_text_resume($scope3_id, "b", count, 2)}`);
		_subscribe($count__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			Cf: 2
		}));
	});
	_html(`<button>Inc</button>${_el_resume($scope0_id, "d")}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: count,
		f: $count__closures
	});
}, 1);
