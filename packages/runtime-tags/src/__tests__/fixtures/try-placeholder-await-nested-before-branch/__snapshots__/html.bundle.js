// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=counter>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: count });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", Promise.resolve(1), () => {
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", resolveAfter(1, 1), () => {
				_scope_id();
				counter_default({});
			}, 0);
		}, 0);
		_if(() => {
			{
				const $scope5_id = _scope_id();
				_html("<span>shown</span>");
				_scope($scope5_id, {});
				return 0;
			}
		}, $scope1_id, "b", 1, 1, 0, 0, 1);
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: show,
		d: $show__closures
	});
}, 1);
