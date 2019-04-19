export interface ImageData {
  create_date: string;
  glories: Array<string>;
  likes: Array<string>;
  url: string;
  views: Array<string>;
  _id: string;
  owner: {
    avatar: string;
    _id: string;
    full_name: string;
    city: string;
  };
  challenges: Array<any>;
  total_votes: number;
  comments: Array<any>;
  is_deleted: boolean;
  description: string;
  title: string;
}
