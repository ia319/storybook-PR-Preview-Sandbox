import React, { useRef } from "react";
import { FocusScope } from '@react-aria/focus';
import { patchedFocus } from "../patchedFocus";

const RACInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FocusScope contain restoreFocus>
      <input
        ref={inputRef}
        placeholder="RAC Input"
        onFocus={() => patchedFocus(inputRef.current)}
      />
    </FocusScope>
  );
};

export default RACInput;
