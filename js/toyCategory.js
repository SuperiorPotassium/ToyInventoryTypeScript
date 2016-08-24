var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ToyCategory = (function () {
        function ToyCategory() {
            this.imgPath = "img/";
        }
        return ToyCategory;
    }());
    exports.ToyCategory = ToyCategory;
    var DisneyCarCategory = (function (_super) {
        __extends(DisneyCarCategory, _super);
        function DisneyCarCategory() {
            _super.apply(this, arguments);
            this.name = "Disney Cars";
        }
        DisneyCarCategory.prototype.getImageUrl = function () {
            return this.imgPath + ".png";
        };
        return DisneyCarCategory;
    }(ToyCategory));
    exports.DisneyCarCategory = DisneyCarCategory;
    var AnimalsCategory = (function (_super) {
        __extends(AnimalsCategory, _super);
        function AnimalsCategory() {
            _super.apply(this, arguments);
            this.name = "Toy Animals";
        }
        AnimalsCategory.prototype.getImageUrl = function () {
            return this.imgPath + ".png";
        };
        return AnimalsCategory;
    }(ToyCategory));
    exports.AnimalsCategory = AnimalsCategory;
    var TeenageMutantNinjaTurtlesCategory = (function (_super) {
        __extends(TeenageMutantNinjaTurtlesCategory, _super);
        function TeenageMutantNinjaTurtlesCategory() {
            _super.apply(this, arguments);
            this.name = "Teenage Mutant Ninja Turtles";
        }
        TeenageMutantNinjaTurtlesCategory.prototype.getImageUrl = function () {
            return this.imgPath + ".png";
        };
        return TeenageMutantNinjaTurtlesCategory;
    }(ToyCategory));
    exports.TeenageMutantNinjaTurtlesCategory = TeenageMutantNinjaTurtlesCategory;
});
//# sourceMappingURL=toyCategory.js.map