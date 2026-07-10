// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let source = {
		item: "i",
		other: "o"
	};
	const { item } = source;
	const { item: $fallback } = source;
	const fallback = void 0 !== $fallback ? $fallback : x * 10;
	const { other: $other } = source;
	const other = void 0 !== $other ? $other : 101;
	const { other: raw } = source;
	_html(`<div id=a>${_escape(String(item))}${_el_resume($scope0_id, "a")}:<!>${_escape(fallback)}${_el_resume($scope0_id, "b")}</div><div id=b>${_escape(other)}${_el_resume($scope0_id, "c")}:<!>${_escape(String(raw))}${_el_resume($scope0_id, "d")}</div><button id=clear>clear</button>${_el_resume($scope0_id, "e")}<button id=inc>inc</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		g: x,
		i: item,
		k: $other
	});
	_resume_branch($scope0_id);
}, 1);
