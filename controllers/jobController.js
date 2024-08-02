import { StatusCodes } from "http-status-codes";
import Job from "../models/jobModel.js";
// import { NotFoundError } from "../errors/customError.js";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const job = await Job.findOne({ _id: req.params.id });
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ msg: "job modified", job });
};

export const deleteJob = async (req, res) => {
  const job = await Job.findOneAndDelete({ _id: req.params.id });
  res.status(StatusCodes.OK).json({ msg: "job deleted" });
};
