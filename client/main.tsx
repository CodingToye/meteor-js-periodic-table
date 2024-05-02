import React from "react";
import {createRoot} from "react-dom/client";
import {Meteor} from "meteor/meteor";
import "./main.css";
import {App} from "/imports/ui/App";
import {ModalProvider} from "/imports/ui/context/modalContext";

Meteor.startup(() => {
  if (false) {
    import("../imports/ui/components/modals/SignatureModal/SignatureModal");
  }
  const container = document.getElementById("react-target");
  const root = createRoot(container!);
  root.render(
    <ModalProvider>
      <App />
    </ModalProvider>
  );
});
