// tags/labeled.marko
var labeled_default = _template("__tests__/tags/labeled.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const uid = _id();
	_html(`<label${_attr("for", uid)}>${_text_resume($scope0_id, "#text/1", input.name, $wg__input_name)}</label><input${_attr("id", uid)}>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/labeled.marko", 0);
});

// tags/plain.marko
var plain_default = _template("__tests__/tags/plain.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.name, $wg__input_name)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/plain.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.on ? labeled_default : plain_default, { name: item.key }, 0, 0, $wg__input_items);
		$wi__input_items && _scope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/0", $wg__input_items, $wg__input_items);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const $for_content2__item_key__closures = new Set();
		_dynamic_tag($scope2_id, "#text/0", item.on ? "p" : "div", {}, _content("__tests__/template.marko_3*content", () => {
			const $scope3_id = _scope_id();
			const $scope3_reason = _scope_reason();
			const bodyId = _id();
			_html(`<label${_attr("for", bodyId)}>${_text_resume($scope3_id, "#text/1", item.key, $wg__input_items)}</label><input${_attr("id", bodyId)}>`);
			$wi__input_items && _subscribe($for_content2__item_key__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:6"), "__tests__/template.marko_3_item_key#2:4/subscribe", $wg__input_items);
			$wg__input_items || $wi__input_items && _resume_branch($scope3_id);
		}, $scope2_id), 0, $wg__input_items);
		$wi__input_items && _scope($scope2_id, { "ClosureScopes:item_key/5": $for_content2__item_key__closures }, "__tests__/template.marko", "4:2");
	}, 0, $scope0_id, "#text/1", $wg__input_items, $wg__input_items);
	_for_of(input.items, (item) => {
		const $scope4_id = _scope_id();
		const $for_content3__item_key__closures = new Set();
		_dynamic_tag($scope4_id, "#text/0", item.on ? plain_default : null, { name: item.key }, _content("__tests__/template.marko_5*content", () => {
			const $scope5_id = _scope_id();
			const $scope5_reason = _scope_reason();
			const nullId = _id();
			_html(`<label${_attr("for", nullId)}>${_text_resume($scope5_id, "#text/1", item.key, $wg__input_items)}</label><input${_attr("id", nullId)}>`);
			$wi__input_items && _subscribe($for_content3__item_key__closures, _scope($scope5_id, { _: _scope_with_id($scope4_id) }, "__tests__/template.marko", "8:6"), "__tests__/template.marko_5_item_key#4:4/subscribe", $wg__input_items);
			$wg__input_items || $wi__input_items && _resume_branch($scope5_id);
		}, $scope4_id), 0, $wg__input_items);
		$wi__input_items && _scope($scope4_id, { "ClosureScopes:item_key/6": $for_content3__item_key__closures }, "__tests__/template.marko", "7:2");
	}, 0, $scope0_id, "#text/2", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
