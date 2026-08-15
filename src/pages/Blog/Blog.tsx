import PageLayout from '@/components/layout/PageLayout';
import Footer from '@/components/layout/Footer';

export default function Blog() {
  return (
    <PageLayout>
      <section className="container-page py-20">
        <h1 className="text-h1 text-ink-950">Blog</h1>
        <p className="mt-4 text-body-lg text-ink-600">
          This page will contain a blog. Content coming soon.
        </p>
      </section>
      <Footer />
    </PageLayout>
  );
}
