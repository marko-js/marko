// template.marko
_shells({ a: "a; ;<output></output>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const item = { t: input.title };
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a0", 1, $fg__input_title);
	_scope($scope0_id, { e: item }) || $fg__input_title && _patch_write($scope0_id, "xe", item, !_server_guard($scope0_reason, 0));
}, 1);
