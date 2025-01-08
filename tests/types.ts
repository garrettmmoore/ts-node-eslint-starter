export interface Examples {
  solutions: Example[];
}

export interface Example {
  input: Input;

  output: Output;
}

export interface Input {
  param1: any;
  param2: any;
}

export interface Output {
  result: any;
}
