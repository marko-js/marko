// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a2", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Editor = { content: _content("a3", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		let text = "draft";
		_html(`<input${_attr_input_value($scope2_id, "a", text, _resume((_new_text) => {
			text = _new_text;
		}, "a0", $scope2_id))} class=field>${_el_resume($scope2_id, "a")}<output class=echo>${_escape(text)}${_el_resume($scope2_id, "b")}</output>`);
		_script($scope2_id, "a5");
		writeScope($scope2_id, {});
		_resume_branch($scope2_id);
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "editor" ? Editor : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a1");
	_script($scope0_id, "a6");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
