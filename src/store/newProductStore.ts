import { create } from "zustand";
import { devtools } from "zustand/middleware";

type NewProductStore = {
  name: string;
  price: string;
  image: string;
  isLoading: boolean;
  setName: (value: string) => void;
  setPrice: (value: string) => void;
  setImage: (value: string) => void;
  setIsLoading: (value: boolean) => void;
};

const useNewProductStore = create(
  devtools<NewProductStore>((set) => ({
    name: "",
    price: "",
    image: "",
    isLoading: false,
    setName: (name) => set({ name }),
    setPrice: (price) => {
      if (!isNaN(+price) && +price > 0) set({ price });
    },
    setImage: (image) => set({ image }),
    setIsLoading: (value) => set({ isLoading: value }),
  })),
);

export default useNewProductStore;
