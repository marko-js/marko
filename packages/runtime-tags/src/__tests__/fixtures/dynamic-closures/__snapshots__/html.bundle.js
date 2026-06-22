// tags/custom-tag.marko
var custom_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const a = 1;
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $c__closures = /* @__PURE__ */ new Set();
	let c = 3;
	_html(`<button></button>${_el_resume($scope0_id, "a")}`);
	custom_tag_default({ content: _content("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`${_escape(a)} 2 <!>${_escape(c)}${_el_resume($scope1_id, "b")}`);
		_subscribe($c__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}) });
	_html("<div>");
	if (Math.random()) {
		const $scope2_id = _scope_id();
		if (Math.random()) {
			const $scope3_id = _scope_id();
			_html(`${_escape(a)} 2 <!>${_escape(c)}${_el_resume($scope3_id, "b")}`);
			_subscribe($c__closures, writeScope($scope3_id, {
				_: _scope_with_id($scope2_id),
				Ce: 1
			}));
		}
		writeScope($scope2_id, { _: _scope_with_id($scope0_id) });
	}
	_html("</div>");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { Be: $c__closures });
	_resume_branch($scope0_id);
}, 1);
