import { Button } from "@/components/ui/button";
import CampaignCalculator from "@/components/CampaignCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/58f2fe72-ee9e-4d6c-8817-579983c89748.png" 
              alt="Pharos Logo" 
              className="w-16 h-16"
            />
            <span className="text-2xl font-bold">PHAROS</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button className="text-gray-700 hover:text-gray-900">PRODUCTS</button>
            <button className="text-gray-700 hover:text-gray-900">SOLUTIONS</button>
            <button className="text-gray-700 hover:text-gray-900">ABOUT US</button>
            <button className="text-gray-700 hover:text-gray-900">PRICING</button>
          </div>
        </div>
        <Button 
          variant="destructive" 
          className="bg-red-600 hover:bg-red-700"
        >
          LOG IN
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          MAKE PAID SOCIAL{" "}
          <span className="text-red-600 font-bold">WORK FOR YOU</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          LESS HASSLE, MORE RESULTS AND SMARTER GROWTH
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg">
            TRY OUR FREE CALCULATOR
          </Button>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg">
            FIND YOUR SUBSCRIPTION
          </Button>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg">
            OUR PLATFORM INTEGRATIONS
          </Button>
        </div>

        {/* Video Section */}
        <div className="border-2 border-gray-300 p-12 mb-12">
          <h3 className="text-3xl font-bold">VIDEO</h3>
        </div>

        {/* Calculator Section */}
        <div className="bg-[#2B5C8F] text-white py-12">
          <h3 className="text-3xl font-bold text-center mb-8">THE PHAROS FREE CALCULATOR</h3>
          <CampaignCalculator />
        </div>
      </section>
    </div>
  );
};

export default Index;
