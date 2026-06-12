// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let shared = input.shared;
	let count = 0;
	_html(`<button${_attr_class(input.label)}>${_escape(input.label)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))}:<!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_input_label_shared_count");
	writeScope($scope0_id, {
		input_label: input.label,
		shared,
		count
	}, "__tests__/child.marko", 0, {
		input_label: ["input.label"],
		shared: "6:6",
		count: "7:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const shared = {
		reordered: 1,
		streamed: 2
	};
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("reordered", 1), (label) => {
			const $scope2_id = _scope_id();
			$Child_withLoadAssets({
				label,
				shared
			});
			_resume_branch($scope2_id);
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_4_content", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_await($scope0_id, "#text/1", resolveAfter("streamed", 2), (label) => {
		const $scope3_id = _scope_id();
		$Child_withLoadAssets({
			label,
			shared
		});
		_resume_branch($scope3_id);
	}, 0);
}, 1);
