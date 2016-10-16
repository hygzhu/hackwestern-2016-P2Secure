

export class ProductModel {

        productName: string;
        collateralAmount: number;
        borrowingFeeAmount: number;
        dueDate: string;
        borrowerWallet: string;
        lenderWallet: string;

constructor(
        productName: string,
        collateralAmount: number,
        borrowingFeeAmount: number,
        dueDate: string,
        borrowerWallet: string,
        lenderWallet: string
       ) {
        this.productName = productName;
        this.collateralAmount = collateralAmount ;
        this.borrowingFeeAmount = borrowingFeeAmount;
        this.dueDate= dueDate;
        this.borrowerWallet= borrowerWallet;
        this.lenderWallet = lenderWallet;
    }

} 
