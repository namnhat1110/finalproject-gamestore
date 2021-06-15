const {
    AppError,
    catchAsync,
    sendResponse,
} = require("../helpers/utils.helper");
const Review = require("../models/Review");

const reviewController = {};

reviewController.create = catchAsync(async (req, res, next) => {
    try {
        const review = new Review({ ...req.body });
        await review.save()
        sendResponse(res, 201, true, { review }, null, "Create review successfully")
    } catch (error) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
});


// TODO #1
// READ
// Update
// Destroy


module.exports = gameController;
