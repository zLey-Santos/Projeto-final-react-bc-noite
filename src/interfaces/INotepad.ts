export interface INotepad {
  content: string;
  created_at: string;
  id: number;
  subtitle: string;
  title: string;
}

export type IResponseGetNotepad = {
  count: number;
  notepads: INotepad[];
};
