// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let label = "Likes";
	let disabled = false;
	_html(`<probe-badge${_attr("label", label)}${_attr("count", count)}${_attr("disabled", disabled)}><span>${_text_resume($scope0_id, "#text/1", label)} on this post</span></probe-badge>${_el_resume($scope0_id, "#probe-badge/0")}<output>${_text_resume($scope0_id, "#text/2", count)}</output><button id=reset>Reset</button>${_el_resume($scope0_id, "#button/3")}<button id=toggle>Toggle disabled</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { disabled }, "__tests__/template.marko", 0, { disabled: "3:6" });
});
