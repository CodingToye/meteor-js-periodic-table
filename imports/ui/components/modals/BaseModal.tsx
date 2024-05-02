import React, {memo, ReactNode} from "react";
import {createPortal} from "react-dom";
import classNames from "classnames";
import Icon from "../../components/Icon";

export interface IBaseModalProps {
  show: boolean;
  children: string | ReactNode;
  closeOnTap?: boolean;
  onClose?: () => void;
  closeClicked?: boolean;
  extraClasses?: string;
}

export const BaseModal = memo((props: IBaseModalProps) => {
  const {closeOnTap, onClose, children, closeClicked, extraClasses} = props;
  const root = document.getElementById("react-target");

  if (!root) throw new Error("Root node not found, cannot render modal");

  const handleInsideClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (!closeOnTap) {
      event.stopPropagation();
    }
  };

  const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  return createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 z-40 flex justify-center items-center">
      <div
        className={classNames(
          "z-50 rounded p-4 animate-fade-in-down",
          extraClasses,
          {
            Modal: true,
            "animate-fade-out-up": closeClicked,
            "Modal-show": props.show,
          }
        )}
        onClick={handleInsideClick}
      >
        {children}
        <Icon
          iconName="close"
          onClick={onClose}
          extraClasses="cursor-pointer text-base absolute top-2 right-2"
        />
      </div>
      <div
        className={classNames(
          "fixed bg-black/70 w-full h-full animate-backdrop-fade-in backdrop-blur",
          {"animate-backdrop-fade-out": closeClicked}
        )}
        onClick={handleOverlayClick}
      ></div>
    </div>,
    root
  );
});
