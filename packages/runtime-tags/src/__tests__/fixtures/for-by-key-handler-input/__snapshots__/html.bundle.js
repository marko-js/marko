// tags/dismiss-button.marko
var dismiss_button_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "b", input.label, _write_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.onDismiss });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forOf([{ id: "a" }, { id: "b" }], (item) => {
		const $scope1_id = _scope_id();
		dismiss_button_default({
			label: item.id,
			onDismiss: _resume(function() {
				document.getElementById("log").textContent = item.id;
			}, "a0", $scope1_id)
		});
		_scope($scope1_id, { M: item?.id });
	});
	_html("<div id=log></div>");
}, 1);
