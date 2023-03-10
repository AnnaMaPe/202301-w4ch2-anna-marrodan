import { Form } from "../Form/Form";

const App = () => {
  return (
    <div className="container">
      <Form />
      <div className="row">
        <div className="container-gif offset-1 col-6">
          <img src="" className="gif" alt="" />
        </div>
      </div>
      <div className="row">
        <p className="error text-danger col">
          Error: I couldn't retrieve anything funny
        </p>
      </div>
    </div>
  );
};

export default App;
