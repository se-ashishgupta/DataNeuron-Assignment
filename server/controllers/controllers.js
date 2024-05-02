import { catchAsyncError } from "../middleware/catchAsyncErorr.js";
import { Content } from "../models/content.js";
import { Count } from "../models/count.js";
import ErrorHandler from "../utils/errorHandler.js";

// Add Content Api Function
export const addContent = catchAsyncError(async (req, res, next) => {
  const { componentNumber, content } = req.body;

  if (!componentNumber || !content)
    return next(new ErrorHandler("Please Enter All Fields", 400));

  await Content.create({
    componentNumber,
    content,
  });

  const count = await Count.findOne();
  count.count = count.count + 1;
  count.save();

  res.status(201).json({
    success: true,
    message: "Content Added Successfully",
  });
});

// Update Content Api Function
export const updateContent = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!id) return next(new ErrorHandler("Id is required", 400));
  if (!content) return next(new ErrorHandler("Please Enter All Fields", 400));

  const cont = await Content.findById(id);

  if (!cont) return next(new ErrorHandler("Content Not Found", 404));

  cont.content = content;
  cont.save();

  const count = await Count.findOne();
  count.count = count.count + 1;
  count.save();

  res.status(201).json({
    success: true,
    message: "Content Updated Successfully",
  });
});

// Get Content Api Function
export const getContent = catchAsyncError(async (req, res, next) => {
  const content1 = await Content.find({ componentNumber: 1 });
  const content2 = await Content.find({ componentNumber: 2 });
  const content3 = await Content.find({ componentNumber: 3 });
  const count = await Count.findOne();

  res.status(200).json({
    success: true,
    content: {
      content1: content1[content1.length - 1],
      content2: content2[content2.length - 1],
      content3: content3[content3.length - 1],
      count,
    },
  });
});
