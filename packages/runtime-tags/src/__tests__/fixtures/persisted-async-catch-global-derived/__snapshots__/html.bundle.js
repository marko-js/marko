// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $tag__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const tag = `${$global().brand}!`;
	let n = 0;
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", value, $scope0_owned, 0)}${_el_resume($scope3_id, "a")}</em>`);
			writeScope($scope3_id, {});
		}, void 0, "a1", 1);
		$scope0_reason && _subscribe($input_promise__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a3", () => {
		_persisted_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_escape(tag)}${_el_resume($scope2_id, "a")}</p>`);
		_subscribe($scope0_reason && $tag__closures, writeScope($scope2_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope2_id);
	}, $scope0_id) }) }, 1);
	_html(`<button>${_escape(n)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$scope0_reason ? writeScope($scope0_id, {
		g: tag,
		i: n,
		k: $tag__closures,
		j: $input_promise__closures
	}) : _patch_value($scope0_id, "a0", tag);
	_resume_branch($scope0_id);
}, 1, 1);
