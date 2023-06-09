import { Box, Typography, Modal, Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import useModal from "../../hooks/useModal";
import { Card, CardActions, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export default function ActivityCard({ card }) {
  const router = useRouter();
  const { handleActivityDelete, handleOpen, handleClose, open } = useModal();
  const handleEdit = (id) => {
    router.push(`/dashboard/addnew/${id}`);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {card.activity.charAt(0).toUpperCase() + card.activity.slice(1)}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {card.duration}min
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Description : {card.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.date}
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleEdit(card._id)}>
            Edit
          </Button>
          <Button size="small" onClick={() => handleOpen(card._id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Up to delete activity ?
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                mt: 2,
                display: "flex",
                gap: "20px",
                justifyContent: "end",
              }}
            >
              <Button variant="outlined" color="info" onClick={handleClose}>
                {" "}
                Cancel{" "}
              </Button>
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={handleActivityDelete}
              >
                Delete
              </Button>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
