// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "a0");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", _content_resume("b1", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_await($scope2_id, "a", resolveAfter(1, 1), () => {
					_scope_id();
					$Child_withLoadAssets({ value: 1 });
				}, 0);
			}, $scope1_id), { placeholder: attrTag({ content: _content_resume("b0", () => {
				_scope_reason();
				_scope_id();
				_html("loading");
			}, $scope1_id) }) });
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b2");
	writeScope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1);
