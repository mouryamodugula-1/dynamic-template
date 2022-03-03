import React from "react";
import { Button } from "antd";
import { useCopyToClipboard } from "react-use";

interface CopyButtonProps {
  fieldCode: string;
}

/* This copy button will be called to SearchField and loops for the any number of fields available  */

const CopyButton: React.FC<CopyButtonProps> = ({ fieldCode }) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const [buttonText, setButtonText] = React.useState("Copy field code");
  return (
    <Button
      onClick={() => {
        copyToClipboard(fieldCode);

        console.log(state);
        setButtonText("Copied");
        setTimeout(() => {
          setButtonText("Copy field code");
        }, 5000);
      }}
    >
      {buttonText}
    </Button>
  );
};

export default CopyButton;
