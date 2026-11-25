// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "v";
	const $return = {
		value,
		valueChange: _resume_scoped(function(next) {
			value = next;
		}, "__tests__/tags/child.marko_0/_return", $scope0_id)
	};
	return $return;
});

// tags/runner/index.marko
var runner_default = _template("__tests__/tags/runner/index.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button${_attr_class(input.class)}>run</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/runner/index.marko_0");
	_scope($scope0_id, { input }, "__tests__/tags/runner/index.marko", 0, { input: 0 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button class=show>show</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			let { value, valueChange } = child_default({});
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_$pattern#5/var");
			const $childScope2 = _peek_scope_id();
			runner_default({
				class: "first",
				run: [1].map((n) => () => {
					value = "first" + n;
				})[0]
			});
			_html(`<span>${_text_mark($scope1_id, "#text/3", value)} ${_text_mark($scope1_id, "#text/4", typeof valueChange, 2)}</span>`);
			_scope($scope1_id, {
				"#childScope/0": _existing_scope($childScope),
				"#childScope/2": _existing_scope($childScope2)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_if(() => {
		if (show) {
			const $scope2_id = _scope_id();
			const $childScope3 = _peek_scope_id();
			let { valueChange, value } = child_default({});
			_var($scope2_id, "#scopeOffset/1", $childScope3, "__tests__/template.marko_2_$pattern2#5/var");
			const $childScope4 = _peek_scope_id();
			runner_default({
				class: "last",
				run: [2].map((n) => () => {
					value = "last" + n;
				})[0]
			});
			_html(`<span>${_text_mark($scope2_id, "#text/3", value)} ${_text_mark($scope2_id, "#text/4", typeof valueChange, 2)}</span>`);
			_scope($scope2_id, {
				"#childScope/0": _existing_scope($childScope3),
				"#childScope/2": _existing_scope($childScope4)
			}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
