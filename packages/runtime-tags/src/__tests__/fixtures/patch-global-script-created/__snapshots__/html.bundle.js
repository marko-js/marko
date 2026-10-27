// tags/logger.marko
_shells({ b: "b !b0,<div></div>" });
var logger_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$global();
	_html("<div></div>");
	_script($scope0_id, "b0", 0);
});

// template.marko
_shells({ a: "a !a0; b%;<button>t</button><!><!>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: show });
}, 1);
