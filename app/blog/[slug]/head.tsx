import { getAllPostSlugs } from '../../../utils/blog';

export default async function Head({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://crimelens.netlify.app';
  const ampHref = `${baseUrl}/amp/blog/${slug}`;
  return (
    <>
      <link rel="amphtml" href={ampHref} />
    </>
  );
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}



