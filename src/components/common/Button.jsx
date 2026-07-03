import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Reusable Button component
 * variant: "primary" | "outline"
 * to: if provided, renders as a Link (internal navigation)
 * href: if provided, renders as an <a> (external link)
 * onClick: if provided (and no `to`/`href`), renders as a <button>
 */
const Button = ({
  children,
  variant = 'primary',
  icon,
  to,
  href,
  onClick,
  type = 'button',
  className = '',
}) => {
  const classes = `btn btn--${variant} ${className}`.trim();

  const content = (
    <>
      {icon && <span className="btn__icon">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
