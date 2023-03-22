import React, { useState, useRef } from "react";
import {
  FormContainer,
  FormHeading,
  FormFields,
  FormActions,
  FieldsPair,
} from "../styledForm";

import { Button, MenuItem, TextField } from "@mui/material";

import usePopup from "../../hooks/usePopup";
import { useRouter } from "next/router";
import axios from "axios";
import { url } from "../../utils/url";

export default function ActivityForm({ track }) {
  console.log("activity form proptrack", track);
  const router = useRouter();
  const { successMessage, errorMessage } = usePopup();
  const [error, setError] = useState({
    activity: "",
    duration: "",
    date: "",
    description: "",
  });

  const [data, setData] = useState({
    activity: track ? track.activity : "",
    duration: track ? track.duration : "",
    date: track ? track.date : "",
    description: track ? track.description : "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("add ka error", error);
    try {
      const response = await axios.post(`${url}api/track`, data);
      if (response.data.success) {
        successMessage(response.data.message);
        await router.push(`/dashboard/activities`);
      }
    } catch (error) {
      errorMessage(error.response.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${url}api/track/${track._id}`, data);
      console.log(response);
      if (response.data.success) {
        successMessage(response.data.message);
        await router.push(`/dashboard/activities`);
      }
    } catch (error) {
      errorMessage(error.response.data.message);
    }
  };

  const activityRef = useRef("");
  const durationRef = useRef("");
  const descriptionRef = useRef("");
  const dateRef = useRef("");
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value === "") {
      setError({ ...error, [name]: `${name} must required` });
    } else {
      setError({ ...error, [name]: `` });
    }
  };

  return (
    <FormContainer>
      <FormHeading>{track ? "Update Activity" : "Add Activity"}</FormHeading>
      <FormFields>
        <FieldsPair>
          <TextField
            fullWidth
            error={error.activity}
            helperText={error.activity}
            ref={activityRef}
            label="Activity"
            name="activity"
            placeholder="Activity Type"
            onBlur={handleBlur}
            value={data.activity}
            onChange={handleChange}
            select
          >
            <MenuItem value={"swim"}>Swim</MenuItem>
            <MenuItem value={"run"}>Run</MenuItem>
            <MenuItem value={"walk"}>Walk</MenuItem>
            <MenuItem value={"hike"}>Hike</MenuItem>
            <MenuItem value={"ride"}>Ride</MenuItem>
          </TextField>
        </FieldsPair>
        <FieldsPair>
          <TextField
            fullWidth
            helperText={error.date}
            error={error.date}
            ref={dateRef}
            onBlur={handleBlur}
            name="date"
            type="date"
            placeholder="Date"
            value={data.date}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            helperText={error.duration}
            error={error.duration}
            ref={durationRef}
            onBlur={handleBlur}
            name="duration"
            type="number"
            placeholder="Duration"
            value={data.duration}
            onChange={handleChange}
          />
        </FieldsPair>
        <TextField
          fullWidth
          helperText={error.description}
          error={error.description}
          ref={descriptionRef}
          onBlur={handleBlur}
          name="description"
          type="text"
          placeholder="Description"
          value={data.description}
          onChange={handleChange}
          multiline
          rows={5}
        />
      </FormFields>
      <FormActions>
        <Button
          variant="contained"
          fullWidth
          onClick={track ? handleUpdate : handleSubmit}
        >
          {track ? "Update" : "Add"}
        </Button>
      </FormActions>
    </FormContainer>
  );
}
