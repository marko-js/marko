// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "v";
	const $return = {
		value,
		valueChange: _resume(function(next) {
			value = next;
		}, "__tests__/tags/child.marko_0/_return", $scope0_id)
	};
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $valueChange2__closures = new Set();
	const $childScope = _peek_scope_id();
	let { value, valueChange } = child_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_$pattern#14/var");
	const $childScope2 = _peek_scope_id();
	let { valueChange: onValue, value: renamed } = child_default({});
	_var($scope0_id, "#scopeOffset/3", $childScope2, "__tests__/template.marko_0_$pattern2#17/var");
	_html(`<div class=value>${_text_mark($scope0_id, "#text/4", value)} ${_text_mark($scope0_id, "#text/5", typeof valueChange, 2)}</div><div class=renamed>${_text_mark($scope0_id, "#text/6", renamed)} ${_text_mark($scope0_id, "#text/7", typeof onValue, 2)}</div><button class=param>param</button>${_el_mark($scope0_id, "#button/8")}`);
	_if(() => {
		if (true) {
			const $scope1_id = _scope_id();
			const valueChange = "const";
			_html(`<button class=const>${_escape(valueChange)}</button>${_el_mark($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_valueChange#0:16");
			_scope($scope1_id, {
				valueChange,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "6:2", { valueChange: "7:10" });
			return 0;
		}
	}, $scope0_id, "#text/9", 1, 0, 0, 0, 1);
	_for_of(["for"], (valueChange) => {
		const $scope2_id = _scope_id();
		_html(`<button class=for>${_escape(valueChange)}</button>${_el_mark($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2_valueChange#0:16");
		_scope($scope2_id, {
			valueChange,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "10:2", { valueChange: "10:6" });
	}, 0, $scope0_id, "#text/10", 1, 0, 0, 0, 1);
	const Inner = { content: _content("__tests__/template.marko_3*content", ({ valueChange }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<button class=define>${_escape(valueChange)}</button>${_el_mark($scope3_id, "#button/0")}`);
		_script($scope3_id, "__tests__/template.marko_3_valueChange#0:16");
		_subscribe($valueChange2__closures, _scope($scope3_id, {
			valueChange,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "13:2", { valueChange: "13:17" }), "__tests__/template.marko_3_valueChange#0:16/subscribe");
	}, $scope0_id) };
	Inner.content({ valueChange: "define" });
	_if(() => {
		if (true) {
			const $scope4_id = _scope_id();
			let valueChange = "let";
			_html(`<button class=let>${_escape(valueChange)}</button>${_el_mark($scope4_id, "#button/0")}`);
			_script($scope4_id, "__tests__/template.marko_4_valueChange#0:16");
			_scope($scope4_id, {
				valueChange,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "17:2", { valueChange: "18:8" });
			return 0;
		}
	}, $scope0_id, "#text/12", 1, 0, 0, 0, 1);
	_html(`<button class=renamed-param>renamed</button>${_el_mark($scope0_id, "#button/13")}`);
	_script($scope0_id, "__tests__/template.marko_0_onValue#18");
	_script($scope0_id, "__tests__/template.marko_0_valueChange#16");
	_scope($scope0_id, {
		valueChange,
		onValue,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2),
		"ClosureScopes:valueChange/20": $valueChange2__closures
	}, "__tests__/template.marko", 0, {
		valueChange: "1:17",
		onValue: "2:23"
	});
}, 1);
