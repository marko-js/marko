// template.marko
_shells({
	a: "a !a1;D%b ;<main><!><button>+</button></main>",
	a0: "a0 a3;Db%;<p>Seen <!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>Seen ${_text_resume($scope1_id, "a", 1, 2)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a0"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { f: count });
}, 1);
