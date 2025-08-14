export type Group = 'science' | 'commerce';
export type Gender = 'male' | 'female';

export interface Student {
  name: string;
  marks: number;
  group: Group;
  gender: Gender;
  attributes?: string[];
}
