import React, { useRef } from "react";
import { Button } from "@chakra-ui/react";
import { patchedFocus } from "../patchedFocus";

const ChakraButton: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Button
      ref={btnRef}
      colorScheme="teal"
      onClick={() => patchedFocus(btnRef.current)}
    >
      Chakra Button
    </Button>
  );
};

export default ChakraButton;
