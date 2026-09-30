// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	forUntil(55, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", i === 54 ? rejectAfter(new Error("ERROR!"), 1) : resolveAfter(i, 1), (v) => {
				const $scope4_id = _scope_id();
				_html(_escape(v));
			}, 0);
		}, void 0, (err) => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			let clicks = 0;
			_html(`<button>${_text_resume($scope3_id, "#text/1", err.message, _serialize_guard($scope3_reason, 0))} ${_text_resume($scope3_id, "#text/2", clicks, 2)}</button>${_el_resume($scope3_id, "#button/0")}`);
			_script($scope3_id, "__tests__/template.marko_3");
			_scope($scope3_id, { clicks }, "__tests__/template.marko", "8:6", { clicks: "9:12" });
		}, void 0, "__tests__/template.marko_3*content");
	});
}, 1);
