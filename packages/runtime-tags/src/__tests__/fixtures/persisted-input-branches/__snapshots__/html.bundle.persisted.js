// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_items = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div class=wrap><h1>Hello <!>${_escape(input.name)}${_el_resume($scope0_id, "a")}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>shown</p>");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, _serialize_guard($scope0_reason, 1), 0, 1);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_escape(item)}${_el_resume($scope2_id, "a")}</li>`);
		writeScope($scope2_id, { c: $si__input_items && item });
	}, 0, $scope0_id, "c", 1, 1, _serialize_guard($scope0_reason, 2), 0, 1);
	_html("</div>");
	writeScope($scope0_id, {
		f: _serialize_if($scope0_reason, 0) && input.name,
		g: _serialize_if($scope0_reason, 1) && input.show,
		h: $si__input_items && input.items
	});
}, 1);
