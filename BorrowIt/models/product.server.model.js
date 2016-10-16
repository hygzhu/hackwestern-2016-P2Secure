"use strict";
var ProductModel = (function () {
    function ProductModel(productName, collateralAmount, borrowingFeeAmount, dueDate, borrowerWallet, lenderWallet) {
        this.productName = productName;
        this.collateralAmount = collateralAmount;
        this.borrowingFeeAmount = borrowingFeeAmount;
        this.dueDate = dueDate;
        this.borrowerWallet = borrowerWallet;
        this.lenderWallet = lenderWallet;
    }
    return ProductModel;
}());
exports.ProductModel = ProductModel;
