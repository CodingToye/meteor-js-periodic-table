import React, {useState, useCallback} from "react";
import {BaseModal} from "../BaseModal";
import {Sample} from "../../../types";

export interface ISignatureModalProps {
  isOpen: boolean;
  signature?: string;
  category?: string;
  element?: string;
  purpose?: string;
  sample?: Sample;
  description?: string;
  optionalArgs?: string[];
  onClose?: () => void;
}

export default function SignatureModal(props: ISignatureModalProps) {
  const {
    isOpen,
    signature,
    category,
    element,
    purpose,
    sample,
    description,
    optionalArgs,
    onClose,
  } = props;
  const [closeClicked, setCloseClicked] = useState(false);

  console.log(props);

  const handleClose = useCallback(() => {
    setCloseClicked((prevCloseClicked) => !prevCloseClicked);
    setTimeout(() => {
      setCloseClicked(true);
      if (onClose) onClose();
    }, 500);
  }, [onClose]);

  console.log(optionalArgs);

  return (
    <BaseModal
      show={isOpen}
      onClose={handleClose}
      closeOnTap={false}
      closeClicked={closeClicked}
      extraClasses={`bg-blocks-${category}-base border-t border-white/30 relative`}
    >
      <div className="flex justify-center h-full">
        <small className="absolute top-4 left-4 opacity-50">{category}</small>
        <small className="absolute bottom-4 left-4 opacity-50">{purpose}</small>

        <div className="flex flex-col justify-between items-center gap-2 py-8">
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-3xl opacity-25">{element}</p>
            <p className="text-2xl">{signature}</p>
            {optionalArgs && (
              <small className="">
                <strong>Options:</strong>
                {optionalArgs.map((x) => {
                  return (
                    <span className="bg-white/50 p-1 rounded mx-1">{x}</span>
                  );
                })}
              </small>
            )}
            <small className="text-center my-4 max-w-96">{description}</small>
          </div>

          <div
            className={`bg-blocks-${category}-comp shadow-soft-secondary-outline  w-full p-4 mb-4 rounded`}
          >
            <code
              className={`block ${
                category !== "number" ? "text-white" : "text-black"
              } text-xs mb-4`}
            >
              <span
                className={`text-xs ${
                  category !== "number" ? "text-white/50" : "text-black/50"
                }`}
              >
                <pre className="mb-4">{sample?.setup}</pre>
              </span>
              <pre>{sample?.implementation}</pre>
            </code>
            {sample?.return && (
              <code
                className={`block bg-blocks-${category}-highlight p-3 rounded text-xs`}
              >
                <span
                  className={`${
                    category === "number" ? "text-white" : "text-black"
                  } `}
                >
                  <pre>{sample?.return}</pre>
                </span>
              </code>
            )}
          </div>
        </div>
      </div>
    </BaseModal>
  );
}
