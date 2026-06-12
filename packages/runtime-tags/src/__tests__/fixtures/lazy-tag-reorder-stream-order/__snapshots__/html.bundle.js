// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let shared = input.shared;
	let count = 0;
	_html(`<button${_attr_class(input.label)}>${_escape(input.label)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))}:<!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		g: input.label,
		h: shared,
		i: count
	});
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const shared = {
		reordered: 1,
		streamed: 2
	};
	_try($scope0_id, "a", _content_resume("b1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("reordered", 1), (label) => {
			const $scope2_id = _scope_id();
			$Child_withLoadAssets({
				label,
				shared
			});
			_resume_branch($scope2_id);
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("b0", () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_await($scope0_id, "b", resolveAfter("streamed", 2), (label) => {
		const $scope3_id = _scope_id();
		$Child_withLoadAssets({
			label,
			shared
		});
		_resume_branch($scope3_id);
	}, 0);
}, 1);
