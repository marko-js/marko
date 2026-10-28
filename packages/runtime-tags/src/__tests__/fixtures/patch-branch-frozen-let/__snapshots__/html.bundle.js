// template.marko
_shells({
	a: "a !a2;D%b ;<main><!><button>+</button></main>",
	a1: "a1;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 0, 1, 0, 0, ["a1"], 0, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {});
}, 1);
