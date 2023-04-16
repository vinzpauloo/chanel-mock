// ** React Imports
import React from "react";

// ** MUI Imports
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

interface FashionProps {
  open: boolean;
  onClose: () => void;
}

const Fashion = (props: FashionProps) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>Fashion</DialogTitle>
      <DialogContent>
        {/* Add your custom content for the dropdown/modal here */}
        <p>Your custom content goes here...</p>
      </DialogContent>
    </Dialog>
  );
};

export default Fashion;
