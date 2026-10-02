// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = true;
	_html("<pre id=log></pre>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter(1, 1), (v) => {
			const $scope2_id = _scope_id();
			_try($scope2_id, "a", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_try($scope3_id, "a", () => {
					_scope_reason();
					const $scope6_id = _scope_id();
					_await($scope6_id, "a", rejectAfter(/* @__PURE__ */ new Error("nope"), 2), (x) => {
						_scope_id();
						_html(_escape(x));
					}, 0);
				}, () => {
					_scope_reason();
					_scope_id();
					_html("inner loading");
				}, void 0, "a0");
				_script($scope3_id, "a1", 0);
				_subscribe($show__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), "a2", 0);
				_resume_branch($scope3_id);
			}, void 0, (err) => {
				const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`caught ${_text_resume($scope5_id, "a", err.message, $wg__err_message * 2)}`);
				_write_if($scope5_reason, 0) && _scope($scope5_id, {});
			}, void 0, "a3");
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a4");
	_html(`<button class=toggle>${_text_resume($scope0_id, "c", show)}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		d: show,
		e: $show__closures
	});
}, 1);
