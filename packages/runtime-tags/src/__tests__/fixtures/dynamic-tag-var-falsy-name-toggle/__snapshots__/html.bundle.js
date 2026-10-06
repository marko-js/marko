// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let label = "Close";
	const $labelbutton_scope = _peek_scope_id();
	let btn = _dynamic_tag($scope0_id, "a", "button", { "aria-label": label }, _content("a0", () => {
		_scope_id();
		_scope_reason();
		_html("content");
	}, $scope0_id));
	_var($scope0_id, "b", $labelbutton_scope, "a1");
	const $labelspan_scope = _peek_scope_id();
	let value = _dynamic_tag($scope0_id, "c", "span", {}, _content("a2", () => {
		_scope_id();
		_scope_reason();
		return 1;
	}, $scope0_id));
	_var($scope0_id, "d", $labelspan_scope, "a3");
	const $labelspan_scope2 = _peek_scope_id();
	let other = _dynamic_tag($scope0_id, "e", false, {});
	_var($scope0_id, "f", $labelspan_scope2, "a4");
	_html(`<p>${_text_resume($scope0_id, "g", typeof btn)} ${_text_resume($scope0_id, "h", typeof value, 2)} ${_text_resume($scope0_id, "i", typeof other, 2)}</p><input${_attr_input_value($scope0_id, "j", label)}>${_el_resume($scope0_id, "j")}<button id=toggle></button>${_el_resume($scope0_id, "k")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, { l: label });
}, 1);
