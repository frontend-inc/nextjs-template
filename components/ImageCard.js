import React from 'react';

const ImageCard = ({
  image = "/placeholder.jpg",
  alt = "Image description",
  title,
  subtitle,
  overlay = false,
  aspectRatio = "aspect-video", // aspect-square, aspect-video, aspect-[3/2], etc.
  rounded = "rounded-lg", // rounded-none, rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-full
  href,
  onClick
}) => {
  const CardContent = () => (
    <>
      <div className={`${aspectRatio} w-full relative overflow-hidden ${rounded}`}>
        {/* Image placeholder */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <i className="ri-image-line text-4xl text-gray-400"></i>
        </div>
        
        {/* If you want to include an actual image */}
        {/* <img 
          src={image} 
          alt={alt} 
          className="w-full h-full object-cover"
        /> */}
        
        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20">
            {(title || subtitle) && (
              <div className="absolute bottom-0 left-0 right-0 p-4">
                {title && <h3 className="text-white font-medium text-lg">{title}</h3>}
                {subtitle && <p className="text-gray-200 text-sm">{subtitle}</p>}
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Caption (if not overlay and title/subtitle is provided) */}
      {!overlay && (title || subtitle) && (
        <div className="mt-2">
          {title && <h3 className="text-black font-medium">{title}</h3>}
          {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
        </div>
      )}
    </>
  );

  // Wrap with link if href is provided
  if (href) {
    return (
      <a 
        href={href} 
        className="group block"
        onClick={onClick}
      >
        <CardContent />
      </a>
    );
  }

  // Wrap with button if onClick is provided but no href
  if (onClick && !href) {
    return (
      <button 
        className="group block w-full text-left"
        onClick={onClick}
      >
        <CardContent />
      </button>
    );
  }

  // Default: simple div wrapper
  return (
    <div className="group">
      <CardContent />
    </div>
  );
};

export default ImageCard;