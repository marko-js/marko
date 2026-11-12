// template.marko
_shells({ a: "a !a1;D ;<p> </p>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_text_mark($scope0_id, "a", JSON.stringify($global$1.meta), 1, 4, 0)}</p>`);
	_fill_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
