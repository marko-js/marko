// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div${_attr_class(`c${count}`)}>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "a", count)}</span>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html(`<ul${_attr_class(`c${count}`)}>`);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_text_resume($scope2_id, "a", item, _write_guard($scope0_reason, 1))}:${_text_resume($scope2_id, "b", count, 2)}</li>`);
		_scope($scope2_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_html(`<p${_attr_class(`c${count}`)}>`);
	const $show = input.show;
	_show_start($show, 0);
	_html(`<b>${_text_resume($scope0_id, "d", count)}</b>`);
	_show_end($scope0_id, "c", $show, 1, 1, "</p>", 1);
	_for_until(count, 0, 1, (x) => {
		const $scope3_id = _scope_id();
		_html("x");
		_scope($scope3_id, {});
	}, 0, $scope0_id, "e");
	_html(`<button>inc</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { k: count });
}, 1);
