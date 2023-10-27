import React from 'react';

const Column: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        width: '68px',
        height: '24px',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px'
      }}
    >
      {children}
    </div>
  );
};

export default function Final() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '120px', marginRight: '120px' }}>
      {/* Parte 1 */}
      <div
        style={{
          width: '65px',
          height: '28px',
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '28px'
        }}
      >
        UTFPR
      </div>
      
{/* Parte 3 */}
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Column>About</Column>
        <Column>Magazine</Column>
        <Column>About Us</Column>
      </div>

      {/* Parte 4 */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Column>Help</Column>
        <Column>Support</Column>
        <Column>Contact</Column>
      </div>

      {/* Parte 5 */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Column>Legal</Column>
        <Column>Privacy Policy</Column>
        <Column>Terms & Conditions</Column>
      </div>
    </div>

      
  );
}
