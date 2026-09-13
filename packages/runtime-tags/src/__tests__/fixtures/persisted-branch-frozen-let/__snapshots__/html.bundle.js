// template.marko
_shells({
	a: "a !a1;D%b ;<main><!><button>+</button></main>",
	a0: "a0;D ;<p> </p>"
});
var template_default = _template_persisted("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 0, 0, void 0, void 0, ["a0"]);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {});
}, 1, 0);
