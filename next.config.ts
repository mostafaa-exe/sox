import createNextIntlPlugin from 'next-intl/plugin';
 
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};
 
export default withNextIntl(nextConfig);
