// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
	const other = void 0 !== $other ? $other : x + 100;
	const { other: raw } = source;
	_html(`<div id=a>${_escape(String(item))}${_el_resume($scope0_id, "#text/0")}:<!>${_escape(fallback)}${_el_resume($scope0_id, "#text/1")}</div><div id=b>${_escape(other)}${_el_resume($scope0_id, "#text/2")}:<!>${_escape(String(raw))}${_el_resume($scope0_id, "#text/3")}</div><button id=clear>clear</button>${_el_resume($scope0_id, "#button/4")}<button id=inc>inc</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		x,
		item,
		$other
	}, "__tests__/template.marko", 0, {
		x: "1:6",
		item: "5:10",
		$other: "9:10"
	});
	_resume_branch($scope0_id);
}, 1);
