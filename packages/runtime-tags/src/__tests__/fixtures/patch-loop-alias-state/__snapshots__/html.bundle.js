// template.marko
_shells({
	a: "a !a3;D%b ;<main><!><button>+</button></main>",
	a2: "a2 a5;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "va0", item.name);
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "va1", item.id);
		_html(`<p>${_text_resume($scope1_id, "a", item.name + "/" + item.id + "#0")}</p>`);
		_scope($scope1_id, {
			d: item.name,
			e: item.id,
			_: _scope_with_id($scope0_id)
		});
	}, (item) => item.id, $scope0_id, "a", 1, 1, 1, 0, 0, "a2", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	_scope($scope0_id, { f: count });
}, 1);
