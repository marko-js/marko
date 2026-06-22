// tags/child.marko
function $_return($scope) {
	return () => (html) => $scope.a.innerHTML = html;
}
_resume("b0", $_return);

// template.marko
const $setHtml3_getter = _hoist_resume("a0", 2, "Aa", "Ac");
const $setHtml2_getter = _hoist(2, "Ab");
const $setHtml_getter = _hoist(2, "Aa");
const $setup__script = _script("a1", ($scope) => {
	$setHtml_getter($scope)()("First Only");
	$setHtml2_getter($scope)()("First Only");
	{
		let i = 0;
		for (const fn of $setHtml3_getter($scope)) fn(`All (${i++})`);
	}
});
