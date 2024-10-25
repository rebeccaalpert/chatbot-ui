import { Spinner } from '@patternfly/react-core';
import * as React from 'react';
export const FlyoutLoading: React.FunctionComponent = () => {
  return (
    <div className="flyout-loading">
      <Spinner />
    </div>
  );
};
