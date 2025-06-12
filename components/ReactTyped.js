import { ReactTyped } from "react-typed";

const ReactTypedComponent = () => {
  return (
    <p className="typed-text">
      <ReactTyped
        strings={[
          "Frontend Developer.",
          "React.js/Next.js Developer.",
          "Fullstack Developer.",
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
        backDelay={2000}
      />
    </p>
  );
};

export default ReactTypedComponent;
