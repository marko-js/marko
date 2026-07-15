// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Home = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Editor = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		let text = "draft";
		_html(`<input${_attr_input_value($scope2_id, "#input/0", text, _resume((_new_text) => {
			text = _new_text;
		}, "__tests__/template.marko_2/valueChange", $scope2_id))} class=field>${_el_resume($scope2_id, "#input/0")}<output class=echo>${_escape(text)}${_el_resume($scope2_id, "#text/1")}</output>`);
		_script($scope2_id, "__tests__/template.marko_2");
		writeScope($scope2_id, {}, "__tests__/template.marko", "7:2");
		_resume_branch($scope2_id);
	}) };
	_dynamic_tag($scope0_id, "#text/2", $global().view === "editor" ? Editor : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
