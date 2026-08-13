export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'placeholder-1',
    title: 'Blog Post Title',
    excerpt: 'A short excerpt of the blog post will appear here.',
    date: '2024',
    readTime: '5 min read',
    tags: ['thoughts'],
    content: 'Full blog post content will appear here.',
  },
];
