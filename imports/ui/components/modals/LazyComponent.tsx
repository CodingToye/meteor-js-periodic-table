import React, {Suspense, lazy} from "react";

import ErrorBoundary from "../error-boundary/ErrorBoundary";
import {useModal} from "../../context/modalContext";

interface ILazyComponentProps {
  filename: string;
  props?: Record<string, any>;
}

export function LazyComponent({filename, props}: ILazyComponentProps) {
  const {closeModal} = useModal();
  const handleModalClose = () => {
    console.warn("I promise to close this modal");
    closeModal(filename);
  };

  console.log(filename);

  const Component = lazy(() =>
    import(`./${filename}/${filename}.tsx`).catch((error) => {
      console.error("Failed to load component", error);
      return {default: () => <div>Failed to load component</div>};
    })
  );

  return (
    <Suspense fallback={null}>
      <ErrorBoundary>
        {filename ? <Component {...props} onClose={handleModalClose} /> : null}
      </ErrorBoundary>
    </Suspense>
  );
}
