const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const collection = req.app.locals.db.collection('cars');

    collection.find().toArray((err, docsArr) => {
        if(err) return res.status(500).json({"status":500, error:error});

        return res.status(200).json({data:docsArr});
    });
})


router.post('/:car_id/reserve', (req,res,next) => {
    const carId = req.params.car_id;

    const collection = req.app.locals.db.collection('cars');

    collection.findOne({_id: parseInt(carId)},(err, existingCar) => {
        
        if(err) return res.status(500).json({"status":500, error:error});

        const totalReservations = existingCar.rentalDetails.length;
        const lastReservation = existingCar.rentalDetails[totalReservations-1];
        
        const newReservation = {
            reservation_id: lastReservation.reservation_id+1,
            drivername: req.body.name,
            license: req.body.license,
            startMileage: lastReservation.endMileage,
            endMileage: null
        }

        collection.updateOne(
            {_id: parseInt(carId)},
            {
                $set:{status: 1},
                $push:{"rentalDetails": newReservation}
            },
            (err, status) => {

                if(err) return res.status(500).json({"status":500, error:error});

                return res.status(201).json({
                    status: 201,
                    message: "Car reserved successfully.",
                    newReserv: newReservation
                });
            }
        )
    
    })
})


router.delete('/:car_id/cancel/:reservation_id',(req,res,next) => {
    const carId = req.params.car_id;
    const reservationId = req.params.reservation_id;

    const collection = req.app.locals.db.collection('cars');

    collection.findOne({_id: parseInt(carId),"rentalDetails.reservation_id": parseInt(reservationId)},(err, existingCar) => {
        
        if(err) return res.status(500).json({"status":500, error:error});

        if(!existingCar) return res.status(422).json({"status":422, msg:"No reservation found."});

        const updatedRentalDetails = existingCar.rentalDetails.filter((reservation) => reservation.reservation_id != reservationId);
        

        // return res.json(existingCar);
        collection.updateOne(
            {_id: parseInt(carId)},
            {
                $set:{status: 0, rentalDetails: updatedRentalDetails},
            },
            (err, status) => {

                if(err) return res.status(500).json({"status":500, error:error});

                return res.status(201).json({
                    status: 201,
                    message: "Reservation cancelled Successfully.",
                    updatedRentalDetails: updatedRentalDetails
                });
            }
        );
    
    })
})

module.exports = router;
