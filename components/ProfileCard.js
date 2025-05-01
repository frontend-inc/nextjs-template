import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProfileCard = ({
  image,
  avatar,
  name,
  role,
  bio,
  socialLinks = [],
  href,
  onClick,
  className = '',
}) => {
  const CardComponent = href ? Link : onClick ? 'button' : 'div';
  const cardProps = {
    className: `overflow-hidden rounded-lg bg-white shadow transition-all hover:shadow-md ${className}`,
    ...(href && { href }),
    ...(onClick && { onClick, type: 'button' }),
  };

  return (
    <CardComponent {...cardProps}>
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={`${name}'s background`}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-5">
        {avatar && (
          <div className={`${image ? '-mt-16 mb-4' : 'mb-4'} flex justify-center`}>
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow">
              <Image
                src={avatar}
                alt={name}
                className="object-cover"
                fill
                sizes="96px"
              />
            </div>
          </div>
        )}
        <div className="text-center">
          <h3 className="mb-1 text-xl font-bold text-gray-900">{name}</h3>
          {role && <p className="mb-3 text-sm font-medium text-gray-600">{role}</p>}
          {bio && <p className="mb-4 text-gray-700">{bio}</p>}
          {socialLinks.length > 0 && (
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="text-gray-500 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </CardComponent>
  );
};

export default ProfileCard;