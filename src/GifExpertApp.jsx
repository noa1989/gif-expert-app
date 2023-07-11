import React, { Fragment, useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  const onAddCategory = (newCategory) => {
    !categories.includes(newCategory) &&
      setCategories([...categories, newCategory]);
  };
  return (
    <Fragment>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((c) => (
        <GifGrid key={c} category={c} />
      ))}
    </Fragment>
  );
};
