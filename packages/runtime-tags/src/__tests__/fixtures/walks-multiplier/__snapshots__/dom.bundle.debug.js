// template.marko
const $template = "<button>inc <!></button><div><i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i><i>10</i><i>11</i><i>12</i><i>13</i><i>14</i><i>15</i><i>16</i><i>17</i><i>18</i><i>19</i><i>20</i><i>21</i><i>22</i><i>23</i><i>24</i><b> </b><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><u><i>x</i></u><s> </s></div>";
const $walks = " Db%lDwfD lvcD m";
const $n = /* @__PURE__ */ _let("n/4", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_text($scope["#text/2"], $scope.n);
	_text($scope["#text/3"], $scope.n + 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
