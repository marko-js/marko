// template.marko
_shells({ a: "a !a1; ;<button>run</button>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$global();
	_html(`<button>run</button>${_el_mark($scope0_id, "a")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
