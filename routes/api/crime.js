var multer = require("multer");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const keys = require("../../config/keys");
const Crime = require("../../models/crimes");



var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = "";
    if (file.mimetype === "image/gif") {
      filetype = "gif";
    }
    if (file.mimetype === "image/png") {
      filetype = "png";
    }
    if (file.mimetype === "image/jpeg") {
      filetype = "jpg";
    }
    cb(null, "image-" + Date.now() + "." + filetype);
  }
});
var upload = multer({ storage: storage });
//Add Crime
router.post("/addCrime", upload.single("file"), (req, res, next) => {


  const crime = new Crime({
    _id: new mongoose.Types.ObjectId(),
    reportedby: req.body.reportedby,
    description: req.body.description,
    Ocurence_Date: req.body.Ocurence_Date,
    Reported_Date: req.body.Reported_Date,
    Crime_type: req.body.Crime_type,
    file: req.file.filename,
    location: req.body.location,
    province: req.body.province,
    status: "pending",
    investigated_by: "not assigned yet",
    designation: "not assigned",



  });

  crime
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Crime added"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//View crimes
router.get("/viewcrimes", (req, res, next) => {
  Crime.find()
    .select("reportedby description Ocurence_Date Reported_Date Crime_type location _id file status count investigated_by designation")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        crime: docs.map(doc => {
          return {
            reportedby: doc.reportedby,
            description: doc.description,
            Ocurence_Date: doc.Ocurence_Date,
            Reported_Date: doc.Reported_Date,
            Crime_type: doc.Crime_type,
            file: doc.file,
            location: doc.location,
            _id: doc._id,
            status: doc.status,
            investigated_by: doc.investigated_by,
            designation: doc.designation

          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
//get id
router.get("/edit-status/:_id", (req, res, next) => {
  Crime.findById(req.params._id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
    
  })
})

    


//update case status
router.put("/UpdateCaseStatus/:_id", (req, res, next) => {
  const id = req.params._id;
  Crime.findByIdAndUpdate({ _id: id }, {
    $set: { status: req.body.status }
  })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.put("/UpdateCaseDetails/:_id", (req, res, next) => {
  const id = req.params._id;

  Crime.findByIdAndUpdate({ _id: id }, {
    $set: {
      investigated_by: req.body.investigated_by, designation: req.body.designation

    }
  })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
module.exports = router;