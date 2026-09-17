// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const act = _act(_resume(function* () {
			yield resolveAfter(item.id);
		}, "__tests__/template.marko_1/act", $scope1_id));
		_html(`<button>${_text_resume($scope1_id, "#text/1", item.id, $sg__input_items)} ${_text_resume($scope1_id, "#text/2", act.pending ? "pending" : "idle", 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			item_id: item?.id,
			act
		}, "__tests__/template.marko", "2:2", {
			item_id: ["item.id", "2:6"],
			act: "3:11"
		});
	}, "id", $scope0_id, "#text/0", $sg__input_items, $sg__input_items, $sg__input_items, 0, 1);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
