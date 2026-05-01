interface TestimonialProps {
  quote: string;
  name: string;
  photoUrl: string;
}
export const Testimonial = ({ quote, name, photoUrl }: TestimonialProps) => (
  <div className="testimonial">
    <img src={photoUrl} alt={name} style={{ borderRadius: '50%', width: '50px' }} />
    <p>"{quote}"</p>
    <h4>- {name}</h4>
  </div>
);