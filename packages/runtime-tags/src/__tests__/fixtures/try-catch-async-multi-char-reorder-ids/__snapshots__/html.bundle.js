// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forUntil(55, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", i === 54 ? rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1) : resolveAfter(i, 1), (v) => {
				_scope_id();
				_html(_escape(v));
			}, 0);
		}, void 0, (err) => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", resolveAfter(err.message, 2), (message) => {
				const $scope4_id = _scope_id();
				let clicks = 0;
				_html(`<button>${_text_resume($scope4_id, "b", message, _write_guard($scope3_reason, 0))} ${_text_resume($scope4_id, "c", clicks, 2)}</button>${_el_resume($scope4_id, "a")}`);
				_script($scope4_id, "a0");
				_scope($scope4_id, { f: clicks });
			});
		}, void 0, "a1");
	});
}, 1);
