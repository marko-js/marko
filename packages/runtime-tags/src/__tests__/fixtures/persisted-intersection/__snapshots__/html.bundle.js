// template.marko
_shells({ a: "a !a0;E lD l ;<div><h1> </h1><h2> </h2><button>+</button></div>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	let other = 10;
	_html(`<div><h1>${_text_resume($scope0_id, "a", input.title + " #0")}</h1><h2>${_text_resume($scope0_id, "b", input.title + " / 10")}</h2><button>+</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		f: input.title,
		g: count,
		i: other
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.title);
}, 1, 0);
