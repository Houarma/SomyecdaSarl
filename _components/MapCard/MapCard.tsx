'use client';

interface MapCardIframeProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  showShadow?: boolean;
  zoom?: number;
  mapType?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain';
}

export default function MapCardIframe({
  width = 'w-full',
  height = 'h-64',
  className = '',
  rounded = '2xl',
  showShadow = true,
  zoom = 13,
  mapType = 'roadmap',
}: MapCardIframeProps) {
  // Coordonnées de Ouagadougou
  const lat = 12.3714;
  const lng = -1.5197;

  const roundedClass = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  }[rounded];

  const shadowClass = showShadow ? 'shadow-lg' : '';

  // URL Google Maps Embed (pas besoin de clé API pour l'embed de base)
  const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&t=${mapType}&output=embed`;

  return (
    <div className={`${width} ${height} overflow-hidden ${roundedClass} ${shadowClass} ${className}`}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Carte de Ouagadougou"
      />
    </div>
  );
}