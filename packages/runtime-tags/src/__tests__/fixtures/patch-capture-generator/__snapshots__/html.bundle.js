// template.marko
_shells({ a: "a !a0;D%c%l ;<p><!> <!></p><button>go</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)} ${_text_resume($scope0_id, "b", "none", 2)}</p><button>go</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: input.items }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "wg", input.items, !_server_guard($scope0_reason, 1));
}, 1);
