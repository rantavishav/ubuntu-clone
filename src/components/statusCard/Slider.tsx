interface ISliderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  name: string;
  value: number | string;
}

const Slider = ({ onChange, className, name, value }: ISliderProps) => (
  <input
    type="range"
    onChange={onChange}
    className={`${className} cursor-pointer`}
    name={name}
    min="0"
    max="100"
    value={value}
    step="1"
  />
);

export default Slider;
