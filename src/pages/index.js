import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import '../styles/product.css';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Product Listing Page</title>
        <meta name="description" content="A showcase of our product offerings." />

        {/* Schema.org JSON-LD for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Product Name",
              "image": "/images/product.jpg",
              "description": "Product Description"
            })
          }}
        />
      </Head>

      <header>
        <h1>Product Listing Page</h1>
      </header>

      <main>
        {/* Product details will go here */}
        <div className="product-card">
        <Image
          src="/images/product.jpg"
          alt="Product Image"
          width={600}
          height={400}
        />
        <Image
          src="/images/product.jpg"
          alt="Product Image"
          width={600}
          height={400}
        />
        <Image
          src="/images/product.jpg"
          alt="Product Image"
          width={600}
          height={400}
        />
        <Image
          src="/images/product.jpg"
          alt="Product Image"
          width={600}
          height={400}
        />
        <Image
          src="/images/product.jpg"
          alt="Product Image"
          width={600}
          height={400}
        />
        <Image
          src="/images/product.jpg"
          alt="Product Image"
          width={600}
          height={400}
        />
        <Image
          src="/images/product.jpg"
          alt="Product Image"
          width={600}
          height={400}
        />
        <Image
          src="/images/product.jpg"
          alt="Product Image"
          width={600}
          height={400}
        />
          <h2>Product Name</h2>
          <p>Product Description</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
