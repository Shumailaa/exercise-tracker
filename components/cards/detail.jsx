import { Box, Divider, Typography, Modal, Button } from "@mui/material";
import React from "react";

import { useRouter } from 'next/router';
import useModal from '../../hooks/useModal';
import {
    DetailContainer,
    CardDetail,
    CardHeader,
    CardCaption,
    CardBody,
      CardDate,
} from "./styledCard";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Detail({ card }) {
    const router = useRouter();
    const { handleDelete, handleOpen, handleClose, open } = useModal();
    const handleEdit = (id) => { router.push(`/dashboard/addnew/${id}`) }

    return (
        <>
            <DetailContainer>
                <CardDetail>
                    <CardHeader>
                  
                        <Typography variant="h5">{card.duration}min</Typography>
                    </CardHeader>
                    <CardCaption>
                        <Typography variant="body1" color={"text.secondary"}>
                            Type
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                border: "1px solid lightgrey",
                                padding: "2px 5px",
                                borderRadius: "5px",
                                backgroundColor: "#f4f4f4",
                            }}
                        >
                            {card.activity}
                        </Typography>
                    </CardCaption>
                    <Divider />
                    <CardBody variant="body1">{card.description}</CardBody>
              

                    <CardDate variant="body2" color={"text.secondary"}>
                        {card.date}
                    </CardDate>
                
                </CardDetail>
            </DetailContainer>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Are you sure you want to delete activity ?
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', gap: '20px', justifyContent: 'end' }}>
                            <Button variant='outlined' color='info' onClick={handleClose}> Cancel </Button>
                            <Button variant='contained' color='error' onClick={handleDelete}>Delete</Button>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    );
}
