// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [1, 2];
	let open = true;
	const show = list.length > 1;
	_html(`<p>${_text_resume($scope0_id, "a", show ? list.join() : "none")}</p>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "a", list.length)}</span>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`<button class=same-length></button>${_el_resume($scope0_id, "c")}<button class=toggle></button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: list,
		f: list?.length,
		g: open,
		h: show
	});
}, 1);
