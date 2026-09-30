// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = true;
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_if(() => {
				if (show) {
					const $scope5_id = _scope_id();
					_html("<span>before</span>");
					_await($scope5_id, "#text/0", rejectAfter(new Error("nope"), 1), (value) => {
						const $scope6_id = _scope_id();
						_html(_escape(value));
					}, 0);
					_scope($scope5_id, {}, "__tests__/template.marko", "9:6");
					return 0;
				}
			}, $scope2_id, "#text/0");
			_subscribe($show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:4"), "__tests__/template.marko_2_show#0:3/subscribe");
		}, void 0, (err) => {
			_scope_reason();
			const $scope4_id = _scope_id();
			let n = 0;
			_html(`<button>${_text_resume($scope4_id, "#text/1", n ? (() => {
				throw new Error("from catch");
			})() : err.message)}</button>${_el_resume($scope4_id, "#button/0")}`);
			_script($scope4_id, "__tests__/template.marko_4");
			_scope($scope4_id, {
				err_message: err?.message,
				n
			}, "__tests__/template.marko", "15:6", {
				err_message: ["err.message", "15:13"],
				n: "16:12"
			});
		}, void 0, "__tests__/template.marko_4*content");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
	}, void 0, (outer) => {
		const $scope3_reason = _scope_reason(), $sg__outer_message = _serialize_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`<p>outer caught ${_text_resume($scope3_id, "#text/0", outer.message, $sg__outer_message * 2)}</p>`);
		_serialize_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "5:4");
	}, void 0, "__tests__/template.marko_3*content");
	_html(`<button class=toggle>${_text_resume($scope0_id, "#text/2", show)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"ClosureScopes:show/4": $show__closures
	}, "__tests__/template.marko", 0, { show: "3:6" });
}, 1);
