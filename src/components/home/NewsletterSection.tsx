
const NewsletterSection = () => {
  return (
    <section className="py-16 bg-terracotta">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-white font-semibold mb-4">
            Join Our Crochet Community
          </h2>
          <p className="text-white text-opacity-90 mb-8">
            Sign up for our newsletter to receive free patterns, crochet tips, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-charcoal hover:bg-opacity-90 text-white font-medium px-6 py-3 rounded-r transition duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-white text-opacity-70 text-sm mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
