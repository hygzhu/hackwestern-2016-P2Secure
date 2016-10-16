"use strict";
var UserModel = (function () {
    function UserModel(productName, collateralAmount, borrowingFeeAmount, dueDate, borrowerWallet, lenderWallet) {
        this.productName = productName;
        this.collateralAmount = collateralAmount;
        this.borrowingFeeAmount = borrowingFeeAmount;
        this.dueDate = dueDate;
        this.borrowerWallet = borrowerWallet;
        this.lenderWallet = lenderWallet;
    }
    return UserModel;
}());
exports.UserModel = UserModel;
