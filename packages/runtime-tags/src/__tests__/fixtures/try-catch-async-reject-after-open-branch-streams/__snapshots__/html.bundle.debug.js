// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = true;
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_html("<span>before</span>");
				_await($scope3_id, "#text/0", rejectAfter(new Error("nope"), 1), (value) => {
					const $scope4_id = _scope_id();
					_html(_escape(value));
				}, 0);
				_scope($scope3_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), "__tests__/template.marko_1_show#0:3/subscribe");
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		let n = 0;
		_html(`<button>${_text_resume($scope2_id, "#text/1", err.message, _serialize_guard($scope2_reason, 0))} ${_text_resume($scope2_id, "#text/2", n, 2)}</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, { n }, "__tests__/template.marko", "11:4", { n: "12:10" });
	}, void 0, "__tests__/template.marko_2*content");
	_html(`<button class=toggle>${_text_resume($scope0_id, "#text/2", show)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"ClosureScopes:show/4": $show__closures
	}, "__tests__/template.marko", 0, { show: "3:6" });
}, 1);
