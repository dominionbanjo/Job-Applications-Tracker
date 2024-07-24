import { StatusCodes } from "http-status-codes";
import Job from "../models/jobModel.js";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please provide company and position" });
  }
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findOne({ _id: id });
  if (!job) {
    // throw new Error('no job with that id');
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: `no job with id ${id}` });
  }
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!job) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: `no job with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ msg: "job modified", job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findOneAndDelete({ _id: id });
  if (!job) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: `no job with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ msg: "job deleted" });
};
