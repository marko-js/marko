// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			{
				const $scope3_id = _scope_id();
				_await($scope3_id, "a", resolveAfter("loaded", 2), (value) => {
					_scope_id();
					_html(_escape(value));
				}, 0);
				_scope($scope3_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_html("<div>settled</div>");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: show,
		d: $show__closures
	});
	_resume_branch($scope0_id);
}, 1);
