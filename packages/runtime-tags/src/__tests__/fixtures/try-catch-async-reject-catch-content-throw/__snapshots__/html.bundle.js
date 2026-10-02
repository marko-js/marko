// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = true;
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_if(() => {
				{
					const $scope5_id = _scope_id();
					_html("<span>before</span>");
					_await($scope5_id, "a", rejectAfter(/* @__PURE__ */ new Error("nope"), 1), (value) => {
						_scope_id();
						_html(_escape(value));
					}, 0);
					_scope($scope5_id, {});
					return 0;
				}
			}, $scope2_id, "a");
			_subscribe($show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1");
		}, void 0, (err) => {
			_scope_reason();
			const $scope4_id = _scope_id();
			let n = 0;
			_html(`<button>${_text_resume($scope4_id, "b", err.message)}</button>${_el_resume($scope4_id, "a")}`);
			_script($scope4_id, "a0");
			_scope($scope4_id, {
				e: err?.message,
				f: n
			});
		}, void 0, "a2");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, void 0, (outer) => {
		const $scope3_reason = _scope_reason(), $wg__outer_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`<p>outer caught ${_text_resume($scope3_id, "a", outer.message, $wg__outer_message * 2)}</p>`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, void 0, "a3");
	_html(`<button class=toggle>${_text_resume($scope0_id, "c", show)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		d: show,
		e: $show__closures
	});
}, 1);
