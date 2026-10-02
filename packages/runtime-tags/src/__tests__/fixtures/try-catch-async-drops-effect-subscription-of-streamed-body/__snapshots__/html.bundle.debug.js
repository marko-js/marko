// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = true;
	_html("<pre id=log></pre>");
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter(1, 1), (v) => {
			const $scope2_id = _scope_id();
			_try($scope2_id, "#text/0", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_try($scope3_id, "#text/0", () => {
					_scope_reason();
					const $scope6_id = _scope_id();
					_await($scope6_id, "#text/0", rejectAfter(new Error("nope"), 2), (x) => {
						const $scope8_id = _scope_id();
						_html(_escape(x));
					}, 0);
				}, () => {
					_scope_reason();
					const $scope7_id = _scope_id();
					_html("inner loading");
				}, void 0, "__tests__/template.marko_7*content");
				_script($scope3_id, "__tests__/template.marko_3_show#0:3", 0);
				_subscribe($show__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "7:6"), "__tests__/template.marko_3_show#0:3/subscribe", 0);
				_resume_branch($scope3_id);
			}, void 0, (err) => {
				const $scope5_reason = _scope_reason(), $wg__err_message = _write_guard($scope5_reason, 0);
				const $scope5_id = _scope_id();
				_html(`caught ${_text_resume($scope5_id, "#text/0", err.message, $wg__err_message * 2)}`);
				_write_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "15:8");
			}, void 0, "__tests__/template.marko_5*content");
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_4*content");
	_html(`<button class=toggle>${_text_resume($scope0_id, "#text/2", show)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"ClosureScopes:show/4": $show__closures
	}, "__tests__/template.marko", 0, { show: "3:6" });
}, 1);
