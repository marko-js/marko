// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = true;
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope3_id = _scope_id();
				_html("<span>before</span>");
				_await($scope3_id, "a", rejectAfter(/* @__PURE__ */ new Error("nope"), 1), (value) => {
					_scope_id();
					_html(_escape(value));
				}, 0);
				_scope($scope3_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		let n = 0;
		_html(`<button>${_text_resume($scope2_id, "b", err.message, _serialize_guard($scope2_reason, 0))} ${_text_resume($scope2_id, "c", n, 2)}</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a0");
		_scope($scope2_id, { g: n });
	}, void 0, "a2");
	_html(`<button class=toggle>${_text_resume($scope0_id, "c", show)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: show,
		e: $show__closures
	});
}, 1);
