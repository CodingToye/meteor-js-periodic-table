import React, {ReactNode, Component} from "react";

function logErrorNicely(error: unknown, errorInfo: unknown): void {
  console.error("[ERROR]", error);
  console.error(errorInfo);
  // You can also log errors to a remote logging service here
}

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false, error: undefined};
  }

  static getDerivedStateFromError(error: Error) {
    return {hasError: true, error};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorNicely(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-white">
          <h1>Something went wrong</h1>
          {this.state.error && (
            <details style={{whiteSpace: "pre-wrap"}}>
              <summary>Error details</summary>
              <pre>{this.state.error.stack}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
