import * as express from 'express';
import * as EventEmitter from 'events';
import { ProductModel } from '../models/product.server.model';
import { ProductRepository} from '../repositories/product.repository'


export class ProductController {

    ProductRepo: ProductRepository

    constructor() {
        this.ProductRepo = new ProductRepository();
    }

     createProduct(req: express.Request, res: express.Response) { //create function we will use to save form data to mongodb with

        var productModel: ProductModel = new ProductModel(
            req.body.productName,
            req.body.collateralAmount,
            req.body.borrowingFeeAmount,
            req.body.dueDate,
            req.body.borrowWallet,
            req.body.lenderWallet)
            console.log("Before await in create productModel");
        
        var promise =  this.ProductRepo.createNewProduct(productModel);
        console.log(promise);

        //promise.then()
        promise.then(function(info){
            console.log(info);
            res.json({ info: "Success in adding product" });
        }).catch(function(err){
            res.json({error: err});
        });
        
    } //Lets use postman to test this

/*
exports.getPostsOfUser = function(req:express.Request, res: express.Response){

    var promise  = repository.getPostsOfUser(req.params.productName);
    promise.then(function(snapshot) {
  // The Promise was "fulfilled" (it succeeded).
  res.json(snapshot.val());
}, function(error) {
  // The Promise was rejected.
  res.json(error);
});
}*/


     getProducts(req: express.Request, res: express.Response) {
         var promise = this.ProductRepo.getAllProducts();
         promise.then(
             function (results) {
                 res.json(results);
             }).catch(function (err) {
                 res.json({ error: err });
             });
     }






     

}
