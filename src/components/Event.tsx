import React from "react";

const Event = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} has been deleted`);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </form>
      <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sequi
        adipisci vitae id neque consectetur dignissimos pariatur laboriosam
        repellendus? Voluptas, facilis! Aspernatur eligendi doloribus nobis
        ipsam possimus necessitatibus mollitia consequuntur.
      </p>
      <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
    </div>
  );
};

export default Event;
