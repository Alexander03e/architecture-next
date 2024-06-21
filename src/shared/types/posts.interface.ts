interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type IPostList = IPost[];

export type { IPost, IPostList };
