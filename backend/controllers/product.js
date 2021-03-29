/**
 * @author: Sakhr Al-absi
 * @Gruppe: 6
 * @Matrikelnummer: s0562218
 */

 const formidable = require("formidable");
 const _ = require("lodash");
 const fs = require("fs");
 const Product = require("../models/product");
 const { errorHandler } = require("../helpers/dbErrorHandler");
 
 exports.productById = (req, res, next, id) => {
     Product.findById(id)
         .populate("category")
         .exec((err, product) => {
             if (err || !product) {
                 return res.status(400).json({
                     error: "Produkt wurde nicht gefunden"
                 });
             }
             req.product = product;
             next();
         });
 };
 
 exports.read = (req, res) => {
     req.product.photo = undefined;
     return res.json(req.product);
 };
 
 exports.create = (req, res) => {
     let form = new formidable.IncomingForm();
     form.keepExtensions = true;
     form.parse(req, (err, fields, files) => {
         if (err) {
             return res.status(400).json({
                 error: "Bild konnte nicht hochgeladen werden"
             });
         }
         // Alle fields checken
         const {
             name,
             description,
             price,
             category,
             quantity,
             shipping
         } = fields;
 
         if (
             !name ||
             !description || // man kann ja auf description vernachlässigen
             !price ||
             !category ||
             !quantity ||
             !shipping
         ) {
             return res.status(400).json({
                 error: "Alle Fielden sind nötig"
             });
         }
 
         let product = new Product(fields);
 
         // 1kb = 1000
         // 1mb = 1000000
 
         if (files.photo) {
             if (files.photo.size > 1000000) {
                 return res.status(400).json({
                     error: "Bild sollte eine Größe weniger als 1 mb haben"
                 });
             }
             product.photo.data = fs.readFileSync(files.photo.path);
             product.photo.contentType = files.photo.type;
         }
 
         product.save((err, result) => {
             if (err) {
                 return res.status(400).json({
                     error: errorHandler(err)
                 });
             }
             res.json(result);
         });
     });
 };
 
 exports.remove = (req, res) => {
     let product = req.product;
     product.remove((err, deletedProduct) => {
         if (err) {
             return res.status(400).json({
                 error: errorHandler(err)
             });
         }
         res.json({
             message: "Produkt wurde mit Erfolg gelöscht"
         });
     });
 };
 
 exports.update = (req, res) => {
     let form = new formidable.IncomingForm();
     form.keepExtensions = true;
     form.parse(req, (err, fields, files) => {
         if (err) {
             return res.status(400).json({
                 error: "Bild konnte nicht hochgeladen werden"
             });
         }
         // Alle fielde checken
         const {
             name,
             description,
             price,
             category,
             quantity,
             shipping
         } = fields;
 
         if (
             !name ||
             !description ||
             !price ||
             !category ||
             !quantity ||
             !shipping
         ) {
             return res.status(400).json({
                 error: "Alle Fielde sind nötig"
             });
         }
 
         let product = req.product;
         product = _.extend(product, fields);
 
         // 1kb = 1000
         // 1mb = 1000000
 
         if (files.photo) {
             if (files.photo.size > 1000000) {
                 return res.status(400).json({
                     error: "Bild sollte eine Größe weniger als 1 mb haben"
                 });
             }
             product.photo.data = fs.readFileSync(files.photo.path);
             product.photo.contentType = files.photo.type;
         }
 
         product.save((err, result) => {
             if (err) {
                 return res.status(400).json({
                     error: errorHandler(err)
                 });
             }
             res.json(result);
         });
     });
 };
 
 /**
  * SORTIERUNG
  * ===========
  * Meistverkauft / Zeit des Hochladens
  * nach dem MeistBerkauf = /products?sortBy=sold&order=desc&limit=4
  * Nach der Zeit des Hochladens = /products?sortBy=createdAt&order=desc&limit=4
  * Wenn keine params gesendet werden, dann alle Artikeln wurden zurückgegeben
  */
 
 exports.list = (req, res) => {
     let order = req.query.order ? req.query.order : "asc";
     let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
     let limit = req.query.limit ? parseInt(req.query.limit) : 6;
 
     Product.find()
         .select("-photo")
         .populate("category")
         .sort([[sortBy, order]])
         .limit(limit)
         .exec((err, products) => {
             if (err) {
                 return res.status(400).json({
                     error: "Artikeln wurden nicht gefunden"
                 });
             }
             res.json(products);
         });
 };
 
 /**
  * Es wird das Produkt basierend auf die angefragte Kategorie finden
  * Andere Produkte, das die gleiche Kategorie haben wurden zurückgegeben
  */
 
 exports.listRelated = (req, res) => {
     let limit = req.query.limit ? parseInt(req.query.limit) : 6;
 
     Product.find({ _id: { $ne: req.product }, category: req.product.category })
         .limit(limit)
         .populate("category", "_id name")
         .exec((err, products) => {
             if (err) {
                 return res.status(400).json({
                     error: "Produkte wurden nicht gefunden"
                 });
             }
             res.json(products);
         });
 };
 
 exports.listCategories = (req, res) => {
     Product.distinct("category", {}, (err, categories) => {
         if (err) {
             return res.status(400).json({
                 error: "Kategorien wurden nicht gefunden"
             });
         }
         res.json(categories);
     });
 };
 
 /**
  * Listet Produkten nach Suchekriterium
  * Ich soll noch das product search in reach-frontend implementieren
  * Ich soll die Kategorien in einem CheckBox und Preisspanne zeigen (vlt kann ich radio buttons verwenden)
  * Wenn der Benutzer auf diesen CheckBox und Preisspanne, sollte eine Api-anfrage(request) gemacht werden
  * und zeigt dann die Produkten zum Benutzer basierend auf Sie wollen
  */
 
 exports.listBySearch = (req, res) => {
     let order = req.body.order ? req.body.order : "desc";
     let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
     let limit = req.body.limit ? parseInt(req.body.limit) : 100;
     let skip = parseInt(req.body.skip);
     let findArgs = {};
 
 
     for (let key in req.body.filters) {
         if (req.body.filters[key].length > 0) {
             if (key === "price") {
                 // gte -  greater than equal preis [0-10]
                 // lte - less than
                 findArgs[key] = {
                     $gte: req.body.filters[key][0],
                     $lte: req.body.filters[key][1]
                 };
             } else {
                 findArgs[key] = req.body.filters[key];
             }
         }
     }
 
     Product.find(findArgs)
         .select("-photo")
         .populate("category")
         .sort([[sortBy, order]])
         .skip(skip)
         .limit(limit)
         .exec((err, data) => {
             if (err) {
                 return res.status(400).json({
                     error: "Produkt wurde nicht gefunden"
                 });
             }
             res.json({
                 size: data.length,
                 data
             });
         });
 };
 
 exports.photo = (req, res, next) => {
     if (req.product.photo.data) {
         res.set("Content-Type", req.product.photo.contentType);
         return res.send(req.product.photo.data);
     }
     next();
 };
 
 exports.listSearch = (req, res) => {
     // erstellt ein Query-objekt um den Suchwert und Kategoriewert zu halten
     const query = {};
     // weist einen Suchwert einen query.name zu
     if (req.query.search) {
         query.name = { $regex: req.query.search, $options: "i" };
         // weist Kategoriewert eine query.category zu
         if (req.query.category && req.query.category != "All") {
             query.category = req.query.category;
         }
         // das Produkt basierend auf das Query-objekt mit 2 Eigenschaften
         // suchen und Kategorie
         Product.find(query, (err, products) => {
             if (err) {
                 return res.status(400).json({
                     error: errorHandler(err)
                 });
             }
             res.json(products);
         }).select("-photo");
     }
 };