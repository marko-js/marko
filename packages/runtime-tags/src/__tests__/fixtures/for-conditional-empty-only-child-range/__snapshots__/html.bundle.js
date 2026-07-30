// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		{
			id: 0,
			show: true
		},
		{
			id: 1,
			show: false
		},
		{
			id: 2,
			show: true
		}
	];
	_html("<div class=list>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (item.show) {
				const $scope2_id = _scope_id();
				_html(`<p>item <!>${_escape(item.id)}${_el_resume($scope2_id, "a")}</p>`);
				writeScope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", 1, 1, 1, 0, 1);
		writeScope($scope1_id, { e: item?.id });
	}, "id", $scope0_id, "a", 1, 1, 1, "</div>");
	_html(`<button class=rotate>Rotate</button>${_el_resume($scope0_id, "b")}<button class=toggle>Toggle</button>${_el_resume($scope0_id, "c")}<button class=drop>Drop</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { e: items });
	_resume_branch($scope0_id);
}, 1);
