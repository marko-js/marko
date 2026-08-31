// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Once = { content: _content("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let call = 1;
		const $return = _resume(function() {
			if (call) {
				call--;
				value();
			}
		}, "__tests__/template.marko_1/_return", $scope1_id);
		writeScope($scope1_id, {
			value,
			call
		}, "__tests__/template.marko", "1:1", {
			value: "1:15",
			call: "2:7"
		});
		_resume_branch($scope1_id);
		return $return;
	}, $scope0_id) };
	let clickOnceCount = 0;
	const $childScope = _peek_scope_id();
	let onClickOnce = Once.content({ value: _resume(function() {
		clickOnceCount++;
	}, "__tests__/template.marko_0/onClickOnce", $scope0_id) });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_onClickOnce#9/var");
	_html(`<button class=once>${_text_resume($scope0_id, "#text/3", clickOnceCount)}</button>${_el_resume($scope0_id, "#button/2")}`);
	const Twice = { content: _content("__tests__/template.marko_2*content", ({ value }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		let call = 2;
		const $return2 = _resume(function() {
			if (call) {
				call--;
				value();
			}
		}, "__tests__/template.marko_2/_return2", $scope2_id);
		writeScope($scope2_id, {
			value,
			call
		}, "__tests__/template.marko", "15:1", {
			value: "15:16",
			call: "16:7"
		});
		_resume_branch($scope2_id);
		return $return2;
	}, $scope0_id) };
	let clickTwiceCount = 0;
	const $childScope2 = _peek_scope_id();
	let onClickTwice = Twice.content({ value: _resume(function() {
		clickTwiceCount++;
	}, "__tests__/template.marko_0/onClickTwice", $scope0_id) });
	_var($scope0_id, "#scopeOffset/5", $childScope2, "__tests__/template.marko_0_onClickTwice#11/var");
	_html(`<button class=twice>${_text_resume($scope0_id, "#text/7", clickTwiceCount)}</button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/template.marko_0_onClickTwice#11");
	_script($scope0_id, "__tests__/template.marko_0_onClickOnce#9");
	writeScope($scope0_id, {
		clickOnceCount,
		onClickOnce,
		clickTwiceCount,
		onClickTwice,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/4": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		clickOnceCount: "9:5",
		onClickOnce: "10:6",
		clickTwiceCount: "23:5",
		onClickTwice: "24:7"
	});
	_resume_branch($scope0_id);
}, 1);
