// template.marko
_shells({
	a: "a !a3;E l b%;<div><h1> </h1><button class=root>+</button><!></div>",
	a2: "a2 !a0;Db%l ;<p>Seen <!></p><button class=inner>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div><h1>${_text_resume($scope0_id, "a", input.title + " #0")}</h1><button class=root>+</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<p>Seen ${_text_resume($scope1_id, "a", n, 2)}</p><button class=inner>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a0");
			_patch_fill($scope1_id, "va1", n, 1);
			_scope($scope1_id, { c: n });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	_html("</div>");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: input.title,
		h: count
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.title, !_server_guard($scope0_reason, 0));
}, 1);
