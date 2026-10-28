// template.marko
_shells({
	a: "a !a2;b%b ;<!><!><button>+</button>",
	a1: "a1 a4 a5;D%c%;<p><!>:<!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<p>${_text_resume($scope1_id, "a", n, 1, 0, 0)}:${_text_resume($scope1_id, "b", count, 2)}</p>`);
			_script($scope1_id, "a0");
			_patch_write($scope1_id, "wc", n, 1);
			_scope($scope1_id, {
				c: n,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { f: count });
}, 1);
