import * as React from 'react';
import { TextProps } from '../Text/index';

export interface DataSummaryProps {
  messages?: { filtered?: string; total?: string };
}

export interface DataSummaryExtendedProps extends TextProps, DataSummaryProps {}

declare const DataSummary: React.FC<DataSummaryExtendedProps>;

export { DataSummary };
