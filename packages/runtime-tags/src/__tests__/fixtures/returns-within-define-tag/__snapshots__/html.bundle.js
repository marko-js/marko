// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Once = { content: _content("a4", ({ value }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let call = 1;
		const $return = _resume(function() {
			if (call) {
				call--;
				value();
			}
		}, "a0", $scope1_id);
		writeScope($scope1_id, {
			c: value,
			d: call
		});
		_resume_branch($scope1_id);
		return $return;
	}) };
	let clickOnceCount = 0;
	const $childScope = _peek_scope_id();
	let onClickOnce = Once.content({ value: _resume(function() {
		clickOnceCount++;
	}, "a1", $scope0_id) });
	_var($scope0_id, "b", $childScope, "a5");
	_html(`<button class=once>${_escape(clickOnceCount)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}`);
	const Twice = { content: _content("a6", ({ value }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		let call = 2;
		const $return2 = _resume(function() {
			if (call) {
				call--;
				value();
			}
		}, "a2", $scope2_id);
		writeScope($scope2_id, {
			c: value,
			d: call
		});
		_resume_branch($scope2_id);
		return $return2;
	}) };
	let clickTwiceCount = 0;
	const $childScope2 = _peek_scope_id();
	let onClickTwice = Twice.content({ value: _resume(function() {
		clickTwiceCount++;
	}, "a3", $scope0_id) });
	_var($scope0_id, "f", $childScope2, "a7");
	_html(`<button class=twice>${_escape(clickTwiceCount)}${_el_resume($scope0_id, "h")}</button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "a8");
	_script($scope0_id, "a9");
	writeScope($scope0_id, {
		i: clickOnceCount,
		j: onClickOnce,
		k: clickTwiceCount,
		l: onClickTwice,
		a: _existing_scope($childScope),
		e: _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
