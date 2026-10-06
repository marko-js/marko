// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let label = "Close";
	const $labelbutton_scope = _peek_scope_id();
	let btn = _dynamic_tag($scope0_id, "#text/0", label && "button", { "aria-label": label }, _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("content");
	}, $scope0_id));
	_var($scope0_id, "#scopeOffset/1", $labelbutton_scope, "__tests__/template.marko_0_btn#12/var");
	const $labelspan_scope = _peek_scope_id();
	let value = _dynamic_tag($scope0_id, "#text/2", label && "span", {}, _content("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		const $return = 1;
		return $return;
	}, $scope0_id));
	_var($scope0_id, "#scopeOffset/3", $labelspan_scope, "__tests__/template.marko_0_value#13/var");
	const $labelspan_scope2 = _peek_scope_id();
	let other = _dynamic_tag($scope0_id, "#text/4", !label && "span", {});
	_var($scope0_id, "#scopeOffset/5", $labelspan_scope2, "__tests__/template.marko_0_other#14/var");
	_html(`<p>${_text_resume($scope0_id, "#text/6", typeof btn)} ${_text_resume($scope0_id, "#text/7", typeof value, 2)} ${_text_resume($scope0_id, "#text/8", typeof other, 2)}</p><input${_attr_input_value($scope0_id, "#input/9", label)}>${_el_resume($scope0_id, "#input/9")}<button id=toggle></button>${_el_resume($scope0_id, "#button/10")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { label }, "__tests__/template.marko", 0, { label: "1:6" });
}, 1);
