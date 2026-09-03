// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		{
			id: 0,
			code: false
		},
		{
			id: 1,
			code: true
		},
		{
			id: 2,
			code: false
		}
	];
	_html("<div class=list>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (item.code) {
				const $scope2_id = _scope_id();
				_html(`<pre>code ${_text_resume($scope2_id, "a", item.id, 2)}</pre>`);
				_scope($scope2_id, {});
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html(`<p>text ${_text_resume($scope3_id, "a", item.id, 2)}</p>`);
				_scope($scope3_id, {});
				return 1;
			}
		}, $scope1_id, "a", 1, 1, 1, 0, 1);
		_scope($scope1_id, { e: item?.id });
	}, "id", $scope0_id, "a", 1, 1, 1, "</div>");
	_html(`<button class=rotate>Rotate</button>${_el_resume($scope0_id, "b")}<button class=toggle>Toggle</button>${_el_resume($scope0_id, "c")}<button class=drop>Drop</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: items });
}, 1);
