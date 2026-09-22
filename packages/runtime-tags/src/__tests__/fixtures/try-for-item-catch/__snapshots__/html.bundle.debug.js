// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clickCount__closures = new Set();
	let clickCount = 0;
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button>inc</button>${_el_resume($scope1_id, "#button/0")}`);
		forOf([1, 2], (item) => {
			const $scope2_id = _scope_id();
			_html(`-- ${_text_resume($scope2_id, "#text/0", (() => {
				if (clickCount > 1) throw new Error("ERROR!");
			})(), 2)}`);
			_subscribe($clickCount__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:clickCount": 1
			}, "__tests__/template.marko", "11:4"));
		});
		_script($scope1_id, "__tests__/template.marko_1_clickCount#2");
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($clickCount__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"));
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_3*content", (err) => {
		const $scope3_reason = _scope_reason(), $sg__err = _serialize_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(_text_resume($scope3_id, "#text/0", err, $sg__err));
		_serialize_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "14:4");
	}, $scope0_id) }) });
	_scope($scope0_id, {
		clickCount,
		"ClosureScopes:clickCount": $clickCount__closures
	}, "__tests__/template.marko", 0, { clickCount: "1:6" });
}, 1);
