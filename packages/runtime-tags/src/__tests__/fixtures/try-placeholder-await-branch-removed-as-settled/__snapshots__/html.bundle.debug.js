// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $promise__closures = new Set();
	const $show__closures = new Set();
	let show = true;
	let promise = null;
	_html(`<button>start</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", promise || "idle", (value) => {
					const $scope4_id = _scope_id();
					_html(_text_resume($scope4_id, "#text/0", value));
					_scope($scope4_id, {}, "__tests__/template.marko", "11:6");
				});
				_subscribe($promise__closures, _scope($scope2_id, {}, "__tests__/template.marko", "10:4"), "__tests__/template.marko_2_promise#3/subscribe", 0);
				return 0;
			}
		}, $scope1_id, "#text/0");
		_html("<div>settled</div>");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2"), "__tests__/template.marko_1_show#2/subscribe");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("LOADING");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0_promise#3");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		promise,
		"ClosureScopes:promise": $promise__closures,
		"ClosureScopes:show": $show__closures
	}, "__tests__/template.marko", 0, { promise: "3:6" });
}, 1);
