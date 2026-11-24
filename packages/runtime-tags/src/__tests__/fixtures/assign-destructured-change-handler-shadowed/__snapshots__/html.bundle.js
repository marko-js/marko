// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "v";
	return {
		value,
		valueChange: _resume(function(next) {
			value = next;
		}, "b0", $scope0_id)
	};
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $valueChange2__closures = /* @__PURE__ */ new Set();
	const $childScope = _peek_scope_id();
	let { value, valueChange } = child_default({});
	_var($scope0_id, "b", $childScope, "a0");
	const $childScope2 = _peek_scope_id();
	let { valueChange: onValue, value: renamed } = child_default({});
	_var($scope0_id, "d", $childScope2, "a1");
	_html(`<div class=value>${_text_mark($scope0_id, "e", value)} ${_text_mark($scope0_id, "f", typeof valueChange, 2)}</div><div class=renamed>${_text_mark($scope0_id, "g", renamed)} ${_text_mark($scope0_id, "h", typeof onValue, 2)}</div><button class=param>param</button>${_el_mark($scope0_id, "i")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			const valueChange = "const";
			_html(`<button class=const>${_escape(valueChange)}</button>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a2");
			_scope($scope1_id, {
				c: valueChange,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "j", 1, 0, 0, 0, 1);
	_for_of(["for"], (valueChange) => {
		const $scope2_id = _scope_id();
		_html(`<button class=for>${_escape(valueChange)}</button>${_el_mark($scope2_id, "a")}`);
		_script($scope2_id, "a3");
		_scope($scope2_id, {
			d: valueChange,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "k", 1, 0, 0, 0, 1);
	({ content: _content("a4", ({ valueChange }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<button class=define>${_escape(valueChange)}</button>${_el_mark($scope3_id, "a")}`);
		_script($scope3_id, "a5");
		_subscribe($valueChange2__closures, _scope($scope3_id, {
			e: valueChange,
			_: _scope_with_id($scope0_id)
		}), "a6");
	}, $scope0_id) }).content({ valueChange: "define" });
	_if(() => {
		{
			const $scope4_id = _scope_id();
			let valueChange = "let";
			_html(`<button class=let>${_escape(valueChange)}</button>${_el_mark($scope4_id, "a")}`);
			_script($scope4_id, "a7");
			_scope($scope4_id, {
				c: valueChange,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "m", 1, 0, 0, 0, 1);
	_html(`<button class=renamed-param>renamed</button>${_el_mark($scope0_id, "n")}`);
	_script($scope0_id, "a8");
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		q: valueChange,
		s: onValue,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2),
		u: $valueChange2__closures
	});
}, 1);
