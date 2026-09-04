// template.marko
_shells({
	a: "a;E lDb%l%;<main><h1> </h1><p>Last <!></p><!></main>",
	a1: "a1 !a2;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h1><p>Last ${_text_resume($scope0_id, "b", last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a2");
			_patch_value($scope1_id, "a0", count, 1);
			_patch_bind($scope1_id, "d", _resume(function(next) {
				last = next;
			}, "a0", $scope1_id) || void 0);
			_scope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: _resume(function(next) {
					last = next;
				}, "a0", $scope1_id) || void 0
			});
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"], $scope0_owned, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {});
}, 1, 0);
