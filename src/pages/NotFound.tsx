
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-playfair text-6xl font-bold text-sage mb-4">404</h1>
          <h2 className="font-playfair text-2xl text-charcoal mb-6">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Oops! It seems like you've unraveled to a page that doesn't exist. Let's stitch our way back home.
          </p>
          <Link 
            to="/" 
            className="btn-primary inline-block"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
