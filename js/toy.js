define(["require", "exports", "./toyCategory"], function (require, exports, toyCategory) {
    "use strict";
    var Initial = (function () {
        function Initial() {
            this.name = "Please select a toy";
        }
        return Initial;
    }());
    exports.Initial = Initial;
    var toyTruck = (function () {
        function toyTruck() {
            this.name = "Mater";
            this.toyCategory = new toyCategory.DisneyCarCategory();
        }
        return toyTruck;
    }());
    exports.toyTruck = toyTruck;
});
//# sourceMappingURL=toy.js.map