const Busmodel = require("../model/bus_model");

// insert document

const insert = async (req, res, next) => {
  const bus = new Busmodel({
    bus_id: req.body.bus_id,
    bus_route: req.body.bus_route,
    bus_password: req.body.bus_password,
    driver_name: req.body.driver_name,
    driver_age: req.body.driver_age,
    temperature: req.body.temperature,
    vaccination_status: req.body.vaccination_status,
    driver_phone_number: req.body.driver_phone_number,
    route_endpoints: [],
    bus_current_location: req.body.bus_current_location,
    source_location: "",
    destination_location: "",
  });
  try {
    const result1 = await Busmodel.estimatedDocumentCount();
    console.log(result1);
    if (result1 !== undefined || result1 !== 0) {
      const result = await bus.save();
      console.log(result);
      res.status(200).json({
        status: "success",
        message: "New bus document inserted successfully",
      });
    }
  } catch (err) {
    res.json({ status: "success", message: "Unknown Error Found" });
  }
};

// driver login

const login = async (req, res) => {
  const user = new Busmodel({
    bus_id: req.body.bus_id,
    password: req.body.password,
  });
  try {
    var query = [
      { $match: { bus_id: req.body.bus_id } },
      { $project: { bus_id: 1, password: 1, bus_id: 1 } },
    ];
    bus_details = await Busmodel.aggregate(query);
    console.log(bus_details);
    if (
      bus_details[0].bus_id === req.body.bus_id &&
      bus_details[0].password === req.body.password
    ) {
      const bus_id = bus_details[0].bus_id;
      res.status(200).json({
        status: "success",
        message: "This driver is logged in successfully",
        result: { driver_id: bus_id },
      });
    } else {
      res.json({ status: "error", message: "Please check the credentials" });
    }
  } catch (err) {
    res.json({
      status: "error",
      message:
        "No document found for this credentials, please check the bus_id",
    });
  }
};

// get driver detail

const showDriverDetail = async (req, res) => {
  try {
    var query = [
      { $match: { bus_id: req.body.driver_id } },
      {
        $project: {
          bus_route: 1,
          route_endpoints: 1,
          bus_current_location: 1,
          source_location: 1,
          destination_location: 1,
          driver_details: 1,
        },
      },
    ];

    const result = await Busmodel.aggregate(query);

    if (result == 0 || result == null || result == undefined) {
      res.json({ status: "error", message: "Please check the driver_id" });
    } else {
      res.status(200).json({
        status: "success",
        message: "These are the bus details you asked for",
        result: result,
      });
    }
  } catch (err) {
    res.json({ status: "error", message: "Unknown Error Found" });
  }
};

// update current location

const updateCurrentLocation = async (req, res) => {
  try {
    const filter = { bus_id: req.body.bus_id };
    const update = { bus_current_location: req.body.current_location };
    const result = await Busmodel.updateOne(filter, update);
    console.log(result);
    res
      .status(200)
      .json({ status: "success", message: "location updated successfully" });
  } catch (err) {
    res.json({ status: "error", message: "Unknown Error Found" });
  }
};

// get current location

const getCurrentLocation = async (req, res) => {
    try {
        var query = [
            { $match: { bus_id: req.body.bus_id } },
            {$project: {bus_current_location: 1}}
          ];
      const result = await Busmodel.aggregate(query);
      if (result == 0 || result == null || result == undefined) {
        res.json({ status: "error", message: "Please check the bus_id" });
      } else {
        res.status(200).json({
          status: "success",
          message: "live location of the bus",
          result: result,
        });
      }
    } catch (err) {
      res.json({ status: "error", message: "Unknown Error Found" });
    }};

module.exports = {
  insert,
  login,
  showDriverDetail,
  updateCurrentLocation,
  getCurrentLocation
};
