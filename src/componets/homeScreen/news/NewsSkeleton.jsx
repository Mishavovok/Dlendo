import React from 'react';
import ContentLoader from 'react-content-loader';

const NewsSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={72}
    viewBox="0 0 1000 72"
    backgroundColor="#323054"
    foregroundColor="#ecebeb"
    {...props}>
   <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <rect x="30" y="35" rx="3" ry="3" width="12" height="12" /> 
    <rect x="50" y="32" rx="5" ry="5" width="65" height="9" /> 
    <rect x="50" y="46" rx="5" ry="5" width="54" height="9" /> 
    <circle cx="165" cy="43" r="18" /> 
    <rect x="195" y="39" rx="5" ry="5" width="80" height="9" /> 
    <rect x="337" y="31" rx="0" ry="0" width="35" height="0" /> 
    <rect x="310" y="40" rx="5" ry="5" width="80" height="9" /> 
    <circle cx="650" cy="44" r="18" /> 
    <rect x="675" y="31" rx="5" ry="5" width="80" height="9" /> 
    <rect x="675" y="47" rx="5" ry="5" width="80" height="7" /> 
    <rect x="830" y="36" rx="2" ry="2" width="12" height="12" /> 
    <rect x="850" y="39" rx="3" ry="3" width="120" height="6" /> 
    <circle cx="980" cy="42" r="6" /> 
    <rect x="440" y="38" rx="3" ry="3" width="12" height="12" /> 
    <rect x="460" y="39" rx="5" ry="5" width="100" height="9" />
  </ContentLoader>
);

export default NewsSkeleton;