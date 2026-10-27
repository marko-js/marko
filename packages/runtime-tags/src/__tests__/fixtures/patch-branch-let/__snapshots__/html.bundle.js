// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a2: "a2 !a0;Db%l ;<p>Seen <!></p><button>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<p>Seen ${_text_resume($scope1_id, "a", count, 2)}</p><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_patch_fill($scope1_id, "va1", count, 1);
			_scope($scope1_id, { c: count });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, {});
}, 1);
