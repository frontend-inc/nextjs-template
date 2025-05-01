import React from 'react';

const Features = ({
  title = "Our Features",
  subtitle = "Discover what makes our product stand out from the competition",
  features = [
    {
      id: 1,
      icon: "ri-shield-check-line",
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security protocols and encryption."
    },
    {
      id: 2,
      icon: "ri-speed-line",
      title: "Lightning Fast",
      description: "Optimized performance ensures your experience is always smooth and responsive."
    },
    {
      id: 3,
      icon: "ri-24-hours-line",
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to help you."
    },
    {
      id: 4,
      icon: "ri-tools-line",
      title: "Customizable",
      description: "Tailor the platform to your specific needs with extensive customization options."
    },
    {
      id: 5,
      icon: "ri-bar-chart-grouped-line",
      title: "Detailed Analytics",
      description: "Gain valuable insights with comprehensive reporting and analytics tools."
    },
    {
      id: 6,
      icon: "ri-device-line",
      title: "Device Friendly",
      description: "Access from any device with a fully responsive and consistent experience."
    }
  ],
  background = "bg-white", // bg-white, bg-gray-50, bg-gray-100, etc.
  iconBackground = "bg-gray-100", // bg-gray-100, bg-gray-200, bg-black, etc.
  iconColor = "text-black", // text-black, text-gray-600, etc.
  compact = false
}) => {
  return (
    <div className={`w-full ${background} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold text-black mb-3">{title}</h2>}
            {subtitle && <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-start">
              {/* Icon */}
              <div className={`${iconBackground} ${iconColor} p-3 rounded-lg mb-4`}>
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                <p className={`text-gray-600 ${compact ? 'line-clamp-2' : ''}`}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;