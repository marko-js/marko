// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	forOf([0, 0], (outer) => {
		const $scope1_id = _scope_id();
		let l = [
			{ name: "a" },
			{ name: "b" },
			{ name: "c" }
		];
		let short = false;
		_for_to(l.length - 1, 0, 1, (i) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_mark($scope2_id, "a", l[i].name)}</span>`);
			_scope($scope2_id, { M: i });
		}, 0, $scope1_id, "a", 1, 1, 0, 0, 1);
		_html(`<button>go</button>${_el_mark($scope1_id, "b")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			d: outer,
			e: l,
			f: l?.length,
			g: short
		});
	});
}, 1);
