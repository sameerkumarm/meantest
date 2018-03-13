import express from 'express';
//import controller file
import * as locationcontroller from '../controllers/locationcontroller';

const router = express.Router();

router.route('/')
.get(locationcontroller.getLocations)
.post(locationcontroller.addLocation)
.put(locationcontroller.updateLocation);

router.route('/:id')
 .get(locationcontroller.getLocation)
 .delete(locationcontroller.deleteLocation);

export default router;