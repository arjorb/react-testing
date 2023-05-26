type GreetProp = {
  name?: string;
};

const Greet = (props: GreetProp) => {
  return <div>Hello {props.name}</div>;
};

export default Greet;
