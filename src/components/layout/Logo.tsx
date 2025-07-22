import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <img 
        src="/lovable-uploads/4e048db8-c9bb-40ce-b177-127638a2a814.png" 
        alt="UnifyEdge" 
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default Logo;