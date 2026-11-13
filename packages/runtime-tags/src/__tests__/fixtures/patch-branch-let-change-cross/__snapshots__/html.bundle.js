// template.marko
_shells({
	a: "a;E lDb%l%;<main><h1> </h1><p>Last <!></p><!></main>",
	a3: "a3 a5!a1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	let handler = _resume((next) => {
		last = next;
	}, "a0", $scope0_id);
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1><p>Last ${_text_mark($scope0_id, "b", last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_mark($scope1_id, "a", count, 2)}</span><button>+</button>${_el_mark($scope1_id, "b")}`);
			_script($scope1_id, "a1");
			const $countChange = handler || void 0;
			_patch_fill($scope1_id, "va2", count, 1);
			_patch_bind($scope1_id, "wd", $countChange);
			_scope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a3"], $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, { i: _write_if($scope0_reason, 1) && handler });
}, 1);
