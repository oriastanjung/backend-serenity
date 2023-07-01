const Place = require("./model");

const createPlace = async (req, res, next) => {
  try {
    const { title, description, location, jumlah, urlmap, image, category } = req.body;

    const result = new Place({
      title,
      description,
      location,
      jumlah,
      urlmap,
      image,
      category,
    });

    await result.save();
    return res.status(200).json({
      message: "created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllPlace = async (req, res, next) => {
  try {
    const result = await Place.find();
    if (!result) {
      return res.status(200).json({
        message: "currently there is no data ",
        data: [],
      });
    }
    return res.status(200).json({
      message: "success get all data",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getOnePlace = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Place.findOne({ _id: id });
    if (!result) {
      return res.status(200).json({
        message: `no data found with id : ${id}`,
        data: [],
      });
    }
    return res.status(200).json({
      message: "success get data",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateOnePlace = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, location, jumlah, urlmap, image,category } = req.body;

    const result = await Place.findOne({ _id: id });
    if (!result) {
      return res.status(200).json({
        message: `no data found with id : ${id}`,
        data: [],
      });
    }
    result.title = title;
    result.description = description;
    result.location = location;
    result.jumlah = jumlah;
    result.urlmap = urlmap;
    result.image = image;
    result.category = category;
    
    await result.save();
    return res.status(200).json({
      message: `success update data with id : ${id}`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteOnePlace = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Place.findOne({ _id: id });
    if (!result) {
      return res.status(200).json({
        message: `no data found with id : ${id}`,
        data: [],
      });
    }
    
    await Place.deleteOne({_id : id});

    return res.status(200).json({
      message: `success deleted data with id : ${id}`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPlace,
  getAllPlace,
  updateOnePlace,
  deleteOnePlace,
  getOnePlace
};
