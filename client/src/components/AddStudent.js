import React from "react";

const AddStudent = () => {
  return (
    <>
      <section className="attendance" id="add">
        <div className="image-upload">
          <form action="">
            <h1>Add new Student</h1>
            <label htmlFor="name">Enter Roll No.: </label>
            <input type="text" name="name" id="name" />{" "}
            <input
              type="file"
              multiple
              name="image"
              id="image"
              required
              accept=".jpg,.png"
            />
            <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddStudent;
