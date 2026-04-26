import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function Loading() {
  const { loading } = useSelector((state: RootState) => state.blogs);
  return (
    <Backdrop open={loading}>
      <CircularProgress color="info" />
    </Backdrop>
  );
}

export default Loading;
