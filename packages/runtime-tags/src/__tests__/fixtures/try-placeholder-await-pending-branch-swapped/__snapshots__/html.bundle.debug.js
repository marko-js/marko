// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $tab__closures = new Set();
	let tab = 0;
	_html(`<button>next</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (tab < 2) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", tab === 1 ? new Promise(() => {}) : "ready", (value) => {
					const $scope5_id = _scope_id();
					_html(_text_resume($scope5_id, "#text/0", value));
					_scope($scope5_id, {}, "__tests__/template.marko", "7:6");
				});
				_subscribe($tab__closures, _scope($scope2_id, { "ClosureSignalIndex:tab": 1 }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_2_tab#2/subscribe", 0);
				return 0;
			} else {
				const $scope4_id = _scope_id();
				_await($scope4_id, "#text/0", resolveAfter("tab 2", 2), (value) => {
					const $scope6_id = _scope_id();
					_html(_escape(value));
				}, 0);
				_scope($scope4_id, {}, "__tests__/template.marko", "11:4");
				return 1;
			}
		}, $scope1_id, "#text/0");
		_subscribe($tab__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), "__tests__/template.marko_1_tab#2/subscribe");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("LOADING");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		tab,
		"ClosureScopes:tab": $tab__closures
	}, "__tests__/template.marko", 0, { tab: "2:6" });
}, 1);
