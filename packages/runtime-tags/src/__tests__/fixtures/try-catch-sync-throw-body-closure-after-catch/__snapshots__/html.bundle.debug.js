// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = true;
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		if (true) {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "#text/0", show)}</span>`);
			_subscribe($show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_2_show#0:3/subscribe");
		}
		_html(_escape((() => {
			throw new Error("nope");
		})()));
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`<p>${_text_resume($scope3_id, "#text/0", err.message, $wg__err_message)}</p>`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "7:4");
	}, void 0, "__tests__/template.marko_3*content");
	_html(`<button class=toggle>${_text_resume($scope0_id, "#text/2", show)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"ClosureScopes:show/4": $show__closures
	}, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
