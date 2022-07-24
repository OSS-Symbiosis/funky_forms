import { Formik, Field, Form } from "formik";

function App() {
  return (
    <div className="App">
      <h1>Funky formz🤘🏼😛</h1>
      <Formik
        initialValues={{ name: "", email: "", batch: ""}}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field name="name" type="text" placeholder="John Doe" />
          <Field name="email" type="email" placeholder="user@domain.com" />
          <Field name="batch" type="text" placeholder="IT 2020-24" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
