export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  credit: string;
}

export const images: Record<string, PortfolioImage> = {
  heroFashion: {
    id: 'hero-fashion',
    src: 'https://images.pexels.com/photos/8527903/pexels-photo-8527903.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'A fashion designer creating clothing sketches surrounded by fabrics and tools.',
    credit: 'Kaboompics.com',
  },
  heroFashionSmall: {
    id: 'hero-fashion-small',
    src: 'https://images.pexels.com/photos/8030147/pexels-photo-8030147.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fashion designer evaluating textile swatches for a new collection in a studio.',
    credit: 'Los Muertos Crew',
  },
  fashionDesign: {
    id: 'fashion-design',
    src: 'https://images.pexels.com/photos/36731322/pexels-photo-36731322.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Fashion designer organizing sketches in a modern garment studio with tools and fabrics.',
    credit: 'Vitaly Gariev',
  },
  canada: {
    id: 'canada',
    src: 'https://images.pexels.com/photos/11431965/pexels-photo-11431965.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: "A dramatic view of Vancouver's skyline with fog-covered mountains in the background.",
    credit: 'Brennan McDonald',
  },
  technology: {
    id: 'technology',
    src: 'https://images.pexels.com/photos/4884116/pexels-photo-4884116.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'A sleek black laptop on a white desk in a minimalist setup with natural lighting.',
    credit: 'Artem Podrez',
  },
  technologyAlt: {
    id: 'technology-alt',
    src: 'https://images.pexels.com/photos/5793947/pexels-photo-5793947.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'A minimalist workspace with an open laptop, coffee mug, and vase on a bright indoor table.',
    credit: 'Yan Krukau',
  },
  art: {
    id: 'art',
    src: 'https://images.pexels.com/photos/30925664/pexels-photo-30925664.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Vibrant abstract expressionist art with bold colors and dynamic brush strokes.',
    credit: 'Steve A Johnson',
  },
  travel: {
    id: 'travel',
    src: 'https://images.pexels.com/photos/1078850/pexels-photo-1078850.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'A close-up view of colorful push pins casting shadows on a world map during sunset.',
    credit: 'Aksonsat Uanthoeng',
  },
  portrait: {
    id: 'portrait',
    src: 'https://images.pexels.com/photos/38290951/pexels-photo-38290951.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Black and white photo of a fashionable woman posing with a magazine in an urban setting.',
    credit: 'Esra Saltürk',
  },
  resume: {
    id: 'resume',
    src: 'https://images.pexels.com/photos/4884111/pexels-photo-4884111.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'A modern laptop with a black screen on a sunlit white surface, highlighting sleek design.',
    credit: 'Artem Podrez',
  },
  blog: {
    id: 'blog',
    src: 'https://images.pexels.com/photos/669228/pexels-photo-669228.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Top view of a minimalist workspace featuring a laptop, smartphone, and desk accessories.',
    credit: 'Dominika Gregušová',
  },
  contact: {
    id: 'contact',
    src: 'https://images.pexels.com/photos/8534373/pexels-photo-8534373.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Modern minimalist workspace featuring a laptop, notebook, and stationery on a white surface.',
    credit: 'Hanna Pad',
  },
  fashionMerge: {
    id: 'fashion-merge',
    src: 'https://images.pexels.com/photos/9849641/pexels-photo-9849641.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Female fashion designer working in studio, arranging fabric and tools.',
    credit: 'Ron Lach',
  },
  aboutPortrait: {
    id: 'about-portrait',
    src: 'https://images.pexels.com/photos/31132240/pexels-photo-31132240.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Editorial fashion portrait of woman with elegant hairstyle and jewelry.',
    credit: 'Mihaela Claudia Puscas',
  },
  aboutFashionDesign: {
    id: 'about-fashion-design',
    src: 'https://images.pexels.com/photos/8527776/pexels-photo-8527776.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Elderly fashion designer collaborating with young colleague over fabric patterns and sketches.',
    credit: 'Kaboompics.com',
  },
  aboutCanada: {
    id: 'about-canada',
    src: 'https://images.pexels.com/photos/12935294/pexels-photo-12935294.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'A breathtaking aerial view of Banff, AB, Canada showcasing majestic snow-capped mountains and lush greenery.',
    credit: 'Ghost Acolyte',
  },
  aboutFashionTransition: {
    id: 'about-fashion-transition',
    src: 'https://images.pexels.com/photos/36731210/pexels-photo-36731210.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Two female fashion designers working on sewing project in studio.',
    credit: 'Vitaly Gariev',
  },
  aboutTechTransition: {
    id: 'about-tech-transition',
    src: 'https://images.pexels.com/photos/25589787/pexels-photo-25589787.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'A sleek laptop with a blank screen sits on a white desk in a contemporary office setting.',
    credit: 'Jakub Zerdzicki',
  },
  aboutPhotography: {
    id: 'about-photography',
    src: 'https://images.pexels.com/photos/10566865/pexels-photo-10566865.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'A close-up of hands holding a vintage camera outdoors, capturing nostalgia.',
    credit: 'Reem Mansour',
  },
  aboutArt: {
    id: 'about-art',
    src: 'https://images.pexels.com/photos/29589096/pexels-photo-29589096.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Colorful art studio corner with brushes, paints, and a painted canvas.',
    credit: 'Yunus Tug',
  },
  aboutTravel: {
    id: 'about-travel',
    src: 'https://images.pexels.com/photos/4655772/pexels-photo-4655772.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Enjoying a stunning panoramic view from a mountain cliff at sunset.',
    credit: 'ArtHouse Studio',
  },
  aboutCreative: {
    id: 'about-creative',
    src: 'https://images.pexels.com/photos/38164076/pexels-photo-38164076.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'A photographer examines film negatives on a light table, surrounded by cameras, lenses, and editing equipment.',
    credit: 'Jakub Zerdzicki',
  },
};
