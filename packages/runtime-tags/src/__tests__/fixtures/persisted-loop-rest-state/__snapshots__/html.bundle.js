// template.marko
_shells({
	a: "a !a2;D%b ;<main><!><button>+</button></main>",
	a0: "a0 a4;D ;<p> </p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_for_of(input.items, ({ id, ...rest }) => {
		const $scope1_id = _scope_id();
		_owned_guard($scope0_owned, 0) ? _patch_value($scope1_id, "a0", id) : _patch_init($scope1_id, "a1");
		_owned_guard($scope0_owned, 0) ? _patch_value($scope1_id, "a1", rest) : _patch_init($scope1_id, "a1");
		_html(`<p>${_escape(id + ":" + Object.keys(rest).join("+") + "#0")}${_el_resume($scope1_id, "a")}</p>`);
		writeScope($scope1_id, {
			d: id,
			e: rest,
			_: _scope_with_id($scope0_id)
		});
	}, (item) => item.id, $scope0_id, "a", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, "a0");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && writeScope($scope0_id, { f: count });
	_resume_branch($scope0_id);
}, 1, 0);
