interface BannerProps {
  message: string;
  backgroundColor?: string;
}
export const Banner = ({ message, backgroundColor = 'gold' }: BannerProps) => (
  <div style={{ backgroundColor, padding: '40px', textAlign: 'center' }}>
    <h2>{message}</h2>
  </div>
);