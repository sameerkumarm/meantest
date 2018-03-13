import mongoose from 'mongoose';

var xRefSchema = new mongoose.Schema({
		SystemName: {type:String, enum:['SystemA','SystemB','SystemC', 'SystemD']},
		LocationId: String
	}) ;

var locationSchema = new mongoose.Schema({
         LocationMasterId: String,
         Type: { type: String, trim: true, enum:['Terminal','Yard Location','Customer']},
         Name: { type: String, trim: true },
         Address1: { type: String, trim: true },
         Address2: { type: String, trim: true },
         City: { type: String, trim: true },
         CityId: String,
         State: String,
         PostalCode: Number,
         County: String,
         Country: String,
         Lat: String,
         Long: String,
         CleanseStatusId: String,
         TimeZone: String,
         Status: String,
         XRefIds: [xRefSchema],
         CreatedDate: { type: Date, default: Date.now },
         CreatedBy: { type: String, default: 'User' },
         ModifiedDate: Date,
         ModifiedBy: { type: String, default: 'User' }
     });

export default mongoose.model("LocationMaster", locationSchema);