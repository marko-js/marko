// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $promise__closures = /* @__PURE__ */ new Set();
	const $show__closures = /* @__PURE__ */ new Set();
	let promise = null;
	_html(`<button>start</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_await($scope2_id, "a", "idle", (value) => {
					const $scope4_id = _scope_id();
					_html(_text_resume($scope4_id, "a", value));
					_scope($scope4_id, {});
				});
				_subscribe($promise__closures, _scope($scope2_id, {}), "a0", 0);
				return 0;
			}
		}, $scope1_id, "a");
		_html("<div>settled</div>");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("LOADING");
	}, void 0, "a2");
	_script($scope0_id, "a3");
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		d: promise,
		f: $promise__closures,
		e: $show__closures
	});
}, 1);
