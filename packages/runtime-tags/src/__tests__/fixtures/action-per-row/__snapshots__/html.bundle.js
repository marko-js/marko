// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const act = _act(_resume(function* () {
			yield resolveAfter(item.id);
		}, "a0", $scope1_id));
		_html(`<button>${_text_resume($scope1_id, "b", item.id, $sg__input_items)} ${_text_resume($scope1_id, "c", act.pending ? "pending" : "idle", 2)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_scope($scope1_id, {
			f: item?.id,
			g: act
		});
	}, "id", $scope0_id, "a", $sg__input_items, $sg__input_items, $sg__input_items, 0, 1);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
