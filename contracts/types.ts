export type BlogPostType = {
  id: number;
  title: string;
  date: string;
  tags: string[];
  description: string;
  blogPostUrl: string;
  featured: boolean;
};

export type ProjectType = {
  id: number;
  title: string;
  imageSrc: string;
  startDate: string;
  endDate: string;
  description: string;
  projectUrl: string;
  featured: boolean;
};

export type SocialType = {
  name: string;
  url: string;
};
