// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span id=child>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("b2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {}, $scope1_id, "a");
		_subscribe($show__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), {
		placeholder: attrTag({ content: _content_resume("b0", () => {
			_scope_reason();
			_scope_id();
			_html("<div id=loading>loading</div>");
		}, $scope0_id) }),
		catch: attrTag({ content: _content_resume("b1", (err) => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<div id=error>${_escape(err.message)}${_el_resume($scope3_id, "a", _serialize_guard($scope3_reason, 0))}</div>`);
			_serialize_if($scope3_reason, 0) && writeScope($scope3_id, {});
		}, $scope0_id) })
	});
	_script($scope0_id, "b3");
	writeScope($scope0_id, { Bc: $show__closures });
	_resume_branch($scope0_id);
}, 1);
