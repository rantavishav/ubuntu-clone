interface IRightClickMenuProps {
  active: boolean;
  points: {
    x: number;
    y: number;
  };
}

export const RightClickMenu = ({ active, points }: IRightClickMenuProps) => {
  return (
    <div
      id="default-menu"
      className={`
        ${active ? " block " : " hidden "} 
        " cursor-default w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm"`}
      style={{
        top: points.y,
        left: points.x,
      }}
    >
      <a
        rel="noreferrer noopener"
        href="https://github.com/vivek9patel/vivek9patel.github.io"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">🌟</span>{" "}
        <span className="ml-2">Star this Project</span>
      </a>
      <a
        rel="noreferrer noopener"
        href="https://github.com/vivek9patel/vivek9patel.github.io/issues"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">❗</span>{" "}
        <span className="ml-2">Report bugs</span>
      </a>

      <div className="flex justify-center w-full">
        <div className=" border-t border-gray-900 py-1 w-2/5"></div>
      </div>

      <a
        rel="noreferrer noopener"
        href="https://www.linkedin.com/in/vivek9patel/"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">🙋‍♂️</span>{" "}
        <span className="ml-2">
          Follow on <strong>Linkedin</strong>
        </span>
      </a>
      <a
        rel="noreferrer noopener"
        href="https://github.com/vivek9patel"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">🤝</span>{" "}
        <span className="ml-2">
          Follow on <strong>Github</strong>
        </span>
      </a>
      <a
        rel="noreferrer noopener"
        href="mailto:vivek.p9737@gmail.com"
        target="_blank"
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">📥</span>{" "}
        <span className="ml-2">Contact Me</span>
      </a>

      <div className="flex justify-center w-full">
        <div className=" border-t border-gray-900 py-1 w-2/5"></div>
      </div>

      <div
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5"
      >
        <span className="ml-5">🧹</span>{" "}
        <span className="ml-2">Reset Ubuntu</span>
      </div>
    </div>
  );
};
