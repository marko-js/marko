// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [
		{
			id: 1,
			on: true
		},
		{
			id: 2,
			on: false
		},
		{
			id: 3,
			on: true
		}
	];
	_html("<div>");
	_for_of(list, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (item.on) {
				const $scope2_id = _scope_id();
				_html(`<span>A<!>${_escape(item.id)}${_el_resume($scope2_id, "a")}</span>`);
				writeScope($scope2_id, {});
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(`<b>B<!>${_escape(item.id)}${_el_resume($scope3_id, "a")}</b>`);
				writeScope($scope3_id, {});
				return 1;
			}
		}, $scope1_id, "a", 1, 1, 1, 0, 1);
		writeScope($scope1_id, { e: item?.id });
	}, "id", $scope0_id, "a", 1, 1, 1, "</div>");
	_html(`<button>rot</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: list?.[2],
		e: list?.[0],
		f: list?.[1]
	});
	_resume_branch($scope0_id);
}, 1);
