// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let label = "Likes";
	let disabled = false;
	_html(`<probe-badge${_attr("label", label)}${_attr("count", count)}${_attr("disabled", disabled)}><span>${_text_resume($scope0_id, "b", label)} on this post</span></probe-badge>${_el_resume($scope0_id, "a")}<output>${_text_resume($scope0_id, "c", count)}</output><button id=reset>Reset</button>${_el_resume($scope0_id, "d")}<button id=toggle>Toggle disabled</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { h: disabled });
});
