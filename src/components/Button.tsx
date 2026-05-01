interface ButtonProps {
  label: string;
  style?: React.CSSProperties;
}
export const Button = ({ label, style }: ButtonProps) => (
  <button style={style}>{label}</button>
);