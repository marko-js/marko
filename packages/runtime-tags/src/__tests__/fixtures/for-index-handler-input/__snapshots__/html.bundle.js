// tags/dismiss-button.marko
var dismiss_button_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_mark($scope0_id, "b", input.label, _write_guard($scope0_reason, 0))}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.onDismiss });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = ["a", "b"];
	_html(`<button class=add>add</button>${_el_mark($scope0_id, "a")}`);
	_for_of(items, (item, i) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		dismiss_button_default({
			label: item,
			onDismiss: _resume(function() {
				document.getElementById("log").textContent = i;
			}, "a0", $scope1_id)
		});
		_scope($scope1_id, {
			M: i,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html("<div id=log></div>");
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: items });
}, 1);
