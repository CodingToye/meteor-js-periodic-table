export interface Blocks {
  category: string;
  element: string;
  label: string;
  purpose: string;
  signature: string;
  sample: Sample;
  description?: string;
  optionalArgs?: string[];
}

export type Sample = {
  implementation?: string;
  return?: string;
  setup?: string;
};
