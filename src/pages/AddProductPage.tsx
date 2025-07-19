import { useState } from "react";
import RequiredInput from "../components/RequiredInput";
import Button from "../components/StatefullButton";

const AddProductPage = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("0");
  const [image, setImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="container mx-auto flex h-full flex-1 flex-col items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="flex w-10/12 max-w-md flex-col gap-5"
      >
        <RequiredInput
          placeHolder="Product name"
          state={name}
          setState={setName}
        />
        <RequiredInput
          placeHolder="Product price"
          state={price}
          setState={setPrice}
        />
        <RequiredInput
          placeHolder="Product image"
          state={image}
          setState={setImage}
        />

        <Button isDisabled={isLoading} title="Add Product" />
      </form>
    </div>
  );
};

export default AddProductPage;
