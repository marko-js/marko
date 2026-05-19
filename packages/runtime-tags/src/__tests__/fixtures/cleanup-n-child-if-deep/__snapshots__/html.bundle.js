// tags/child.marko
var child_default = _template("b", (input) => {
	const $sg__input_name = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const { name, write } = input;
	_html(`<div>${_escape(name)}${_el_resume($scope0_id, "a", $sg__input_name)} a</div><span>${_escape(name)}${_el_resume($scope0_id, "b", $sg__input_name)} a</span><p>${_escape(name)}${_el_resume($scope0_id, "c", $sg__input_name)} a</p>`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		f: name,
		g: write
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $showInner__closures = /* @__PURE__ */ new Set();
	let showOuter = true;
	let showMiddle = true;
	let showInner = true;
	const write = _resume(function(msg) {
		((el) => el())(_el_read_error).innerHTML += "\n" + msg;
	}, "a0", $scope0_id);
	_html(`<button id=outer>Toggle Outer</button>${_el_resume($scope0_id, "a")}<button id=middle>Toggle Middle</button>${_el_resume($scope0_id, "b")}<button id=inner>Toggle Inner</button>${_el_resume($scope0_id, "c")}<pre></pre>${_el_resume($scope0_id, "d")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<div>");
			child_default({
				write,
				name: "Outer"
			});
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_html("<div>");
					child_default({
						write,
						name: "Middle"
					});
					_if(() => {
						{
							const $scope3_id = _scope_id();
							child_default({
								write,
								name: "Inner"
							});
							writeScope($scope3_id, { _: _scope_with_id($scope2_id) });
							return 0;
						}
					}, $scope2_id, "b");
					_html("</div>");
					_subscribe($showInner__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
					return 0;
				}
			}, $scope1_id, "b", 1, 1, 1, 0, 1);
			_html("</div>");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "e", 1, 1, 1, 0, 1);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		f: showOuter,
		g: showMiddle,
		h: showInner,
		i: write,
		Bh: $showInner__closures
	});
	_resume_branch($scope0_id);
}, 1);
