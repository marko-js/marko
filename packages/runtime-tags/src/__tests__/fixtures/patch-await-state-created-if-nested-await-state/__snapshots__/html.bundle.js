// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a1: "a1;D ;<b> </b>",
	a2: "a2;D l%;<p> </p><!><!>",
	a: "a !a5; D l%;<button> </button><!><!>",
	a3: "a3;D l%;<p> </p><!><!>",
	a4: "a4 a9;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", Promise.resolve(n), (x) => {
				const $scope2_id = _scope_id();
				let q = Promise.resolve("k");
				_html(`<p>${_text_resume($scope2_id, "a", x)}</p>`);
				_await($scope2_id, "b", q, (y) => {
					const $scope3_id = _scope_id();
					_html(`<b>${_text_resume($scope3_id, "a", y, 1, 0, 0)}</b>`);
					_scope($scope3_id, {});
				}, 1, "a0");
				_scope($scope2_id, {});
			}, 1, "a2", 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a4"], $scope0_reason, 0);
	_script($scope0_id, "a5");
	_scope($scope0_id, { g: n });
}, 1);
