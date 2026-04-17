// Type declarations for Figma Make asset imports
// Legacy Figma asset declarations - assets now use real URLs or local files
declare module 'figma:asset/*' {
  const content: string;
  export default content;
}