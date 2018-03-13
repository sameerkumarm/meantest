import mongoose from 'mongoose';

//import models
import LocationMaster from "../models/LocationMaster";

export const getLocations = (req,res) => {
  Location.find().exec((err,locations) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Locations fetched successfully',locations});
  });
}

export const addLocation = (req,res) => {
  console.log(req.body);
  const newLocation = new LocationMaster(req.body);
  newLocation.save((err,location) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Location added successfully',location});
  })
}

export const updateLocation = (req,res) => {
  LocationMaster.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,location) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(location);
    return res.json({'success':true,'message':'Location Updated Successfully',location});
  })
}

export const getLocation = (req,res) => {
  LocationMaster.find({_id:req.params.id}).exec((err,location) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(location.length){
      return res.json({'success':true,'message':'Location fetched by id successfully',location});
    }
    else{
      return res.json({'success':false,'message':'Location with the given id not found'});
    }
  })
}

export const deleteLocation = (req,res) => {
  LocationMaster.findByIdAndRemove(req.params.id, (err,location) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Location Deleted Successfully',location});
  })
}