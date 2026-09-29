// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<script${_attrs({
		nonce: $global().cspNonce,
		type: "magic",
		...input.attrs
	}, "#script/0", $scope0_id, "script")}>
  A
<\/script>${_el_resume($scope0_id, "#script/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#3");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "EventAttributes:#script/0": ["...input.attrs", "1:30"] });
}, 1);
