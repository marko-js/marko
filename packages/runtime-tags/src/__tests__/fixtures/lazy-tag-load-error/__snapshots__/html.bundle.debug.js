// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span id=child>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (show) {
				const $scope4_id = _scope_id();
				$Child_withLoadAssets({ value: 1 });
				writeScope($scope4_id, {}, "__tests__/template.marko", "6:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_subscribe($show__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), {
		catch: attrTag({ content: _content_resume("__tests__/template.marko_3_content", (err) => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<div id=error>${_escape(err.message)}${_el_resume($scope3_id, "#text/0", _serialize_guard($scope3_reason, 0))}</div>`);
			_serialize_if($scope3_reason, 0) && writeScope($scope3_id, {}, "__tests__/template.marko", "12:4");
		}, $scope0_id) }),
		placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("<div id=loading>loading</div>");
		}, $scope0_id) })
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { "ClosureScopes:show": $show__closures }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
