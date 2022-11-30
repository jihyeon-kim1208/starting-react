const Test = () => {
  const [value, setValue] = React.useState("Hello Hooks");
  const refName = React.useRef(null);
  const exTest = () => {
    setValue("Hello ref");
    refName.current.focus();
  };
  return (
    <div>
      <input ref={refName} value={value} />
      <button onClick={exTest}>click</button>
    </div>
  );
};

ReactDOM.render(<Test />, document.getElementById("root"));
