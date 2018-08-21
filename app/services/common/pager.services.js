"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("underscore");
var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 15; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        // if (totalPages <= 10) {
        //     // less than 10 total pages so show all
        //     startPage = 1;
        //     endPage = totalPages;
        // } else {
        //     // more than 10 total pages so calculate start and end pages
        //     if (currentPage <= 6) {
        //         startPage = 1;
        //         endPage = 10;
        //     } else if (currentPage + 4 >= totalPages) {
        //         startPage = totalPages - 9;
        //         endPage = totalPages;
        //     } else {
        //         startPage = currentPage - 5;
        //         endPage = currentPage + 4;
        //     }
        // }
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            }
            else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = _.range(startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());
exports.PagerService = PagerService;
//# sourceMappingURL=pager.services.js.map