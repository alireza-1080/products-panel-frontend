import { useEffect } from "react";
import RequiredInput from "../components/RequiredInput";
import Button from "../components/StateFullButton";
import useNewProductStore from "../store/newProductStore";

const AddProductPage = () => {
  const name = useNewProductStore((state) => state.name);
  const price = useNewProductStore((state) => state.price);
  const image = useNewProductStore((state) => state.image);
  const isLoading = useNewProductStore((state) => state.isLoading);
  const setName = useNewProductStore((state) => state.setName);
  const setPrice = useNewProductStore((state) => state.setPrice);
  const setImage = useNewProductStore((state) => state.setImage);
  const setIsLoading = useNewProductStore((state) => state.setIsLoading);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  };

  useEffect(() => {
    return () => {
      setName("");
      setPrice("");
      setImage("");
      setIsLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
