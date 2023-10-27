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
    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '120px', marginRight: '120px' }}>
      {/* Coluna 1 - Apenas "UTFPR" */}
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

      {/* Coluna 2 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Column>About</Column>
        <Column>Magazine</Column>
        <Column>About Us</Column>
      </div>

      {/* Coluna 3 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Column>Help</Column>
        <Column>Support</Column>
        <Column>Contact</Column>
      </div>

      {/* Coluna 4 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Column>Legal</Column>
        <Column>Privacy Policy</Column>
        <Column>Terms & Conditions</Column>
      </div>

      {/* Coluna 5 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Column>Legal</Column>
        <Column>Privacy Policy</Column>
        <Column>Terms & Conditions</Column>
      </div>
    </div>
  );
}